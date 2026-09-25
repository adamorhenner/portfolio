'use client';

import type {Locale} from '@/i18n/config';
import type {Dictionary} from '@/i18n/getDictionary';
import type {Project} from '@/lib/github';
import {languageColor} from '@/lib/languageColors';

import * as S from './styles';

type Props = {
    project: Project;
    lang: Locale;
    dict: Dictionary['projects'];
};

function formatLastCommit(iso: string, lang: Locale) {
    return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
        month: 'short',
        year: 'numeric',
    }).format(new Date(iso));
}

const ProjectCard = ({project, lang, dict}: Props) => {
    return (
        <S.Card>
            {project.cover && <S.Cover src={project.cover} alt="" loading="lazy"/>}

            <S.Header>
                <S.LanguageDot $color={languageColor(project.language)} aria-hidden="true"/>
                <S.RepoName>{project.name}</S.RepoName>
                {project.stars > 0 && <S.Stars>★ {project.stars}</S.Stars>}
            </S.Header>

            <S.Title>{project.title}</S.Title>

            {project.description && <S.Description>{project.description}</S.Description>}

            {project.topics.length > 0 && (
                <S.Topics>
                    {project.topics.map((topic) => (
                        <S.Topic key={topic}>{topic}</S.Topic>
                    ))}
                </S.Topics>
            )}

            <S.Footer>
                <S.LastCommit>
                    {dict.lastCommitLabel} {formatLastCommit(project.lastCommit, lang)}
                </S.LastCommit>

                <S.Links>
                    <S.CardLink
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {dict.codeLabel}
                    </S.CardLink>

                    {project.demoUrl && (
                        <S.CardLink
                            data-variant="demo"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {dict.demoLabel}
                        </S.CardLink>
                    )}
                </S.Links>
            </S.Footer>
        </S.Card>
    );
};

export default ProjectCard;
