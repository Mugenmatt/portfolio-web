import { motion } from 'framer-motion'
import { useState } from 'react'
import argentinaAudio from '../assets/argentinaAudio.mp3'
import argentinaFlag from '../assets/argentina-flag.png'
import eeuuFlag from '../assets/eeuu-flag.png'
import htmlLogo from '../assets/HTML5.svg'
import cssLogo from '../assets/CSS3.svg'
import jsLogo from '../assets/JavaScript.svg'
import tsLogo from '../assets/TypeScript.svg'
import reactLogo from '../assets/React.png'
import nextLogo from '../assets/Next.svg'
import mySqlLogo from '../assets/MySQL.svg'
import nodeLogo from '../assets/Node.svg'
import mongoLogo from '../assets/MongoDB.svg'
import viteLogo from '../assets/Vite.svg'
import gitLogo from '../assets/Git.svg'
import npmLogo from '../assets/NPM.svg'
import reduxLogo from '../assets/Redux.svg'
import yo from '../assets/yo.png'

const ArgentinaFlagIcon = () => (<img src={argentinaFlag} alt='Bandera Argentina' className='w-20 h-20' />)
const EeuuFlagIcon = () => (<img src={eeuuFlag} alt='Bandera Estadounidense' className='w-20 h-20' />)
const HtmlLogoIcon = () => (<img src={htmlLogo} alt='HTML icono' className='w-20 h-20' />)
const CssLogoIcon = () => (<img src={cssLogo} alt='CSSicono' className='w-20 h-20' />)
const JsLogoIcon = () => (<img src={jsLogo} alt='JS icono' className='w-20 h-20' />)
const TsLogoIcon = () => (<img src={tsLogo} alt='TS icono' className='w-20 h-20' />)
const ReactLogoIcon = () => (<img src={reactLogo} alt='React icono' className='w-20 h-20' />)
const ReduxLogoIcon = () => (<img src={reduxLogo} alt='Redux icono' className='w-20 h-20' />)
const NextLogoIcon = () => (<img src={nextLogo} alt='Next icono' className='w-20 h-20' />)
const MySqlLogoIcon = () => (<img src={mySqlLogo} alt='MySQL icono' className='w-20 h-20' />)
const NodeLogoIcon = () => (<img src={nodeLogo} alt='Node icono' className='w-20 h-20' />)
const MongoLogoIcon = () => (<img src={mongoLogo} alt='MongoDB icono' className='w-20 h-20' />)
const ViteLogoIcon = () => (<img src={viteLogo} alt='Vite icono' className='w-20 h-20' />)
const GitLogoIcon = () => (<img src={gitLogo} alt='Git icono' className='w-20 h-20' />)
const NpmLogoIcon = () => (<img src={npmLogo} alt='NPM icono' className='w-20 h-20' />)


