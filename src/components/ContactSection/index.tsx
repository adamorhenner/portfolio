'use client';

import {useEffect, useState} from 'react';
import {FaDownload, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';

import {CV_FILES, EMAIL, LINKEDIN_URL} from '@/content/contact';
import type {Locale} from '@/i18n/config';
import type {Dictionary} from '@/i18n/getDictionary';
import {GITHUB_PROFILE_URL} from '@/lib/github';

import * as S from './styles';

type Props = {
    lang: Locale;
    dict: Dictionary['contact'];
};

const ContactSection = ({lang, dict}: Props) => {
    const [copied, setCopied] = useState(false);
    const cvFile = CV_FILES[lang];

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            // Sem permissao de clipboard (http, iframe): o mailto continua funcionando.
        }
    }

    return (
        <S.Wrapper>
            <S.Heading>
                <S.Title>{dict.title}</S.Title>
                <S.Subtitle>{dict.subtitle}</S.Subtitle>
            </S.Heading>

            <S.Pitch>{dict.pitch}</S.Pitch>

            <S.EmailRow>
                <S.EmailLink href={`mailto:${EMAIL}`}>
                    <FaEnvelope aria-hidden="true"/>
                    <span>
                        <S.SrOnly>{dict.emailLabel}: </S.SrOnly>
                        {EMAIL}
                    </span>
                </S.EmailLink>
                <S.CopyButton type="button" onClick={copyEmail}>
                    {copied ? dict.copiedLabel : dict.copyLabel}
                </S.CopyButton>
                {/* Anuncia a copia para leitor de tela */}
                <S.SrOnly aria-live="polite">{copied ? dict.copiedLabel : ''}</S.SrOnly>
            </S.EmailRow>

            <S.Links>
                <li>
                    <S.Channel href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin aria-hidden="true"/> {dict.linkedinLabel}
                    </S.Channel>
                </li>
                <li>
                    <S.Channel href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                        <FaGithub aria-hidden="true"/> {dict.githubLabel}
                    </S.Channel>
                </li>
                {cvFile && (
                    <li>
                        <S.Channel href={cvFile} download data-variant="primary">
                            <FaDownload aria-hidden="true"/> {dict.cvLabel}
                        </S.Channel>
                    </li>
                )}
            </S.Links>
        </S.Wrapper>
    );
};

export default ContactSection;
