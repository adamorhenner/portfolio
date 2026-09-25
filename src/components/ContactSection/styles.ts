import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 0 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 700;
  color: #E9DEF5;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #A68AB8;
`;

export const Pitch = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #D3C4E3;
`;

export const EmailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background-color: #190D2B;
  border: 1px solid #2E1E45;
  border-radius: 10px;
`;

export const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
  font-size: clamp(0.95rem, 2.6vw, 1.15rem);
  font-weight: 600;
  color: #E9DEF5;
  overflow-wrap: anywhere;

  svg {
    flex: none;
    color: #C3A2DC;
  }

  &:hover {
    color: #C3A2DC;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

/* Sobrescreve o estilo global de <button> (azul) */
export const CopyButton = styled.button`
  margin-left: auto;
  padding: 0.35rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #C3A2DC;
  background-color: transparent;
  border: 1px solid #5C2F6E;
  border-radius: 6px;
  min-width: 5.5rem;

  &:hover {
    background-color: #231238;
    border-color: #C3A2DC;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: 2px;
  }
`;

export const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  > li {
    margin: 0;
  }
`;

export const Channel = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  font-weight: 600;
  color: #E9DEF5;
  background-color: #190D2B;
  border: 1px solid #2E1E45;
  border-radius: 8px;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    text-decoration: none;
    border-color: #5C2F6E;
    background-color: #231238;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: 3px;
  }

  &[data-variant='primary'] {
    color: #11071F;
    background-color: #C3A2DC;
    border-color: #C3A2DC;
  }

  &[data-variant='primary']:hover {
    background-color: #D6BDEA;
  }
`;

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
