'use client';

import type {Dictionary} from '@/i18n/getDictionary';

import * as S from './styles';

type Props = {
    dict: Dictionary['experience'];
};

const ExperienceTimeline = ({dict}: Props) => {
    return (
        <S.Wrapper aria-labelledby="experience-timeline-title">
            <S.Heading>
                <S.Title id="experience-timeline-title">{dict.timelineTitle}</S.Title>
                <S.Subtitle>{dict.timelineSubtitle}</S.Subtitle>
            </S.Heading>

            <S.CompanyCard>
                <S.CompanyHeader>
                    <S.CompanyName>{dict.company}</S.CompanyName>
                    <S.CompanyMeta>{dict.companyMeta}</S.CompanyMeta>
                </S.CompanyHeader>

                <S.Body>
                    {/* Progressao de cargos, do atual para o primeiro */}
                    <S.Roles>
                        {dict.roles.map((role) => (
                            <S.Role key={role.title} data-current={role.current || undefined}>
                                <S.RoleTitle>{role.title}</S.RoleTitle>
                                <S.RolePeriod>{role.period}</S.RolePeriod>
                            </S.Role>
                        ))}
                    </S.Roles>

                    <S.Details>
                        <S.Label>{dict.highlightsLabel}</S.Label>
                        <S.Highlights>
                            {dict.highlights.map((item) => (
                                <li key={item.slice(0, 32)}>{item}</li>
                            ))}
                        </S.Highlights>

                        <S.Stack aria-label="Stack">
                            {dict.stack.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </S.Stack>
                    </S.Details>
                </S.Body>
            </S.CompanyCard>

            <S.Education>
                <S.Label>{dict.educationLabel}</S.Label>
                <S.EducationLine>
                    <strong>{dict.education.degree}</strong>
                    <span>{dict.education.school} · {dict.education.period}</span>
                </S.EducationLine>
            </S.Education>
        </S.Wrapper>
    );
};

export default ExperienceTimeline;
