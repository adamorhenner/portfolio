import styled from 'styled-components';
import { Navbar as NextUINavbar, NavbarContent as NextUINavbarContent, NavbarItem as NextUINavbarItem, Link as NextUILink } from "@nextui-org/react";

export const Navbar = styled(NextUINavbar)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1A0B2E;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavbarContent = styled(NextUINavbarContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const NavbarItem = styled(NextUINavbarItem)`
  margin: 0 1rem;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &[data-active="true"] {
    color: #A68AB8;
    font-weight: bold;
  }

  &[data-active="true"]::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #5C2F6E;
  }
`;

export const Link = styled(NextUILink)`
  color: #A68AB8;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #5C2F6E;
  }
`;