import type {Locale} from '@/i18n/config';

export const EMAIL = 'adamorhenner2@outlook.com';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/adamorhenner/';

/**
 * Caminho do CV dentro de `public/`, por idioma. `null` esconde o botao:
 * melhor nao ter o link do que ter um link que da 404 no site publicado.
 * Ex.: coloque o arquivo em `public/cv/adamor-henner-cv-en.pdf` e troque
 * `en: null` por `en: '/cv/adamor-henner-cv-en.pdf'`.
 */
export const CV_FILES: Record<Locale, string | null> = {
    en: null,
    pt: null,
};
