import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 6rem clamp(1rem, 4.5vw, 4rem) 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

export const Heading = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 2rem;
`;

export const Label = styled.p`
  margin-bottom: 0.6rem;
  font-family: var(--mono);
  font-size: 0.875rem;
  color: var(--muted);
`;

export const Title = styled.h2`
  font-family: var(--mono);
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--heading);
`;

export const Subtitle = styled.p`
  margin-top: 0.6rem;
  font-size: 1.05rem;
  color: var(--body-text);
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const FeaturedItem = styled.li`
  grid-column: span 2;

  @media (max-width: 640px) {
    grid-column: auto;
  }
`;

export const Empty = styled.p`
  padding: 2rem;
  border: 1px dashed var(--border-strong);
  border-radius: 16px;
  color: var(--body-text);
  text-align: center;
`;

export const ProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-family: var(--mono);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--glow);

  &:hover {
    color: var(--glow-bright);
  }
`;
