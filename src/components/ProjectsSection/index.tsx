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

const ProjectsSection = ({projects, lang, dict}: Props) => {
    return (
        <S.Wrapper>
            <S.Heading>
                <S.Title>{dict.title}</S.Title>
                <S.Subtitle>{dict.subtitle}</S.Subtitle>
            </S.Heading>

            {projects.length === 0 ? (
                <S.Empty>{dict.emptyState}</S.Empty>
            ) : (
                <S.Grid>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard project={project} lang={lang} dict={dict}/>
                        </li>
                    ))}
                </S.Grid>
            )}

            <S.ProfileLink href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                {dict.githubLink} →
            </S.ProfileLink>
        </S.Wrapper>
    );
};

export default ProjectsSection;
