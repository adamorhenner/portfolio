import styled, {keyframes} from 'styled-components';

// Altura do plano inclinado onde o texto corre. O texto sai de baixo do plano
// e sobe ate passar inteiro pelo topo (100% da propria altura + o plano).
const PLANE_HEIGHT = '980px';

const crawl = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - ${PLANE_HEIGHT})); }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &[data-mode='crawl'] {
    height: 100vh;
    min-height: 720px;
    overflow: hidden;
  }

  &[data-mode='read'] {
    min-height: 100vh;
    padding-bottom: 4rem;
  }
`;

export const Header = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 104px 1rem 0;
`;

export const Label = styled.p`
  font-family: var(--mono);
  font-size: 0.875rem;
  color: var(--muted);
`;

export const Toggle = styled.div`
  display: flex;
  padding: 4px;
  background-color: rgba(12, 5, 23, 0.85);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-family: var(--mono);
`;

export const ToggleOption = styled.button`
  min-height: 40px;
  padding: 0 1.125rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--body-text);
  transition: background-color 0.2s ease, color 0.2s ease;

  &[aria-pressed='true'] {
    background-color: var(--glow);
    color: var(--void);
    font-weight: 700;
  }

  &:hover:not([aria-pressed='true']) {
    color: var(--heading);
  }
`;

/* ---------- modo intro ---------- */

export const Stage = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  perspective: 440px;

  /* Escurece o topo para o texto sumir "no espaco" antes do cabecalho. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(to bottom, var(--void) 0%, rgba(17, 7, 31, 0.85) 22%, rgba(17, 7, 31, 0) 45%);
    pointer-events: none;
  }
`;

export const Plane = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  width: min(800px, 92vw);
  height: ${PLANE_HEIGHT};
  transform: translateX(-50%) rotateX(25deg);
  transform-origin: 50% 100%;
`;

export const Crawl = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: var(--amber);
  animation: ${crawl} 30s linear 0.4s infinite;
`;

export const Episode = styled.p`
  text-align: center;
  font-family: var(--crawl);
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  letter-spacing: 0.12em;
  font-weight: 500;
`;

export const CrawlTitle = styled.p`
  margin: 1.25rem 0 3.75rem;
  text-align: center;
  font-family: var(--crawl);
  font-size: clamp(3rem, 6.5vw, 5.75rem);
  line-height: 0.95;
  font-weight: 700;
`;

export const CrawlParagraph = styled.p`
  margin-bottom: 2.75rem;
  font-family: var(--sans);
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);
  line-height: 1.4;
  font-weight: 600;
  text-align: justify;
`;

export const Controls = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--mono);
`;

export const RoundButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 7, 31, 0.85);
  color: var(--heading);
  border: 1px solid var(--border-strong);
  border-radius: 50%;

  &:hover {
    border-color: var(--glow);
  }
`;

export const SkipButton = styled.button`
  min-height: 44px;
  padding: 0 1.125rem;
  background-color: rgba(17, 7, 31, 0.85);
  color: var(--heading);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-size: 0.8rem;
  white-space: nowrap;

  &:hover {
    border-color: var(--glow);
  }
`;

/* ---------- modo leitura ---------- */

export const Read = styled.div`
  position: relative;
  z-index: 5;
  width: min(1140px, 100%);
  margin-top: 2.5rem;
  padding: 0 clamp(1rem, 4.5vw, 2rem);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
  }
`;

export const Story = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const ReadEpisode = styled.p`
  font-family: var(--crawl);
  font-size: 1.375rem;
  letter-spacing: 0.12em;
  color: var(--amber);
`;

export const ReadTitle = styled.h2`
  font-family: var(--mono);
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.05;
  font-weight: 800;
  color: var(--heading);
`;

export const ReadParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--body-text);
`;

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.25rem;

  li {
    position: relative;
    padding-left: 1.2rem;
    color: var(--text-soft);
  }

  li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--lavender);
  }
`;

export const Card = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1.75rem;
  background-color: rgba(25, 13, 43, 0.88);
  border: 1px solid var(--border);
  border-radius: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1rem;
`;

export const Company = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--heading);
`;

export const CompanyMeta = styled.span`
  font-size: 0.85rem;
  color: var(--muted);
`;

export const Roles = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1.4rem;
  border-left: 2px solid var(--border);
`;

export const Role = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(-1.4rem - 7px);
    top: 0.4rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--void);
    border: 2px solid var(--accent-deep);
  }

  &[data-current]::before {
    background-color: var(--glow);
    border-color: var(--glow);
    box-shadow: 0 0 12px var(--glow);
  }
`;

export const RoleTitle = styled.span`
  color: var(--text-soft);

  [data-current] > & {
    font-weight: 600;
    color: var(--heading);
  }
`;

export const RolePeriod = styled.span`
  font-size: 0.875rem;
  color: var(--muted);
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;

  li {
    padding: 0.25rem 0.625rem;
    background-color: var(--panel-hover);
    border-radius: 999px;
    color: var(--glow);
  }
`;

export const Education = styled.p`
  padding-top: 0.875rem;
  border-top: 1px solid var(--border);
  font-size: 0.875rem;
  color: var(--body-text);
`;
