import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import NavbarComponent from '@/components/NavBar';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectsSection from '@/components/ProjectsSection';
import {defaultLocale, isLocale, type Locale} from '@/i18n/config';
import {getDictionary} from '@/i18n/getDictionary';
import {getProjects} from '@/lib/github';

export default async function Home({params}: { params: { lang: string } }) {
    const lang: Locale = isLocale(params.lang) ? params.lang : defaultLocale;
    const [dict, projects] = await Promise.all([getDictionary(lang), getProjects(lang)]);

    return (
        <>
            {/* Ceu estrelado fixo atras de todas as secoes. */}
            <ParticlesBackground/>

            <NavbarComponent lang={lang} dict={dict.nav}/>

            <main>
                <section id="home" className="section">
                    <HomeSection dict={dict.home}/>
                </section>

                <section id="experiencia" className="section">
                    <ExperienceSection dict={dict.experience}/>
                </section>

                <section id="projetos" className="section">
                    <ProjectsSection projects={projects} lang={lang} dict={dict.projects}/>
                </section>

                <section id="contato" className="section">
                    <ContactSection lang={lang} dict={dict.contact}/>
                </section>
            </main>

            <Footer dict={dict.footer}/>
        </>
    );
}
