import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem clamp(1rem, 4.5vw, 4rem) 6rem;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const Label = styled.p`
  font-family: var(--mono);
  font-size: 0.875rem;
  color: var(--muted);
`;

export const Title = styled.h2`
  font-family: var(--mono);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  line-height: 1.05;
  font-weight: 800;
  color: var(--heading);
`;

export const Pitch = styled.p`
  max-width: 32rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--body-text);
`;

export const Terminal = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 3, 15, 0.92);
  border: 1px solid var(--border-strong);
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--mono);
  box-shadow: 0 30px 80px -40px rgba(195, 162, 220, 0.35);
`;

export const TerminalBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--border);

  > span:not(:last-child) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--border-strong);
  }
`;

export const TerminalName = styled.span`
  margin-left: 0.6rem;
  font-size: 0.75rem;
  color: var(--muted);
`;

export const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.5rem 1.75rem;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 520px) {
    padding: 1.25rem;
    font-size: 0.85rem;
  }
`;

export const Prompt = styled.p`
  color: var(--text-soft);

  span {
    color: var(--mint);
  }
`;

export const Key = styled.span`
  color: var(--glow);
`;

export const EmailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--panel-deep);
  border: 1px solid var(--border);
  border-radius: 10px;
`;

export const EmailLink = styled.a`
  min-width: 0;
  font-weight: 700;
  color: var(--amber);
  overflow-wrap: anywhere;

  &:hover {
    color: var(--amber);
    text-decoration: underline;
  }
`;

export const CopyButton = styled.button`
  margin-left: auto;
  min-height: 36px;
  min-width: 6rem;
  padding: 0 0.875rem;
  color: var(--glow);
  border: 1px solid var(--accent-deep);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;

  &:hover {
    border-color: var(--glow);
    background-color: var(--panel-hover);
  }
`;

export const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 48px;
  padding: 0 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-soft);
  transition: border-color 0.2s ease, background-color 0.2s ease;

  > span[aria-hidden] {
    color: var(--muted);
  }

  &:hover {
    color: var(--heading);
    border-color: var(--accent-deep);
    background-color: var(--panel-hover);
  }
`;

export const External = styled.span`
  margin-left: auto;
`;

export const CvLink = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0 1.1rem;
  background-color: var(--glow);
  color: var(--void);
  border-radius: 999px;
  font-weight: 700;

  &:hover {
    background-color: var(--glow-bright);
    color: var(--void);
  }
`;

export const Status = styled.p`
  min-height: 1.4rem;
  font-size: 0.8rem;
  color: var(--mint);
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
