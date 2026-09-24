import ContactSection from '@/components/ContactSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import HomeSection from '@/components/HomeSection';
import NavbarComponent from '@/components/NavBar';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectsSection from '@/components/ProjectsSection';
import StarWarsIntro from '@/components/StarWarsIntro';
import {defaultLocale, isLocale, type Locale} from '@/i18n/config';
import {getDictionary} from '@/i18n/getDictionary';
import {getProjects} from '@/lib/github';

export default async function Home({params}: { params: { lang: string } }) {
    const lang: Locale = isLocale(params.lang) ? params.lang : defaultLocale;
    const [dict, projects] = await Promise.all([getDictionary(lang), getProjects(lang)]);

    return (
        <div>
            <NavbarComponent lang={lang} dict={dict.nav}/>

            <section id="home" className="section">
                <ParticlesBackground/>
                <HomeSection dict={dict.home}/>
            </section>

            <section id="experiencia" className="section">
                <StarWarsIntro dict={dict.experience}/>
                <ExperienceTimeline dict={dict.experience}/>
            </section>

            <section id="projetos" className="section">
                <ProjectsSection projects={projects} lang={lang} dict={dict.projects}/>
            </section>

            <section id="contato" className="section">
                <ContactSection lang={lang} dict={dict.contact}/>
            </section>
        </div>
    );
}
