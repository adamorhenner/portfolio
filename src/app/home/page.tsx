"use client";
import styled from 'styled-components';
import NavbarComponent from "@/components/NavBar";
import ImageWithIcons from "@/components/ImageWithIcons";
import {FaDatabase, FaNodeJs, FaReact} from "react-icons/fa";

const sectionStyle = {
    height: '100vh',
    paddingTop: '4rem'
};

const TitleDiv = styled.div`
    flex: 1;
    text-align: left;
    color: #A68AB8; /* Light Color */
    font-family: 'Roboto', Arial, sans-serif;

    p {
        margin: 0;
        font-size: 1.5rem;
    }

    p:first-child {
        font-size: 2.5em;
        font-weight: bold;
    }

    p:nth-child(2),
    p:nth-child(3) {
        font-size: 4.8rem;
        font-weight: bold;
        margin: 0;
    }

    p:last-child {
        font-size: 3.6rem;
        color: #5C2F6E; /* Accent Color */
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Home = () => {
    return (
        <div>
            <NavbarComponent/>
            {/* Seção Home */}
            <section id="home" style={sectionStyle}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                    <TitleContainer>
                        <TitleDiv>
                            <p>Hello, I am</p>
                            <p>&lt; Adamor </p>
                            <p>Henner /&gt;</p>
                            <p>&gt; Fullstack Developer</p>
                        </TitleDiv>
                    </TitleContainer>
                    <ImageWithIcons
                        icon1={<FaReact size={40} color="#61DBFB" />}
                        icon2={<FaNodeJs size={30} color="#68A063" />}
                        icon3={<FaDatabase size={60} color="#4DB33D" />}
                    />
                </div>
            </section>

            {/* Seção Experiência */}
            <section id="experiencia" style={sectionStyle}>
                <h2>Experiência Profissional</h2>
                <p>Aqui você pode listar suas experiências...</p>
            </section>

            {/* Seção Projetos */}
            <section id="projetos" style={sectionStyle}>
                <h2>Meus Projetos</h2>
                <p>Lista de projetos com descrições e links para o GitHub...</p>
            </section>

            {/* Seção Contato */}
            <section id="contato" style={sectionStyle}>
                <h2>Contato</h2>
                <p>Formulário de contato ou links para LinkedIn e e-mail...</p>
            </section>
        </div>
);
};

export default Home;