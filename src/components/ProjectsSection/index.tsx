'use client';

import ProjectCard from '@/components/ProjectCard';
import type {Locale} from '@/i18n/config';
import type {Dictionary} from '@/i18n/getDictionary';
import {GITHUB_PROFILE_URL, type Project} from '@/lib/github';

import * as S from './styles';

type Props = {
    projects: Project[];
    lang: Locale;
    dict: Dictionary['projects'];
};

/**
 * O primeiro projeto que esta no ar vira destaque (ocupa duas colunas):
 * um link clicavel convence mais que codigo. Os demais seguem a ordem da API.
 */
function orderWithFeatured(projects: Project[]) {
    const index = projects.findIndex((project) => project.demoUrl);
    if (index === -1) return {featured: null, rest: projects};
    return {
        featured: projects[index],
        rest: projects.filter((_, i) => i !== index),
    };
}

const ProjectsSection = ({projects, lang, dict}: Props) => {
    const {featured, rest} = orderWithFeatured(projects);

    return (
        <S.Wrapper>
            <S.Heading>
                <div>
                    <S.Label>{dict.sectionLabel}</S.Label>
                    <S.Title>{dict.title}</S.Title>
                    <S.Subtitle>{dict.subtitle}</S.Subtitle>
                </div>
                <S.ProfileLink href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                    {dict.githubLink}
                </S.ProfileLink>
            </S.Heading>

            {projects.length === 0 ? (
                <S.Empty>{dict.emptyState}</S.Empty>
            ) : (
                <S.Grid>
                    {featured && (
                        <S.FeaturedItem>
                            <ProjectCard project={featured} lang={lang} dict={dict} featured/>
                        </S.FeaturedItem>
                    )}
                    {rest.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} lang={lang} dict={dict}/>
                        </li>
                    ))}
                </S.Grid>
            )}
        </S.Wrapper>
    );
};

export default ProjectsSection;
