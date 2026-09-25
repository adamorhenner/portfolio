'use client';

import {useServerInsertedHTML} from 'next/navigation';
import React, {useState} from 'react';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

/**
 * Coleta o CSS gerado pelo styled-components durante o render no servidor e o
 * injeta no <head>. Sem isso a pagina chega ao navegador sem estilo por um
 * instante (FOUC), porque o CSS so seria criado depois da hidratacao.
 */
export default function StyledComponentsRegistry({children}: { children: React.ReactNode }) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
