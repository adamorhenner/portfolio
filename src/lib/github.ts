import {covers, displayNames, ptDescriptions} from '@/content/projects';
import type {Locale} from '@/i18n/config';

const GITHUB_USER = 'adamorhenner';

/**
 * O topic 'portfolio' e o filtro: so aparece no site o repositorio marcado com
 * ele no GitHub. Publicar um projeto novo vira um clique la, sem deploy aqui.
 */
const PORTFOLIO_TOPIC = 'portfolio';

const SEARCH_URL =
    `https://api.github.com/search/repositories` +
    `?q=user:${GITHUB_USER}+topic:${PORTFOLIO_TOPIC}&sort=updated&order=desc&per_page=30`;

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;

type GitHubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    topics?: string[];
    pushed_at: string;
    stargazers_count: number;
};

export type Project = {
    id: number;
    name: string;
    title: string;
    description: string;
    url: string;
    demoUrl: string | null;
    language: string | null;
    topics: string[];
    lastCommit: string;
    stars: number;
    cover: string | null;
};

function toProject(repo: GitHubRepo, locale: Locale): Project {
    const homepage = repo.homepage?.trim();

    return {
        id: repo.id,
        name: repo.name,
        title: displayNames[repo.name] ?? repo.name,
        // A API guarda uma unica description, em ingles. O portugues vem do
        // arquivo local; sem traducao, cai no texto original em vez de vazio.
        description:
            (locale === 'pt' ? ptDescriptions[repo.name] : undefined) ?? repo.description ?? '',
        url: repo.html_url,
        demoUrl: homepage ? homepage : null,
        language: repo.language,
        // 'portfolio' e o mecanismo do filtro, nao parte da stack: mostrar essa
        // etiqueta em todo card seria ruido.
        topics: (repo.topics ?? []).filter((topic) => topic !== PORTFOLIO_TOPIC),
        lastCommit: repo.pushed_at,
        stars: repo.stargazers_count,
        cover: covers[repo.name] ?? null,
    };
}

export async function getProjects(locale: Locale): Promise<Project[]> {
    try {
        const response = await fetch(SEARCH_URL, {
            headers: {Accept: 'application/vnd.github+json'},
            // Uma chamada por hora. Sem token o limite da busca e baixo, e o
            // cache do Next resolve isso sem precisar autenticar.
            next: {revalidate: 3600},
        });

        if (!response.ok) return [];

        const data = (await response.json()) as { items?: GitHubRepo[] };

        return (data.items ?? [])
            .map((repo) => toProject(repo, locale))
            // Mais recente primeiro por ultimo commit, e nao por 'updated' da
            // API: editar a descricao de um repo nao deveria promove-lo.
            .sort((a, b) => Date.parse(b.lastCommit) - Date.parse(a.lastCommit));
    } catch {
        // A secao nunca derruba a pagina: sem dados, o componente mostra o
        // estado vazio com link para o GitHub.
        return [];
    }
}
