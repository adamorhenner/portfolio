import type {Metadata} from 'next';
import {IBM_Plex_Sans, JetBrains_Mono, Saira_Extra_Condensed} from 'next/font/google';

import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import {defaultLocale, isLocale, type Locale, locales} from '@/i18n/config';
import {getDictionary} from '@/i18n/getDictionary';

import '@/styles/global.css';

const SITE_URL = 'https://adamorhenner.vercel.app';

// next/font hospeda as fontes junto com o site (sem request ao Google em
// runtime) e expoe cada uma como variavel CSS usada no global.css.
const mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
    variable: '--font-mono',
    display: 'swap',
});

const sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-sans',
    display: 'swap',
});

const crawl = Saira_Extra_Condensed({
    subsets: ['latin'],
    weight: ['500', '700'],
    variable: '--font-crawl',
    display: 'swap',
});

export function generateStaticParams() {
    return locales.map((lang) => ({lang}));
}

export async function generateMetadata({params}: { params: { lang: string } }): Promise<Metadata> {
    const lang: Locale = isLocale(params.lang) ? params.lang : defaultLocale;
    const dict = await getDictionary(lang);

    return {
        metadataBase: new URL(SITE_URL),
        title: dict.meta.title,
        description: dict.meta.description,
        // hreflang: sem isso o Google trata /en e /pt como conteudo duplicado
        // em vez de traducoes uma da outra.
        alternates: {
            canonical: `/${lang}`,
            languages: {
                en: '/en',
                'pt-BR': '/pt',
                'x-default': `/${defaultLocale}`,
            },
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `${SITE_URL}/${lang}`,
            locale: lang === 'pt' ? 'pt_BR' : 'en_US',
            type: 'website',
        },
    };
}

export default function RootLayout({
                                       children,
                                       params,
                                   }: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    const lang: Locale = isLocale(params.lang) ? params.lang : defaultLocale;

    return (
        <html lang={lang === 'pt' ? 'pt-BR' : 'en'} className={`${mono.variable} ${sans.variable} ${crawl.variable}`}>
        <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    );
}
