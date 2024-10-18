"use client";
import {useState} from 'react';

import {Link,Navbar, NavbarContent, NavbarItem} from './styles';

const NavbarComponent = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleSetActive = (section) => {
        setActiveSection(section);
    };

    return (
        <Navbar>
            <NavbarContent>
                <NavbarItem data-active={activeSection === 'home'}>
                    <Link href="#home" onClick={() => handleSetActive('home')}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem data-active={activeSection === 'experiencia'}>
                    <Link href="#experiencia" onClick={() => handleSetActive('experiencia')}>
                        Experiência
                    </Link>
                </NavbarItem>
                <NavbarItem data-active={activeSection === 'projetos'}>
                    <Link href="#projetos" onClick={() => handleSetActive('projetos')}>
                        Projetos
                    </Link>
                </NavbarItem>
                <NavbarItem data-active={activeSection === 'contato'}>
                    <Link href="#contato" onClick={() => handleSetActive('contato')}>Contato</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComponent;