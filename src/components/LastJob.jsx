import logoSH from '../assets/logo-SH.webp'

export const LastJob = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-2 text-center lg:text-2xl">Last Job</h2>
        <div className="flex flex-col">
            <div className="relative m-auto">
                <img 
                    src={logoSH} 
                    alt="Logo Southern Horizon" 
                    className="float-left bg-[#ffffffe0] shape-image w-35 h-35 rounded-full mr-4" 
                />
                {/* <div className="overflow-hidden">
                    <h3 className="font-bold">Southern Horizon (as Front-End Dev)</h3>
                    <p className='2xl:hidden'>
                        I developed dynamic interfaces using React and modern technologies, ensuring a smooth user experience across different devices.
                    </p>
                </div> */}
            </div>
            <h3 className="font-bold text-center mt-2">Southern Horizon (as Front-End Dev)</h3>
        </div>
    </div>

  )
}
