const keywords = [
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
]

export const Keywords = () => {
  return (
    <>
    <h2 className="text-3xl font-bold mb-4 text-center">Keywords</h2>
        <ul className="list-none flex flex-wrap gap-2 justify-center">
            {
                keywords.map((keyword, idx) => (
                    <div className="p-2 mb-1 bg-black opacity-80 hover:text-black hover:bg-white hover:opacity-100 rounded-md " key={idx}>
                        <li className="text-xl select-none" >{keyword}</li>
                    </div>
                ))
            }
        </ul>
    </>
  )
}
