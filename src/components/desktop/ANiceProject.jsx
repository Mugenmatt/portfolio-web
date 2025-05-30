import {motion} from 'framer-motion';
import error from '../../assets/error.gif'

export const ANiceProject = () => {
  return (
    <motion.div 
        transition={{ ease: 'easeInOut', duration: 15, repeat: Infinity, repeatType: "loop" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        className='rounded-xl'
        >
        <img src={error} alt="" className="w-full h-[230px]" />
    </motion.div>
  )
}
