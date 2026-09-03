'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useState} from 'react';

import {type Locale, LOCALE_COOKIE, locales} from '@/i18n/config';
import type {Dictionary} from '@/i18n/getDictionary';

import * as S from './styles';

type SectionId = 'home' | 'experiencia' | 'projetos' | 'contato';

type Props = {
    lang: Locale;
    dict: Dictionary['nav'];
};

const NavbarComponent = ({lang, dict}: Props) => {
    const [activeSection, setActiveSection] = useState<SectionId>('home');
    const router = useRouter();
    const pathname = usePathname();

    const sections: { id: SectionId; label: string }[] = [
        {id: 'home', label: dict.home},
        {id: 'experiencia', label: dict.experience},
        {id: 'projetos', label: dict.projects},
        {id: 'contato', label: dict.contact},
    ];

    const changeLanguage = (next: Locale) => {
        if (next === lang) return;

        // A escolha manual e gravada antes de navegar para que o middleware
        // pare de olhar o Accept-Language do navegador nas proximas visitas.
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
        router.push(pathname.replace(`/${lang}`, `/${next}`));
        router.refresh();
    };

    return (
        <S.Navbar>
            <S.NavbarContent>
                {sections.map(({id, label}) => (
                    <S.NavbarItem key={id} data-active={activeSection === id}>
                        <S.Link href={`#${id}`} onClick={() => setActiveSection(id)}>
                            {label}
                        </S.Link>
                    </S.NavbarItem>
                ))}

                <li>
                    <S.LanguageSwitch role="group" aria-label={dict.languageLabel}>
                        {locales.map((locale) => (
                            <S.LanguageOption
                                key={locale}
                                type="button"
                                lang={locale}
                                aria-pressed={locale === lang}
                                onClick={() => changeLanguage(locale)}
                            >
                                {locale.toUpperCase()}
                            </S.LanguageOption>
                        ))}
                    </S.LanguageSwitch>
                </li>
            </S.NavbarContent>
        </S.Navbar>
    );
};

export default NavbarComponent;
