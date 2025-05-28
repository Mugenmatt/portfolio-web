
export const Experience = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
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
    <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-[#101010b0] to-[#303030b0] rounded-xl p-3 w-[200px] h-[150px] ${extraCss}`}>
      <div className="flex items-center justify-center mb-2">
        <span className="mr-1 text-6xl">{numberOf}</span>
        <span className="text-6xl">+</span>
      </div>
      <div className="flex items-center justify-center">
        {icon ? <span className="mr-2">🚩</span> : <span className="mr-2">🚩</span>}
        <span className="">{title}</span>
      </div>
    </div>
  )
}