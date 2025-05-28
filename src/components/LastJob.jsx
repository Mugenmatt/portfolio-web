import logoSH from '../assets/logo-SH.webp'

export const LastJob = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-7 text-center">Last Job</h2>
        <div className="flex flex-col px-4">
            <div className="relative">
                <img 
                    src={logoSH} 
                    alt="Logo Southern Horizon" 
                    className="float-left bg-[#ffffffe0] shape-image w-28 h-28 rounded-full mr-4" 
                />
                <div className="overflow-hidden">
                    <h3 className="font-bold">Southern Horizon (as Front-End Dev)</h3>
                    <p>
                        I developed dynamic interfaces using React and modern technologies, ensuring a smooth user experience across different devices.
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}
