import { motion } from 'framer-motion'
import { Keywords } from '../components/Keywords';
import { Experience } from '../components/Experience';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { useState } from 'react';

const blocks = [
  {id: 'keywords', colSpan: 1, rowSpan: 1, component: <Keywords />},
  {id: 'bloque-6', colSpan: 1, rowSpan: 1, component: <h1>'bloque-6'</h1>},
  {id: 'experiencia', colSpan: 2, rowSpan: 1, component: <Experience />},
  {id: 'bloque-7', colSpan: 1, rowSpan: 1, component: <h1>'bloque-7'</h1>},
  {id: 'sobre-mi', colSpan: 2, rowSpan: 1, component: <About />},
  {id: 'bloque-8', colSpan: 1, rowSpan: 1, component: <h1>'bloque-8'</h1>},
  {id: 'tecnologias', colSpan: 2, rowSpan: 1, component: <Education />},
  {id: 'bloque-9', colSpan: 1, rowSpan: 1, component: <Skills />},
  {id: 'contacto', colSpan: 1, rowSpan: 1, component: <Contact />},
];

export default function Portfolio() {

  // [Opcional] Funcionalidad que da color a la grilla sin necesidad de hover
  const [isGridColorActive, setIsGridColorActive] = useState(false)
  
  // Funcion que retorna aleatoriamente 1 o -1
  const randomRotation = () => Math.random() < 0.5 ? -1 : 1;

  // Funcion que retorna un color hex de manera aleatoria
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    // Toda la pantalla
    <div className="h-screen w-full bg-black flex items-center justify-center">
      {/* GRILLA */}
      <div className="
      grid h-full w-full grid-cols-1 gap-4 p-10
      sm:grid-cols-2 md:grid-cols-4 md:m-16 xl:m-64 lg:m-32">

        {
          blocks.map(block => (
<motion.div 
  initial={{ opacity: 1, scale: 1 }}
  animate={{ opacity: [0, 0.5, 1], scale: 1 }}
  transition={{ duration: 0.1 }}
  whileTap={{
    background: randomColor(),
    transition: { duration: 0.1 },
    scale: 1.1,
    rotate: randomRotation()
  }}
  whileHover={{ background: randomColor(), cursor: 'pointer' }}
  className={`bg-[#101010] flex flex-col col-span-${block.colSpan} 
    row-span-${block.rowSpan} rounded-xl bg-gradient-to-r transition overflow-hidden
    from-[#404040] to-[#101010] vertical-align-top min-h-[29vh] max-h-[29vh]
    hover:shadow-[5px_5px_15px_#c2c2c2,_-0px_-0px_15px_#c2c2c2]
  `}
>
  <div className="p-2 h-full w-full">
    {block.component}
  </div>
</motion.div>
          ))
        }

      </div>
    </div>
  );
}
