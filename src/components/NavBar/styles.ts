import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 0 clamp(1rem, 4.5vw, 4rem);
  font-family: var(--mono);
  font-size: 0.875rem;
  transition: background-color 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;

  &[data-scrolled='true'] {
    background-color: rgba(17, 7, 31, 0.82);
    backdrop-filter: blur(10px);
    border-bottom-color: var(--border);
  }

  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const Logo = styled.a`
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--heading);

  span {
    color: var(--muted);
    font-weight: 400;
  }

  &:hover {
    color: var(--heading);
  }
`;

export const MenuButton = styled.button`
  display: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: var(--heading);

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const Menu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.25rem 1.25rem 1.5rem;
    background-color: rgba(17, 7, 31, 0.96);
    border-bottom: 1px solid var(--border);

    &[data-open='true'] {
      display: flex;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--body-text);
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  span {
    color: var(--muted);
  }

  &:hover {
    color: var(--heading);
  }

  &[aria-current='true'] {
    color: var(--heading);
    border-bottom-color: var(--glow);

    span {
      color: var(--glow);
    }
  }
`;

export const LanguageSwitch = styled.div`
  display: inline-flex;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  overflow: hidden;
`;

export const LanguageOption = styled.button`
  min-width: 44px;
  min-height: 32px;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--muted);
  transition: background-color 0.2s ease, color 0.2s ease;

  &[aria-pressed='true'] {
    background-color: var(--glow);
    color: var(--void);
  }

  &:hover:not([aria-pressed='true']) {
    color: var(--glow);
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
