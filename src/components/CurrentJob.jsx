import logoCEL from '../assets/logo-CEL.png'

export const CurrentJob = () => {
  return (
    <div className="overflow-hidden">
            <h2 className="text-3xl font-bold mb-2 text-center lg:text-2xl">Current Job</h2>
            <div className="flex flex-col">
                <div className="relative m-auto">
                    <img 
                        src={logoCEL} 
                        alt="Logo Southern Horizon" 
                        className="float-left bg-[#ffffffe0] shape-image w-35 h-35 rounded-full mr-4" 
                    />
                </div>
                <h3 className="font-bold text-center mt-2">Centro de E-Learning (as Low-Code Dev)</h3>
            </div>
        </div>
  )
}
