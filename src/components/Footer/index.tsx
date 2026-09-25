'use client';

import styled from 'styled-components';

import type {Dictionary} from '@/i18n/getDictionary';

const Bar = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
  min-height: 88px;
  padding: 1rem clamp(1rem, 4.5vw, 4rem);
  border-top: 1px solid var(--border);
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
`;

const Logo = styled.span`
  font-weight: 800;
  color: var(--heading);

  span {
    color: var(--muted);
    font-weight: 400;
  }
`;

const Top = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-left: auto;
`;

type Props = {
    dict: Dictionary['footer'];
};

const Footer = ({dict}: Props) => (
    <Bar>
        <Logo><span aria-hidden="true">&lt;</span>AH<span aria-hidden="true">/&gt;</span></Logo>
        <span>{dict.location}</span>
        <Top href="#home">{dict.backToTop}</Top>
    </Bar>
);

export default Footer;
