import linkedinLogo from '../assets/LinkedIn.svg'
import githubLogo from '../assets/GitHub.svg'

export const Links = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-full'>
        <div className="h-1/3 w-full">
          <h2 className="text-3xl font-bold text-center mb-11">Links</h2>
        </div>
        <div className="flex justify-evenly items-center">
          <a href='https://www.linkedin.com/in/matias-godoy/' target='_blank' className='rounded-xl flex items-center justify-center w-25'><img src={ linkedinLogo } className="" alt="html" /></a>
          <a href='https://github.com/Mugenmatt' target='_blank' className='bg-white rounded-xl flex items-center justify-center w-25'><img src={ githubLogo } className="" alt="html" /></a>
        </div>
      </div>
    </div>
  )
}
