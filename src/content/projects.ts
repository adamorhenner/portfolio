/**
 * O que a API do GitHub nao consegue dar.
 *
 * Tudo o que aparece nos cards vem da API -- nome, descricao, linguagem,
 * etiquetas, links, data do ultimo commit. Este arquivo existe so para os tres
 * casos em que a API e insuficiente. Deixe vazio o que nao precisar sobrescrever.
 */

/** Nome exibido, quando o nome do repositorio nao serve como titulo. */
export const displayNames: Record<string, string> = {
    'car-store-kafka': 'Car Store · Kafka',
    'algamoney-api': 'AlgaMoney API',
};

/**
 * O GitHub guarda uma unica description por repositorio, e ela esta em ingles
 * porque o GitHub e uma plataforma global. A versao em portugues do site pega
 * o texto daqui; sem entrada, usa a description original.
 */
export const ptDescriptions: Record<string, string> = {
    nertec:
        'Landing page para assistência técnica de computadores: um formulário de triagem coleta dispositivo, problema, urgência e disponibilidade, e abre o WhatsApp com a mensagem já formatada.',
    'oauth2-microservices':
        'Servidor de autorização OAuth2 emitindo JWT para dois serviços Spring Boot independentes (usuários e posts), orquestrados com Docker Compose.',
    'car-store-kafka':
        'Loja de veículos orientada a eventos em três serviços Spring Boot: a API publica no Kafka e um serviço consumidor persiste, desacoplando a escrita do armazenamento.',
    portfolio:
        'Portfólio pessoal em Next.js 14 e TypeScript; a grade de projetos vem da API do GitHub, renderizada no servidor com ISR.',
    'algamoney-api':
        'API REST de finanças pessoais: lançamentos, categorias e pessoas, com JPA, segurança por perfil e relatórios.',
};

/**
 * Imagem de capa, servida de /public. A API nao expoe screenshot.
 * Ex.: nertec: '/covers/nertec.png'
 */
export const covers: Record<string, string> = {};
