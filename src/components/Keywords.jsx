import InfiniteCarousel from "./InfiniteCarousel"

const keywords = [
    'Full Stack',
    'Frontend',
    'HTML', 
    'CSS', 
    'JavaScript', 
    'React.js', 
    'Node.js', 
    'Redux', 
    'Axios',
    'SQL',
    'Git', 
    'Figma',
    'Librerias Externas',
]

export const Keywords = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center">Keywords</h2>

        <InfiniteCarousel duration={100}>
            {
                [...keywords, ...keywords].map((keyword, idx) => (
                    <div className="p-2 mb-1 bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 rounded-md" key={idx}>
                        <span className="text-xl select-none" >{keyword}</span>
                    </div>
                ))
            }
        </InfiniteCarousel>

        <InfiniteCarousel duration={100} shift="-40%">
            {
                [...keywords, ...keywords].map((keyword, idx) => (
                    <div className="p-2 mb-1 bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 rounded-md" key={idx}>
                        <span className="text-xl select-none" >{keyword}</span>
                    </div>
                ))
            }
        </InfiniteCarousel>

    </div>
  )
}
