"use client";
import { Link as NextUILink, Navbar as NextUINavbar, NavbarContent as NextUINavbarContent, NavbarItem as NextUINavbarItem } from "@nextui-org/react";
import styled from 'styled-components';

const Navbar = styled(NextUINavbar)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarContent = styled(NextUINavbarContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const NavbarItem = styled(NextUINavbarItem)`
  margin: 0 1rem;
`;

const Link = styled(NextUILink)`
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0070f3;
  }
`;

const Home = () => {
    return (
        <div>
            <Navbar>
                <NavbarContent>
                    <NavbarItem>
                        <Link href="#home">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#experiencia" aria-current="page">
                            Experiência
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#projetos">
                            Projetos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#contato">Contato</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            {/* Seção Home */}
            <section id="home" style={{height: '100vh', paddingTop: '4rem'}}>
                <h1>Bem-vindo ao meu portfólio</h1>
                <p>Desenvolvedor de Software Fullstack...</p>
            </section>

            {/* Seção Experiência */}
            <section id="experiencia" style={{height: '100vh', paddingTop: '4rem'}}>
                <h2>Experiência Profissional</h2>
                <p>Aqui você pode listar suas experiências...</p>
            </section>

            {/* Seção Projetos */}
            <section id="projetos" style={{height: '100vh', paddingTop: '4rem'}}>
                <h2>Meus Projetos</h2>
                <p>Lista de projetos com descrições e links para o GitHub...</p>
            </section>

            {/* Seção Contato */}
            <section id="contato" style={{height: '100vh', paddingTop: '4rem'}}>
                <h2>Contato</h2>
                <p>Formulário de contato ou links para LinkedIn e e-mail...</p>
            </section>
        </div>
    );
};

export default Home;