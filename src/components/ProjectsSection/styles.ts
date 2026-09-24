import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    margin: 0;
  }
`;

export const Empty = styled.p`
  margin: 0;
  padding: 2rem;
  border: 1px dashed #3F2B5B;
  border-radius: 10px;
  color: #A68AB8;
  text-align: center;
`;

export const ProfileLink = styled.a`
  align-self: flex-start;
  font-size: 0.9rem;
  font-weight: 600;
  color: #A68AB8;
  text-decoration: none;
  border-bottom: 1px solid transparent;

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
`;
