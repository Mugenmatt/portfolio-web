import { motion, MotionConfig } from 'framer-motion'
import logoDH from '../assets/digitalhouse.png'
import acamica from '../assets/acamica.png'
import alkemy from '../assets/alkemy.png'
import logoYoutube from '../assets/youtube.png'

export const Education = () => {
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
