import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const Intro = () => {
  const [show, setShow] = useState(true);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  useEffect(() => {
    const runSequence = async () => {
        await controls1.start({ y: "100%", transition: { duration: 1, ease: "easeInOut", delay: 0.8 } });
        await controls2.start({ x: "-100%", transition: { duration: 1, ease: "easeInOut", delay: 0.2 } });
        await controls3.start({ x: "100%", transition: { duration: 1, ease: "easeInOut", delay: 0.2 } });
        await controls4.start({ y: "-100%", transition: { duration: 1, ease: "easeInOut", delay: 0.2 } });
        await new Promise((res) => setTimeout(res, 800));
        // Fade out
        await controls5.start({ opacity: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.3 } });

      setShow(false); // Ocultar componente al terminar todo
    };

    runSequence();
  }, [
        controls1,
        controls2,
        controls3,
        controls4,
        controls5,
  ]);

  if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 pointer-events-auto">

            <motion.div
            className="pointer-events-none w-screen h-screen bg-gradient-to-t from-sky-400 to-sky-800 absolute top-0 left-0 z-40 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={controls1}
            >
            <span className="text-white text-5xl font-bold">🧠 Think 🧠</span>
            </motion.div>

            <motion.div
            className="pointer-events-none w-screen h-screen bg-gradient-to-l from-violet-400 to-purple-800 absolute top-0 left-0 z-30 flex items-center justify-center"
            initial={{ x: 0 }}
            animate={controls2}
            >
            <span className="text-white text-5xl font-bold">✏️ Design ✏️</span>
            </motion.div>

            <motion.div
            className="pointer-events-none w-screen h-screen bg-gradient-to-r from-orange-300 to-yellow-500 absolute top-0 left-0 z-20 flex items-center justify-center"
            initial={{ x: 0 }}
            animate={controls3}
            >
            <span className="text-white text-5xl font-bold">🛠️ Build 🛠️</span>
            </motion.div>

            <motion.div
            className="pointer-events-none w-screen h-screen bg-gradient-to-t from-teal-400 to-emerald-700 absolute top-0 left-0 z-10 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={controls4}
            >
            <span className="text-white text-5xl font-bold">📚 Learn 📚</span>
            </motion.div>

            <motion.div
            className="pointer-events-none w-screen h-screen bg-zinc-900 absolute top-0 left-0 z-0 flex items-center justify-center"
            initial={{ opacity: 100 }}
            animate={controls5}
            >
            <span className="text-white text-5xl font-bold">😀 Welcome 😀</span>
            </motion.div>


        </div>
    );
};
