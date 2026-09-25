import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1A0B2E;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavbarContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

export const NavbarItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;

  &[data-active='true'] a {
    color: #C3A2DC;
    font-weight: 700;
  }

  &[data-active='true']::after {
    content: '';
    position: absolute;
    bottom: -0.35rem;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #5C2F6E;
  }
`;

export const Link = styled.a`
  color: #A68AB8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #C3A2DC;
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const LanguageSwitch = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #3F2B5B;
  border-radius: 999px;
  overflow: hidden;
  margin-left: 0.5rem;
`;

export const LanguageOption = styled.button`
  background: transparent;
  border: 0;
  border-radius: 0;
  color: #8E7BA5;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.7rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &[aria-pressed='true'] {
    background-color: #5C2F6E;
    color: #F1E8FA;
  }

  &:hover:not([aria-pressed='true']) {
    color: #C3A2DC;
    background-color: transparent;
  }

  &:focus-visible {
    outline: 2px solid #C3A2DC;
    outline-offset: -2px;
  }
`;
