import styled from 'styled-components';

export const Card = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(25, 13, 43, 0.9);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent-deep);
  }

  &[data-cover] {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

    @media (max-width: 700px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
  background-color: var(--void-deep);
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;

  [data-featured] > & {
    padding: 1.75rem;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
`;

export const LanguageDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex: none;
  background-color: ${({$color}) => $color};
`;

export const RepoName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LiveBadge = styled.span`
  margin-left: auto;
  flex: none;
  color: var(--mint);
`;

export const Stars = styled.span`
  margin-left: auto;
  flex: none;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--heading);

  [data-featured] & {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  flex: 1;
  font-size: 1rem;
  line-height: 1.55;
  color: var(--body-text);
`;

export const Topics = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Topic = styled.li`
  padding: 0.15rem 0.6rem;
  background-color: var(--panel-hover);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--glow);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--border);
`;

export const LastCommit = styled.span`
  font-size: 0.8rem;
  color: var(--muted);
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--glow);

  &:hover {
    color: var(--glow-bright);
    text-decoration: underline;
  }
`;

export const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 40px;
  padding: 0 1rem;
  border-radius: 999px;
  background-color: var(--glow);
  color: var(--void);
  font-size: 0.875rem;
  font-weight: 600;

  &:hover {
    background-color: var(--glow-bright);
    color: var(--void);
  }
`;