export const About = ({ isMobile }) => {
  const [fallingIcons, setFallingIcons] = useState([]);
  const [canPlayAudio, setCanPlayAudio] = useState(true);

  const triggerFallingIcons = (icons) => {
    if (fallingIcons.length === 0) {
      setFallingIcons(icons.map(() => ({
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: `${Math.random() * 100}%`,
        id: crypto.randomUUID()
      })));

      setTimeout(() => setFallingIcons([]), 6000);
    }
  };

  const playArgentinaAudio = () => {
    if (canPlayAudio) {
      const audio = new Audio(argentinaAudio);
      audio.play();
      setCanPlayAudio(false);
      setTimeout(() => setCanPlayAudio(true), 6000); // vuelve a habilitar luego de 6 seg
    }
  };

  // =============== MOBILE ===============
  if(isMobile) {
    return (
      <motion.div
  className="flex flex-col items-center text-center gap-6 px-4 sm:px-8"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-50 md:h-50 rounded-full bg-[#303030] overflow-hidden">
    <img src={yo} alt="Mi foto" className="w-full h-full object-cover" />
  </div>

  <div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Matías Godoy</h1>
    <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-1">Full Stack Developer</p>
    <div className="flex items-center justify-center">
      <span className="text-xs sm:text-sm mr-1 text-green-400 animate-pulse drop-shadow-[0_0_5px_#22c55e]">🟢</span>
      <span className="text-xs sm:text-sm lg:text-lg text-white">Available To Work</span>
    </div>
  </div>
</motion.div>

    )
  }

  // =============== DESKTOP ===============
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4 text-white rounded-xl overflow-hidden">
        
      <div className="w-full flex justify-between mb-4">
        {/* IMAGEN y NOMBRE */}
        <div className="w-2/3 flex">
          <div className=" rounded-3xl overflow-hidden mr-4">
            <img
              src={yo}
              alt="Me"
              className="xl:w-45 xl:h-30 lg:w-50 lg:h-30"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-start">
              <span className="text-xs mr-2 text-green-400 animate-pulse drop-shadow-[0_0_5px_#22c55e]">🟢</span>
              <span className="text-md">Available To Work</span>
            </div>
            <h1 className="text-3xl">Matías Godoy</h1>
            <span className="text-md">Frontend Developer (expanding into Full-Stack)</span>
          </div>
        </div>

        {/* CV LINK */}
        <div className="w-1/3 flex justify-end items-top">
          <div className="flex items-start">
            <span className='md:text-md xl:text-lg'>Resume ➡</span>
              <motion.span
                className="text-3xl cursor-pointer hover:text-yellow-400 hover:drop-shadow-md transition-all duration-300"
                whileHover={{ scale: 2 }}
                onClick={() => window.open('/React-Frontend_Matias-Godoy_english.pdf', '_blank')}
              >
                📋
              </motion.span>
          </div>
        </div>
      </div>

      {/* PILDORAS */}
      <div className="w-full grid grid-cols-4 gap-2 text-center z-10">
        {
          pillsInfo(playArgentinaAudio).map(pill => (
            <Pill
              key={pill.content}
              content={pill.content}
              icon={pill.icon}
              isDisabled={fallingIcons.length === 0}
              onClick={() => pill.onClick(triggerFallingIcons)}
            />
          ))
        }
      </div>

      {/* ICONOS CAYENDO */}
      {fallingIcons.map(({ icon, left, id }, index) => (
        <motion.div
          key={id}
          className="absolute top-0 text-2xl pointer-events-none"
          style={{ left }}
          initial={{ y: -150, opacity: 1 }}
          animate={{ y: '100vh', opacity: 0 }}
          transition={{ duration: 6, delay: index * 0.1 }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

const Pill = ({ content, icon, onClick, isDisabled }) => (
  <div
    onClick={onClick}
    className={`2xl:p-2 2xl:mt-5 lg:flex lg:justify-center lg:items-center inline cursor-pointer rounded-md bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 ${!isDisabled && 'pointer-events-none opacity-50'}`}
  >
    {icon && <span className="mr-1 lg:hidden 2xl:inline">{icon}</span>}
    <span className='text-baseline'>{content}</span>
  </div>
);

// pillsInfo se transforma en una función para poder usar playArgentinaAudio correctamente
const pillsInfo = (playArgentinaAudio) => [
  {
    icon: '😀',
    content: 'Argentina',
    onClick: () => {
      playArgentinaAudio();
    },
  },
  {
    icon: '🗣️',
    content: 'Spanish & English',
    onClick: (trigger) => {
      const icons = [
        <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />,
        <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />,
        <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />,
        <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />,
        <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />, <EeuuFlagIcon />, <ArgentinaFlagIcon />,
      ];
      const mixed = Array.from({ length: 40 }, () => icons[Math.floor(Math.random() * icons.length)]);
      trigger(mixed);
    }
  },
  {
    icon: '💻',
    content: 'Front-End Dev',
    onClick: (trigger) => {
      const icons = [ 
        <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, 
        <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, 
        <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, 
        <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, 
        <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, <MySqlLogoIcon />, <NodeLogoIcon />, <ViteLogoIcon />, <GitLogoIcon />, <NpmLogoIcon />, <ReduxLogoIcon />, <HtmlLogoIcon />, <CssLogoIcon />, <JsLogoIcon />, <TsLogoIcon />, <ReactLogoIcon />, 
      ]
      const mixed = Array.from({ length: 40 }, () => icons[Math.floor(Math.random() * icons.length)]);
      trigger(mixed);
    }
  },
  {
    icon: '🎸',
    content: 'Enthusiastic',
    onClick: (trigger) => {
    const icons = [
      <span className="text-6xl" key="1">🎸</span>,
      <span className="text-6xl" key="2">🎶</span>,
      <span className="text-6xl" key="3">🎵</span>,
      <span className="text-6xl" key="4">🎧</span>,
      <span className="text-6xl" key="5">🎤</span>,
      <span className="text-6xl" key="6">🎼</span>,
      <span className="text-6xl" key="7">🥁</span>,
      <span className="text-6xl" key="8">🎷</span>,
      <span className="text-6xl" key="9">🎹</span>,
      <span className="text-6xl" key="10">🪕</span>,
      <span className="text-6xl" key="11">🎺</span>,
      <span className="text-6xl" key="12">🎻</span>,
      <span className="text-6xl" key="14">📻</span>,
      <span className="text-6xl" key="16">🎛️</span>,
      <span className="text-6xl" key="18">🔊</span>,
      <span className="text-6xl" key="19">🔉</span>,
      <span className="text-6xl" key="20">🎙️</span>,
      <span className="text-6xl" key="24">💽</span>,
      <span className="text-6xl" key="25">💿</span>,
      <span className="text-6xl" key="26">📀</span>,
    ];
      const mixed = Array.from({ length: 40 }, () => icons[Math.floor(Math.random() * icons.length)]);
      trigger(mixed);
    }
  },
];
