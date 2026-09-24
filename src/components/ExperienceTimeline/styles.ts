import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 0;
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

export const CompanyCard = styled.article`
  padding: 1.75rem;
  background-color: #190D2B;
  border: 1px solid #2E1E45;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CompanyHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
`;

export const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  color: #E9DEF5;
`;

export const CompanyMeta = styled.span`
  font-size: 0.9rem;
  color: #8E7BA5;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* Linha vertical com um ponto por cargo; o atual fica preenchido. */
export const Roles = styled.ol`
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0.45rem;
    bottom: 0.9rem;
    width: 2px;
    background-color: #2E1E45;
  }
`;

export const Role = styled.li`
  position: relative;
  margin: 0 0 1.1rem;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(-1.25rem);
    top: 0.4rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #11071F;
    border: 2px solid #5C2F6E;
  }

  &[data-current]::before {
    background-color: #C3A2DC;
    border-color: #C3A2DC;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const RoleTitle = styled.span`
  font-weight: 600;
  color: #E9DEF5;
`;

export const RolePeriod = styled.span`
  font-size: 0.85rem;
  color: #8E7BA5;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8E7BA5;
`;

export const Highlights = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > li {
    margin: 0;
    padding-left: 1.1rem;
    position: relative;
    color: #D3C4E3;
    line-height: 1.55;
  }

  > li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #A68AB8;
  }
`;

export const Stack = styled.ul`
  margin: 0.25rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  > li {
    margin: 0;
    padding: 0.2rem 0.65rem;
    font-size: 0.8rem;
    color: #C3A2DC;
    background-color: #231238;
    border: 1px solid #3F2B5B;
    border-radius: 999px;
  }
`;

export const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.25rem;
`;

export const EducationLine = styled.p`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  color: #D3C4E3;

  > span {
    color: #8E7BA5;
  }
`;
