
export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 text-white rounded-xl overflow-hidden">
        
        <div className="w-full flex justify-between">

          {/* IMAGEN y NOMBRE */}
          <div className="w-2/3 flex">
            <div className="rounded-2xl overflow-hidden mr-4">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Me" className="w-35" />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-start">
                <span className="text-xs mr-2 text-green-400 animate-pulse drop-shadow-[0_0_5px_#22c55e]">🟢</span>
                <span className="text-md">Available To Work</span>
              </div>
              <h1 className="text-3xl">Matías Godoy</h1>
              <span className="text-md">Im a Full-Stack Developer</span>
            </div>
          </div>

          {/* CV LINK */}
          <div className="w-1/3 flex justify-end items-top">
            <div className="flex items-start">
              <span>Resume</span>
              <span className="text-3xl">📋</span>
            </div>
          </div>

        </div>

        {/* PILDORAS */}
        <div className="w-full grid grid-cols-4 gap-2 text-center">
          {
            pillsInfo.map(pill => (
              <Pill key={pill.content} content={pill.content} icon={pill.icon} />
            ))
          }
        </div>
    </div>
  )
}

const Pill = ({content, icon}) => (
  <div className="p-2 m-2 mt-5 inline rounded-md bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100">
    {icon && <span className="mr-1">{icon}</span>}
    <span>{content}</span>
  </div>
)

const pillsInfo = [
  { icon: '😀', content: 'Argentina' },
  { icon: '😀', content: 'Spanish & English' },
  { icon: '😀', content: 'Full Stack Dev' },
  { icon: '😀', content: 'Udemy & Youtube' },
]