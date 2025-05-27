import { motion } from 'framer-motion'
import { useState } from 'react';

const SectionComponent = ({ component, colSpan  }) => {
    const [colSpanNumber, setColSpanNumber] = useState(colSpan);

    const colSpanClass = {
        1: "sm:col-span-1",
        2: "sm:col-span-2",
        3: "sm:col-span-3",
        4: "sm:col-span-4",
    }[colSpanNumber] || "sm:col-span-1";
      
  // Funcion que retorna aleatoriamente 1 o -1
  const randomRotation = () => Math.random() < 0.5 ? -1 : 1;

  // Funcion que retorna un color hex de manera aleatoria
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 12)];
    }
    return color;
  };
  
  return (
    <section className={` ${colSpanClass} sm:col-span-1`}>
        <motion.div 
            drag
            dragSnapToOrigin={true}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [0, 0.5, 1], scale: 1 }}
            transition={{ duration: 0.1 }}
            whileTap={{ rotateX: 360 }}
            whileHover={{ zIndex: 1000, gridColumn: "3", background: randomColor(), rotate: randomRotation(), scale: 1.1, cursor: 'pointer', boxShadow: '5px 5px 15px #c2c2c2, -0px -0px 15px #c2c2c2' }}
            className={`
                flex flex-col rounded-xl bg-gradient-to-r from-[#303030] 
                to-[#101010] transition overflow-hidden relative
            `}
            >
            <div className="p-2 h-245px min-h-[245px] max-h-[245px]">
                { component }
            </div>
        </motion.div>
    </section>
  )
}

export default SectionComponent;