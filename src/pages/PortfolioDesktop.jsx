import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Keywords } from '../components/Keywords';
import { LastJob } from '../components/LastJob';
import SectionComponent from '../components/SectionComponent';
import { Technology } from '../components/Technology';

export default function PortfolioDesktop() {

  return (
    // Toda la pantalla
    <div className="h-auto w-full bg-black flex items-center justify-center overflow-hidden sm:my-10 md:my-0">

      {/* GRILLA */}
      <div className="
        grid h-full w-full gap-3 sm:p-2 md:p-20 
        sm:grid-cols-1 md:grid-cols-4 md:grid-rows-3"
      >
        <SectionComponent colSpan={1} component={<Keywords />} />
        <SectionComponent colSpan={1} component={<LastJob />} />
        <SectionComponent colSpan={2} component={<Experience />} />
        <SectionComponent colSpan={1} component={<h1>falta</h1>} />
        <SectionComponent colSpan={2} component={<About />} />
        <SectionComponent colSpan={1} component={<h1>falta</h1>} />
        <SectionComponent colSpan={2} component={<Education />} />
        <SectionComponent colSpan={1} component={<Technology />} />
        <SectionComponent colSpan={1} component={<Contact />} />
      </div>
      
    </div>
  );
}
