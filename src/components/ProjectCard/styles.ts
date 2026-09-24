import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  height: 100%;
  padding: 1.5rem;
  background-color: #190D2B;
  border: 1px solid #2E1E45;
  border-radius: 10px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #5C2F6E;
    box-shadow: 0 12px 28px -18px rgba(0, 0, 0, 0.9);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.2s ease;

    &:hover {
      transform: none;
    }
  }
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #2E1E45;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const LanguageDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex: none;
  background-color: ${({$color}) => $color};
`;

export const RepoName = styled.span`
  font-family: 'Courier New', ui-monospace, monospace;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  color: #8E7BA5;
`;

export const Stars = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  color: #8E7BA5;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.3;
  color: #E9DEF5;
`;

export const Description = styled.p`
  margin: 0;
  flex: 1;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #B4A3C6;
`;

export const Topics = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Topic = styled.li`
  margin: 0;
  padding: 0.15rem 0.6rem;
  border: 1px solid #3F2B5B;
  border-radius: 999px;
  font-size: 0.72rem;
  color: #A68AB8;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.9rem;
  border-top: 1px solid #2E1E45;
`;

export const LastCommit = styled.span`
  font-size: 0.74rem;
  color: #7A6A8E;
`;

export const Links = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CardLink = styled.a`
  font-size: 0.82rem;
  font-weight: 600;
  color: #A68AB8;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #C3A2DC;
    border-bottom-color: #C3A2DC;
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: 3px;
    border-radius: 2px;
  }

  &[data-variant='demo'] {
    color: #C3A2DC;
  }
`;
