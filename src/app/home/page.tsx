"use client";
import NavbarComponent from "@/components/NavBar";

const sectionStyle = {
  height: '100vh',
  paddingTop: '4rem'
};

const Home = () => {

    return (
        <div>
            <NavbarComponent />
            {/* Seção Home */}
            <section id="home" style={sectionStyle}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h1>Hello, I am &lt; Adamor Henner /&gt;</h1>
                        <p>Fullstack Developer</p>
                    </div>
                    <div style={{flex: 1, textAlign: 'center'}}>
                        <img src="/path/to/your/image.jpg" alt="Adamor Henner"
                             style={{maxWidth: '100%', borderRadius: '50%'}}/>
                    </div>
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