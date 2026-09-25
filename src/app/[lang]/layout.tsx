import type {Metadata} from 'next';

import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import {defaultLocale, isLocale, type Locale, locales} from '@/i18n/config';
import {getDictionary} from '@/i18n/getDictionary';

import '@/styles/global.css';

const SITE_URL = 'https://adamorhenner.vercel.app';

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
        <html lang={lang === 'pt' ? 'pt-BR' : 'en'}>
        <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    );
}
