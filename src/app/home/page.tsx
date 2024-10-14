const Home = () => {
    return (
        <div>
            {/* Seção Home */}
            <section id="home" style={{ height: '100vh' }}>
                <h1>Bem-vindo ao meu portfólio</h1>
                <p>Desenvolvedor de Software Fullstack...</p>
            </section>

            {/* Seção Experiência */}
            <section id="experiencia" style={{ height: '100vh' }}>
                <h2>Experiência Profissional</h2>
                <p>Aqui você pode listar suas experiências...</p>
            </section>

            {/* Seção Projetos */}
            <section id="projetos" style={{ height: '100vh' }}>
                <h2>Meus Projetos</h2>
                <p>Lista de projetos com descrições e links para o GitHub...</p>
            </section>

            {/* Seção Contato */}
            <section id="contato" style={{ height: '100vh' }}>
                <h2>Contato</h2>
                <p>Formulário de contato ou links para LinkedIn e e-mail...</p>
            </section>
        </div>
    );
};

export default Home;