import { motion, MotionConfig } from 'framer-motion'
import logoDH from '../../assets/digitalhouse.png'
import acamica from '../../assets/acamica.png'
import alkemy from '../../assets/alkemy.png'
import logoYoutube from '../../assets/youtube.png'

export const Education = ({ isMobile }) => {

  // =============== MOBILE ===============
  if(isMobile) {
    const educationData = [
    { title: "YouTube", img: logoYoutube },
    { title: "Digital House", img: logoDH },
    { title: "Advanced React", img: acamica },
    { title: "Alkemy", img: alkemy },
  ];

  return (
    <motion.div
      className="flex flex-col gap-6 px-4 sm:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">Education</h2>

      <div className="grid grid-cols-2 gap-4">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-[#303030] rounded-xl p-3 md:p-4 flex flex-col items-center text-center"
          >
            <img
              src={edu.img}
              alt={edu.title}
              className="w-12 h-12 md:w-30 md:h-30 rounded-2xl object-contain mb-2"
            />
            <p className="text-sm md:text-xl text-white">{edu.title}</p>
          </div>
        ))}
      </div>
    </motion.div>

  );
  }

  // =============== DESKTOP ===============
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <MotionConfig transition={{duration: 0.1, ease: "easeInOut"}}>
          <div className="flex items-center justify-evenly">
            <motion.div  
                whileHover={{ scale: 1.1 }} className="flex flex-col items-center justify-center">
              <span className="text-2xl">Youtube</span>
              <a
                href='https://www.youtube.com/@huxnwebdev/playlists'
                target='_blank'
              ><img src={logoYoutube} alt="digital house" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
              </a>
            </motion.div>
            <motion.div  
                whileHover={{ scale: 1.1 }} className="flex flex-col items-center justify-center">
              <span className="text-2xl">Full Stack React-Node</span>
              <a
                href='https://www.digitalhouse.com/ar'
                target='_blank'
              ><img src={logoDH} alt="digital house" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
              </a>
            </motion.div>
            <motion.div  
                whileHover={{ scale: 1.1 }} className="flex flex-col items-center justify-center">
              <span className="text-2xl">Advanced React</span>
              <a 
                href='https://www.digitalhouse.com/ar'
                target='_blank'
              ><img src={acamica} alt="acamica" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
              </a>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.1 }}  className="flex flex-col items-center justify-center">
              <span className="text-2xl">Acceleration</span>
              <a 
                href='https://www.alkemy.org/'
                target='_blank'
              ><img src={alkemy} alt="alkemy" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
              </a>
            </motion.div>
          </div>
        </MotionConfig>
    </div>
  )
}
