import InfiniteCarousel from "./InfiniteCarousel"

const keywords = [
    'CSS', 
    'HTML', 
    'Node.js', 
    'Frontend',
    'Front-End',
    'JavaScript', 
    'Figma',
    'SQL',
    'React.js', 
    'External Libraries',
    'Redux', 
    'Full Stack',
    'Axios',
    'Git', 
]

export const Keywords = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center lg:text-2xl">Keywords</h2>
        
        <InfiniteCarousel duration={150} initAndEnd="0%" shift="-30%">
            {
                [...keywords, ...keywords].map((keyword, idx) => (
                    <div className="p-2 mb-1 bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 rounded-md" key={idx}>
                        <span className="text-xl select-none lg:text-2xl" >{keyword}</span>
                    </div>
                ))
            }
        </InfiniteCarousel>

        <InfiniteCarousel duration={250} initAndEnd="-100%" shift="9%">
            {
                [...keywords, ...keywords].map((keyword, idx) => (
                    <div className="p-2 mb-1 bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 rounded-md" key={idx}>
                        <span className="text-xl select-none lg:text-2xl" >{keyword}</span>
                    </div>
                ))
            }
        </InfiniteCarousel>

    </div>
  )
}
