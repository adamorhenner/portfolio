'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

import {type Locale, LOCALE_COOKIE, locales} from '@/i18n/config';
import type {Dictionary} from '@/i18n/getDictionary';

import * as S from './styles';

type SectionId = 'home' | 'experiencia' | 'projetos' | 'contato';

const SECTION_IDS: SectionId[] = ['home', 'experiencia', 'projetos', 'contato'];

type Props = {
    lang: Locale;
    dict: Dictionary['nav'];
};

const NavbarComponent = ({lang, dict}: Props) => {
    const [activeSection, setActiveSection] = useState<SectionId>('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const sections: { id: SectionId; label: string }[] = [
        {id: 'home', label: dict.home},
        {id: 'experiencia', label: dict.experience},
        {id: 'projetos', label: dict.projects},
        {id: 'contato', label: dict.contact},
    ];

    // Marca no menu a secao que esta no meio da tela enquanto a pessoa rola.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
                });
            },
            {rootMargin: '-45% 0px -50% 0px'},
        );

        SECTION_IDS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Fundo translucido so depois de sair do topo, para o hero ficar limpo.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const changeLanguage = (next: Locale) => {
        if (next === lang) return;

        // A escolha manual e gravada antes de navegar para que o middleware
        // pare de olhar o Accept-Language do navegador nas proximas visitas.
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
        router.push(pathname.replace(`/${lang}`, `/${next}`));
        router.refresh();
    };

    return (
        <S.Header data-scrolled={scrolled || menuOpen}>
            <S.Logo href="#home" aria-label="Adamor Henner">
                <span aria-hidden="true">&lt;</span>AH<span aria-hidden="true">/&gt;</span>
            </S.Logo>

            <S.MenuButton
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-label={menuOpen ? dict.menuClose : dict.menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    {menuOpen ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M4 7h16M4 12h16M4 17h10"/>}
                </svg>
            </S.MenuButton>

            <S.Menu id="site-menu" data-open={menuOpen}>
                <nav aria-label={dict.sectionsLabel}>
                    <S.Links>
                        {sections.map(({id, label}) => (
                            <li key={id}>
                                <S.Link
                                    href={`#${id}`}
                                    aria-current={activeSection === id ? 'true' : undefined}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span aria-hidden="true">#</span>{label}
                                </S.Link>
                            </li>
                        ))}
                    </S.Links>
                </nav>

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
            </S.Menu>
        </S.Header>
    );
};

export default NavbarComponent;
