import {NextRequest, NextResponse} from 'next/server';

import {defaultLocale, isLocale, LOCALE_COOKIE, locales} from '@/i18n/config';

/**
 * Decide o idioma na seguinte ordem:
 *   1. cookie -- a escolha manual do visitante vence sempre. Sem isso, quem
 *      clica em "Portugues" volta para o ingles no proximo carregamento.
 *   2. cabecalho Accept-Language do navegador.
 *
 * Usamos o idioma do navegador, e nao o IP: um recrutador brasileiro morando
 * fora continua querendo portugues, e um estrangeiro de VPN no Brasil continua
 * querendo ingles. O idioma configurado e o sinal honesto; a localizacao nao e.
 */
function resolveLocale(request: NextRequest) {
    const saved = request.cookies.get(LOCALE_COOKIE)?.value;
    if (isLocale(saved)) return saved;

    const header = request.headers.get('accept-language') ?? '';
    const preferred = header.split(',')[0]?.trim().toLowerCase() ?? '';

    return preferred.startsWith('pt') ? 'pt' : defaultLocale;
}

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const alreadyLocalized = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );
    if (alreadyLocalized) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/${resolveLocale(request)}${pathname === '/' ? '' : pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    // Nao redireciona assets, rotas de API nem arquivos com extensao.
    matcher: ['/((?!_next|api|images|.*\\..*).*)'],
};
