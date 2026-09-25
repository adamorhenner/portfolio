/**
 * O pacote react-typing-effect nao publica tipos e nao existe @types para ele.
 * Esta declaracao cobre apenas as props que o projeto usa.
 */
declare module 'react-typing-effect' {
    import * as React from 'react';

    export interface ReactTypingEffectProps {
        text: string | readonly string[];
        className?: string;
        speed?: number;
        eraseSpeed?: number;
        eraseDelay?: number;
        typingDelay?: number;
        staticText?: string;
        cursor?: string;
        displayTextRenderer?: (text: string, index: number) => React.ReactNode;
        cursorRenderer?: (cursor: string) => React.ReactNode;
    }

    const ReactTypingEffect: React.FC<ReactTypingEffectProps>;
    export default ReactTypingEffect;
}
