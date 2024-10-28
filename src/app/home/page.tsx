"use client";
import HomeSection from "@/components/HomeSection";
import NavbarComponent from "@/components/NavBar";

const sectionStyle = {
    height: '100vh',
    paddingTop: '4rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    boxSizing: 'border-box'
};

const Home = () => {
    return (
        <div>
            <NavbarComponent/>
            {/* Seção Home */}
            <section id="home" style={sectionStyle}>
                <HomeSection/>
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