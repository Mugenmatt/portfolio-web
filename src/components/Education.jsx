import { motion } from 'framer-motion'
import logoDH from '../assets/digitalhouse.png'
import acamica from '../assets/acamica.png'
import alkemy from '../assets/alkemy.png'

export const Education = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl">Full Stack React-Node</span>
            <motion.a 
              animate={{ x: [0, -250, -250, -250, -250, 0, 0, 0, 0, 0] }}
              initial={{scale: 1, x: 0}}
              whileHover={{ x: 0, scale: 1.1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              href='https://www.digitalhouse.com/ar'
              target='_blank'
            ><img src={logoDH} alt="digital house" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
            </motion.a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl">Advanced React</span>
            <motion.a 
              animate={{ scale: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1] }}
              initial={{scale: 1}}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              href='https://www.digitalhouse.com/ar'
              target='_blank'
            ><img src={acamica} alt="acamica" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
            </motion.a>
          </div>
          <div className="flex flex-col items-center  justify-center">
            <span className="text-2xl">Acceleration</span>
            <motion.a 
              animate={{ x: [0, 200, 200, 200, 200, 0, 0, 0, 0, 0] }}
              initial={{scale: 1, x: 0}}
              whileHover={{ x: 0, scale: 1.1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              href='https://www.alkemy.org/'
              target='_blank'
            ><img src={alkemy} alt="alkemy" className='w-25 h-25 my-2 rounded-full cursor-pointer' />
            </motion.a>
          </div>
        </div>
    </div>
  )
}
