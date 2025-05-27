import { motion } from 'framer-motion';

const InfiniteCarousel = ({ children, duration = 30, shift = '-50%', withBackground = false }) => {
  return (
    <div style={{ zIndex: 10 }} className={`relative w-full overflow-hidden my-2 ${ withBackground && 'bg-[#ffffff2e] p-2' }`}>
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ['0%', shift, '0%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Duplicamos los children para efecto loop */}
        {[1, 2].map((group) => (
          <div className="flex gap-8 select-none" key={group}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
