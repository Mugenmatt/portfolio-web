import { motion } from 'framer-motion'
import linkedinLogo from '../assets/LinkedIn.svg'
import githubLogo from '../assets/GitHub.svg'
import sandboxLogo from '../assets/Sandbox.svg'

export const Links = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-full'>
        <div className="h-1/3 w-full">
          <h2 className="text-3xl font-bold text-center mb-11 lg:text-2xl">Links</h2>
        </div>
        <div className="flex justify-evenly items-center">
          <motion.a whileHover={{ scale: 1.1 }} href='https://www.linkedin.com/in/matias-godoy/' target='_blank' className='rounded-xl flex items-center justify-center 2xl:w-20 lg:w-15'><img src={ linkedinLogo } className="" alt="html" /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='https://github.com/Mugenmatt' target='_blank' className='bg-white rounded-xl flex items-center justify-center 2xl:w-20 lg:w-15'><img src={ githubLogo } className="" alt="html" /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='https://codesandbox.io/dashboard/recent' target='_blank' className='bg-white rounded-xl flex items-center justify-center 2xl:w-20 lg:w-15'><img src={ sandboxLogo } className="" alt="html" /></motion.a>
        </div>
      </div>
    </div>
  )
}
