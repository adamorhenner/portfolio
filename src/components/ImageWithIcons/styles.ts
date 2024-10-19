import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    text-align: center;
`;

export const ImageWrapper = styled.div`
    background-color: #1A0B2E;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const IconWrapper = styled.div<{ top?: string, bottom?: string, left?: string, transform?: string, size?: string }>`
    position: absolute;
    background: #1A0B2E;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ top }) => top && `top: ${top};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    ${({ left }) => left && `left: ${left};`}
    ${({ transform }) => transform && `transform: ${transform};`}
    ${({ size }) => size && `width: ${size}; height: ${size};`}
`;