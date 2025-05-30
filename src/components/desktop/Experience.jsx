import { motion } from 'framer-motion'

export const Experience = ({ isMobile }) => {

  // =============== MOBILE ===============
  if(isMobile) {
    return (
      <motion.div
        className="flex flex-col gap-6 px-4 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">Experience</h2>

        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "03+", label: "Work Experience" },
            { num: "06+", label: "Real Projects" },
            { num: "04+", label: "Personal Experience" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#303030] rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">{item.num}</h2>
              <p className="text-sm md:text-base text-gray-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  // =============== DESKTOP ===============
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center lg:text-2xl">Experience</h2>
        <div className="flex items-center justify-evenly">
          <NumberOf numberOf={'03'} title={'Work Experience'} extraCss="mr-6" />
          <NumberOf numberOf={'06'} title={'Real Projects'} extraCss="mr-6" />
          <NumberOf numberOf={'04'} title={'Personal Experience'} />
        </div>
    </div>
  )
}

const NumberOf = ({ numberOf, icon, title, extraCss }) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-[#101010b0] to-[#303030b0] rounded-xl p-3 w-[150px] h-[140px] 2xl:w-[200px] 2xl:h-[150px] ${extraCss}`}>
      <div className="flex items-center justify-center mb-2">
        <span className="mr-1 text-5xl 2xl:text-6xl">{numberOf}</span>
        <span className="text-5xl 2xl:text-6xl">+</span>
      </div>
      <div className="flex items-center justify-center">
        {icon ? <span className="mr-2 hidden 2xl:inline">🚩</span> : <span className="mr-2 hidden 2xl:inline">🚩</span>}
        <span className="text-md 2xl:text-md text-center">{title}</span>
      </div>
    </div>
  )
}