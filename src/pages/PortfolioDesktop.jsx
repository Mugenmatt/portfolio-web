import { motion } from 'framer-motion'
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Keywords } from '../components/Keywords';
import { LastJob } from '../components/LastJob';
import { CurrentJob } from '../components/CurrentJob';
import { Technology } from '../components/Technology';
import { Links } from '../components/Links';
import SectionComponent from '../components/SectionComponent';
import { Intro } from '../components/Intro';

export default function PortfolioDesktop({ isMobile }) {
  
  if(isMobile) {
    return (
      <div className="w-full min-h-screen bg-[#101010] text-white px-4 py-6 flex flex-col gap-12">
        <About isMobile={isMobile} />
        <Experience isMobile={isMobile} />
        <Education isMobile={isMobile} />
        <Technology isMobile={isMobile} />
        <Contact isMobile={isMobile} />
        <footer className="bg-[#101010] text-white text-center py-4 mt-10">
          <p className="text-sm sm:text-xl md:text-2xl">© 2025 Matías Godoy</p>
        </footer>
      </div>
    );
  }

  return (
    // Toda la pantalla
    <div className="h-auto w-full bg-black flex items-center justify-center overflow-hidden sm:my-10 md:my-0">
      <Intro />
      {/* GRILLA */}
      <div className="
        grid h-full w-full gap-3 sm:p-2 md:p-20 
        sm:grid-cols-1 md:grid-cols-4 md:grid-rows-3"
      >
        <SectionComponent colSpan={1} component={<LastJob />} />
        <SectionComponent colSpan={1} component={<CurrentJob />} />
        <SectionComponent colSpan={2} component={<Experience />} />
        <SectionComponent colSpan={1} component={<Keywords />} />
        <SectionComponent colSpan={2} component={<About />} />
        <SectionComponent colSpan={1} component={<Links />} />
        <SectionComponent colSpan={2} component={<Education />} />
        <SectionComponent colSpan={1} component={<Technology />} />
        <SectionComponent colSpan={1} component={<Contact />} />
      </div>
      
    </div>
  );
}
