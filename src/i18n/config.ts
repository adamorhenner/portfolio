export const locales = ['en', 'pt'] as const;

export type Locale = (typeof locales)[number];

/**
 * Ingles e o padrao: o portfolio mira vagas internacionais, entao qualquer
 * idioma que nao seja portugues cai no publico que queremos alcancar.
 */
export const defaultLocale: Locale = 'en';

/** Nome do cookie onde a escolha manual do visitante e guardada. */
export const LOCALE_COOKIE = 'lang';

export function isLocale(value: unknown): value is Locale {
    return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
