'use client';

import Image from 'next/image';
import ReactTypingEffect from 'react-typing-effect';

import type {Dictionary} from '@/i18n/getDictionary';

import portrait from '../../../public/images/adamor-cosmic.webp';
import * as S from './styles';

type Props = {
    dict: Dictionary['home'];
};

// Ferramentas que orbitam o retrato. A cor e so o "ponto" de identificacao.
const TOOLS = [
    {name: 'Spring Boot', color: '#9FD8B5', position: 'left-top'},
    {name: 'Java', color: '#E76F51', position: 'left-bottom'},
    {name: 'React', color: '#7FD4F0', position: 'right-top'},
    {name: 'PostgreSQL', color: '#7FB2F0', position: 'right-bottom'},
] as const;

const HomeSection = ({dict}: Props) => {
    return (
        <S.Hero>
            <S.Intro>
                <S.Greeting>{dict.greeting}</S.Greeting>

                <S.Name>
                    <span aria-hidden="true">&lt; </span>Adamor<br/>Henner<span aria-hidden="true"> /&gt;</span>
                </S.Name>

                <S.Role>
                    <span aria-hidden="true">&gt;&nbsp;</span>
                    <ReactTypingEffect
                        text={dict.roles}
                        speed={90}
                        eraseDelay={1600}
                        typingDelay={400}
                        cursorRenderer={() => <S.Cursor aria-hidden="true"/>}
                    />
                </S.Role>

                <S.Summary>{dict.summary}</S.Summary>

                <S.Actions>
                    <S.PrimaryAction href="#projetos">
                        {dict.ctaProjects} <span aria-hidden="true">→</span>
                    </S.PrimaryAction>
                    <S.SecondaryAction href="#experiencia">
                        <span aria-hidden="true">▶</span> {dict.ctaIntro}
                    </S.SecondaryAction>
                </S.Actions>
            </S.Intro>

            <S.Visual>
                <S.Glow aria-hidden="true"/>
                <S.Portrait>
                    <Image
                        src={portrait}
                        alt={dict.portraitAlt}
                        priority
                        sizes="(max-width: 768px) 80vw, 585px"
                    />
                </S.Portrait>

                {TOOLS.map((tool) => (
                    <S.Tool key={tool.name} data-position={tool.position}>
                        <S.ToolDot $color={tool.color} aria-hidden="true"/>
                        {tool.name}
                    </S.Tool>
                ))}

                <S.Badge>
                    <S.BadgeDot aria-hidden="true"/>
                    {dict.badgeLabel} <strong>{dict.badgeValue}</strong>
                </S.Badge>
            </S.Visual>

            <S.ScrollHint href="#experiencia" aria-label={dict.scrollLabel}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14"/>
                    <path d="M6 13l6 6 6-6"/>
                </svg>
            </S.ScrollHint>
        </S.Hero>
    );
};

export default HomeSection;
