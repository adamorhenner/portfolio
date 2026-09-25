'use client';

import {useEffect, useRef, useState} from 'react';

import type {Dictionary} from '@/i18n/getDictionary';

import * as S from './styles';

type Props = {
    dict: Dictionary['experience'];
};

type Mode = 'crawl' | 'read';

const ExperienceSection = ({dict}: Props) => {
    const [mode, setMode] = useState<Mode>('crawl');
    const [paused, setPaused] = useState(false);
    const [inView, setInView] = useState(false);
    // Muda a cada vez que a intro volta a ser exibida, para recomecar do inicio.
    const [crawlKey, setCrawlKey] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Quem pediu menos animacao no sistema ja entra lendo o texto parado.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setMode('read');
    }, []);

    // A intro so roda com a secao na tela: quem chega pelo botao "Assistir"
    // ve a abertura desde o comeco, e fora da tela nao gasta processamento.
    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
                if (entry.isIntersecting) setCrawlKey((key) => key + 1);
            },
            {threshold: 0.35},
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const showCrawl = () => {
        setMode('crawl');
        setPaused(false);
        setCrawlKey((key) => key + 1);
    };

    const running = mode === 'crawl' && inView && !paused;

    return (
        <S.Wrapper ref={sectionRef} data-mode={mode}>
            <S.Header>
                <S.Label>{dict.sectionLabel}</S.Label>
                <S.Toggle role="group" aria-label={dict.modeLabel}>
                    <S.ToggleOption type="button" aria-pressed={mode === 'crawl'} onClick={showCrawl}>
                        <span aria-hidden="true">▶</span> {dict.modeCrawl}
                    </S.ToggleOption>
                    <S.ToggleOption type="button" aria-pressed={mode === 'read'} onClick={() => setMode('read')}>
                        <span aria-hidden="true">≡</span> {dict.modeRead}
                    </S.ToggleOption>
                </S.Toggle>
            </S.Header>

            {mode === 'crawl' ? (
                <S.Stage>
                    {/* O texto animado e decorativo para leitor de tela: o mesmo conteudo
                        existe no modo leitura, acessivel pelo botao acima. */}
                    <S.Plane aria-hidden="true">
                        <S.Crawl key={crawlKey} style={{animationPlayState: running ? 'running' : 'paused'}}>
                            <S.Episode>{dict.episode}</S.Episode>
                            <S.CrawlTitle>{dict.title}</S.CrawlTitle>
                            {dict.paragraphs.map((paragraph) => (
                                <S.CrawlParagraph key={paragraph.slice(0, 24)}>{paragraph}</S.CrawlParagraph>
                            ))}
                        </S.Crawl>
                    </S.Plane>

                    <S.Controls>
                        <S.RoundButton
                            type="button"
                            aria-label={paused ? dict.resume : dict.pause}
                            onClick={() => setPaused((value) => !value)}
                        >
                            {paused ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M7 4l13 8-13 8z"/>
                                </svg>
                            ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <rect x="6" y="4" width="4" height="16"/>
                                    <rect x="14" y="4" width="4" height="16"/>
                                </svg>
                            )}
                        </S.RoundButton>
                        <S.SkipButton type="button" onClick={() => setMode('read')}>{dict.skip}</S.SkipButton>
                    </S.Controls>
                </S.Stage>
            ) : (
                <S.Read>
                    <S.Story>
                        <S.ReadEpisode>{dict.episode}</S.ReadEpisode>
                        <S.ReadTitle>{dict.readTitle}</S.ReadTitle>
                        {dict.paragraphs.map((paragraph) => (
                            <S.ReadParagraph key={paragraph.slice(0, 24)}>{paragraph}</S.ReadParagraph>
                        ))}
                        <S.Highlights>
                            {dict.highlights.map((item) => (
                                <li key={item.slice(0, 24)}>{item}</li>
                            ))}
                        </S.Highlights>
                    </S.Story>

                    <S.Card>
                        <S.CardHeader>
                            <S.Company>{dict.company}</S.Company>
                            <S.CompanyMeta>{dict.companyMeta}</S.CompanyMeta>
                        </S.CardHeader>

                        <S.Roles aria-label={dict.rolesLabel}>
                            {dict.roles.map((role) => (
                                <S.Role key={role.title} data-current={role.current || undefined}>
                                    <S.RoleTitle>{role.title}</S.RoleTitle>
                                    <S.RolePeriod>{role.period}</S.RolePeriod>
                                </S.Role>
                            ))}
                        </S.Roles>

                        <S.Stack aria-label="Stack">
                            {dict.stack.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </S.Stack>

                        <S.Education>{dict.education}</S.Education>
                    </S.Card>
                </S.Read>
            )}
        </S.Wrapper>
    );
};

export default ExperienceSection;
