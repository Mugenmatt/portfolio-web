import { motion } from 'framer-motion'
import htmlLogo from '../assets/HTML5.svg'
import cssLogo from '../assets/CSS3.svg'
import jsLogo from '../assets/JavaScript.svg'
import tsLogo from '../assets/TypeScript.svg'
import reactLogo from '../assets/React.png'
// import nextLogo from '../assets/Next.svg'
import mySqlLogo from '../assets/MySQL.svg'
import nodeLogo from '../assets/Node.svg'
// import mongoLogo from '../assets/MongoDB.svg'
import viteLogo from '../assets/Vite.svg'
import gitLogo from '../assets/Git.svg'
import npmLogo from '../assets/NPM.svg'
import reduxLogo from '../assets/Redux.svg'
import bubbleLogo from '../assets/bubble.png'
import InfiniteCarousel from './InfiniteCarousel'

export const Technology = ({ isMobile }) => {

  // =============== MOBILE ===============
  if(isMobile) {
    return (
      <motion.div
        className="flex flex-col gap-6 px-4 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">Tools & Tech</h2>

        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Vite",
            "Redux",
            // "Next.js",
            "Node.js",
            "MySQL",
            // "MongoDB",
            "Git",
            "Figma"
          ].map((tech, i) => (
            <span
              key={i}
              className="bg-[#303030] text-sm md:text-xl text-white px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    )
  }

  // =============== DESKTOP ===============
  return (
    <div className='h-full w-full flex flex-col items-center justify-center overflow-hidden'>
      <div>
        <div className="h-1/3 w-full">
          <h2 className="text-3xl font-bold text-center mb-11 lg:text-2xl">Tools & Technologies</h2>
        </div>
        <InfiniteCarousel duration={30} shift="-40%">
          <img src={htmlLogo} className="w-20" alt="html" />
          <img src={cssLogo} className="w-20" alt="css" />
          <img src={jsLogo} className="w-20" alt="javascript" />
          <img src={tsLogo} className="w-20" alt="typescript" />
          <img src={reactLogo} className="w-20" alt="react" />
          <img src={viteLogo} className="w-20" alt="vite" />
          <img src={reduxLogo} className="w-20" alt="redux" />
          {/* <img src={nextLogo} className="w-20" alt="my sql" /> */}
          <img src={nodeLogo} className="w-20" alt="node" />
          <img src={mySqlLogo} className="w-20" alt="mysql" />
          {/* <img src={mongoLogo} className="w-20" alt="mongo db" /> */}
          <img src={gitLogo} className="w-20" alt="git" />
          <img src={npmLogo} className="w-20" alt="npm" />
          <img src={bubbleLogo} className="w-20" alt="bubble" />
        </InfiniteCarousel>

      </div>
    </div>
  )
}
