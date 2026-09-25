'use client';

import {useEffect, useState} from 'react';
import {FaDownload} from 'react-icons/fa';

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
            <S.Intro>
                <S.Label>{dict.sectionLabel}</S.Label>
                <S.Title>{dict.title}</S.Title>
                <S.Pitch>{dict.pitch}</S.Pitch>
            </S.Intro>

            <S.Terminal aria-label={dict.terminalLabel}>
                <S.TerminalBar aria-hidden="true">
                    <span/><span/><span/>
                    <S.TerminalName>contact.sh</S.TerminalName>
                </S.TerminalBar>

                <S.TerminalBody>
                    <S.Prompt aria-hidden="true"><span>~</span> $ cat contact.sh</S.Prompt>

                    <S.EmailRow>
                        <S.Key aria-hidden="true">email=</S.Key>
                        <S.EmailLink href={`mailto:${EMAIL}`}>
                            <S.SrOnly>{dict.emailLabel}: </S.SrOnly>&quot;{EMAIL}&quot;
                        </S.EmailLink>
                        <S.CopyButton type="button" onClick={copyEmail}>
                            {copied ? dict.copiedLabel : dict.copyLabel}
                        </S.CopyButton>
                    </S.EmailRow>

                    <S.Channel href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        <S.Key>linkedin</S.Key><span aria-hidden="true">→</span> in/adamorhenner
                        <S.External aria-hidden="true">↗</S.External>
                    </S.Channel>
                    <S.Channel href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                        <S.Key>github</S.Key><span aria-hidden="true">→</span> adamorhenner
                        <S.External aria-hidden="true">↗</S.External>
                    </S.Channel>

                    {cvFile && (
                        <S.CvLink href={cvFile} download>
                            <FaDownload aria-hidden="true"/> {dict.cvLabel}
                        </S.CvLink>
                    )}

                    <S.Status aria-live="polite">{copied ? dict.copiedStatus : ''}</S.Status>
                </S.TerminalBody>
            </S.Terminal>
        </S.Wrapper>
    );
};

export default ContactSection;
