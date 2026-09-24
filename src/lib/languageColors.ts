/** Mesmas cores que o GitHub usa para cada linguagem. */
const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#663399',
    Python: '#3572A5',
    Kotlin: '#A97BFF',
    Go: '#00ADD8',
    Shell: '#89e051',
    'C++': '#f34b7d',
    Lua: '#000080',
};

export function languageColor(language: string | null) {
    if (!language) return '#6E6E6E';
    return LANGUAGE_COLORS[language] ?? '#8B7BA5';
}
