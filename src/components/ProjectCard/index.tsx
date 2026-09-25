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
    featured?: boolean;
};

function formatLastCommit(iso: string, lang: Locale) {
    return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
        month: 'short',
        year: 'numeric',
    }).format(new Date(iso));
}

const ProjectCard = ({project, lang, dict, featured = false}: Props) => {
    const hasCover = featured && Boolean(project.cover);

    return (
        <S.Card data-featured={featured || undefined} data-cover={hasCover || undefined}>
            {hasCover && <S.Cover src={project.cover as string} alt="" loading="lazy"/>}

            <S.Body>
                <S.Meta>
                    <S.LanguageDot $color={languageColor(project.language)} aria-hidden="true"/>
                    <S.RepoName>
                        {project.name}
                        {project.language && ` · ${project.language}`}
                    </S.RepoName>
                    {project.demoUrl && <S.LiveBadge>● {dict.liveBadge}</S.LiveBadge>}
                    {!project.demoUrl && project.stars > 0 && <S.Stars>★ {project.stars}</S.Stars>}
                </S.Meta>

                <S.Title>{project.title}</S.Title>

                {project.description && <S.Description>{project.description}</S.Description>}

                {project.topics.length > 0 && (
                    <S.Topics>
                        {project.topics.slice(0, 5).map((topic) => (
                            <S.Topic key={topic}>{topic}</S.Topic>
                        ))}
                    </S.Topics>
                )}

                <S.Footer>
                    <S.LastCommit>
                        {dict.lastCommitLabel} {formatLastCommit(project.lastCommit, lang)}
                    </S.LastCommit>

                    <S.Links>
                        <S.CardLink href={project.url} target="_blank" rel="noopener noreferrer">
                            {dict.codeLabel}
                        </S.CardLink>

                        {project.demoUrl && (
                            <S.DemoLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                {dict.demoLabel} <span aria-hidden="true">↗</span>
                            </S.DemoLink>
                        )}
                    </S.Links>
                </S.Footer>
            </S.Body>
        </S.Card>
    );
};

export default ProjectCard;
