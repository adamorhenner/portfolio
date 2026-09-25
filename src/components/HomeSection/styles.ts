import styled, {keyframes} from 'styled-components';

const blink = keyframes`
  50% { opacity: 0; }
`;

export const Hero = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1.5rem;
  padding: 80px clamp(1rem, 4.5vw, 4rem) 0;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    padding-top: 96px;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  padding-bottom: 60px;
  font-family: var(--mono);

  @media (max-width: 900px) {
    padding-bottom: 1.5rem;
  }
`;

export const Greeting = styled.p`
  font-size: 1rem;
  color: var(--muted);
`;

export const Name = styled.h1`
  font-size: clamp(2.8rem, 6.4vw, 5.25rem);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--heading);

  span {
    color: var(--muted);
    font-weight: 400;
  }
`;

export const Role = styled.p`
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  font-size: clamp(1.1rem, 2.2vw, 1.75rem);
  color: var(--glow);

  > span:first-child {
    color: var(--muted);
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.5em;
  height: 1.1em;
  margin-left: 0.2em;
  vertical-align: -0.15em;
  background-color: var(--glow);
  animation: ${blink} 1.1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Summary = styled.p`
  max-width: 34rem;
  font-family: var(--sans);
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  color: var(--body-text);
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  padding-top: 0.5rem;
`;

const actionBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 52px;
  padding: 0 1.5rem;
  border-radius: 999px;
  font-size: 0.95rem;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
`;

export const PrimaryAction = styled.a`
  ${actionBase};
  background-color: var(--glow);
  color: var(--void);
  font-weight: 700;

  &:hover {
    background-color: var(--glow-bright);
    color: var(--void);
  }
`;

export const SecondaryAction = styled.a`
  ${actionBase};
  border: 1px solid var(--accent-deep);
  color: var(--glow);

  &:hover {
    border-color: var(--glow);
    background-color: rgba(195, 162, 220, 0.08);
  }
`;

export const Visual = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 560px;

  @media (max-width: 900px) {
    min-height: 0;
  }
`;

export const Glow = styled.div`
  position: absolute;
  left: 50%;
  top: 22%;
  width: min(560px, 90%);
  aspect-ratio: 1;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(195, 162, 220, 0.22) 0%, rgba(92, 47, 110, 0.12) 45%, rgba(17, 7, 31, 0) 70%);
  pointer-events: none;
`;

export const Portrait = styled.div`
  position: relative;
  width: min(585px, 100%);

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    width: min(360px, 88vw);
  }
`;

export const Tool = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background-color: rgba(25, 13, 43, 0.9);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--heading);
  white-space: nowrap;

  &[data-position='left-top'] { left: -0.75rem; top: 58%; }
  &[data-position='left-bottom'] { left: -0.75rem; top: 68%; }
  &[data-position='right-top'] { right: -0.75rem; top: 22%; }
  &[data-position='right-bottom'] { right: -0.75rem; top: 50%; }

  @media (max-width: 900px) {
    font-size: 0.7rem;
    padding: 0.35rem 0.65rem;

    &[data-position='left-top'] { left: 0; top: 45%; }
    &[data-position='left-bottom'] { left: 0; top: 57%; }
    &[data-position='right-top'] { right: 0; top: 12%; }
    &[data-position='right-bottom'] { right: 0; top: 30%; }
  }
`;

export const ToolDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$color}) => $color};
  box-shadow: 0 0 10px ${({$color}) => $color};
`;

export const Badge = styled.p`
  position: absolute;
  left: 50%;
  bottom: 2.25rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.625rem 1.125rem;
  background-color: rgba(17, 7, 31, 0.92);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--body-text);
  white-space: nowrap;

  strong {
    color: var(--heading);
  }

  @media (max-width: 900px) {
    bottom: 1rem;
    font-size: 0.7rem;
  }
`;

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--mint);
`;

export const ScrollHint = styled.a`
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);

  @media (max-width: 900px) {
    display: none;
  }
`;
