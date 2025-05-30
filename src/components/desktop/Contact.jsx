import { motion } from 'framer-motion'
import linkedinLogo from '../../assets/LinkedIn.svg'
import githubLogo from '../../assets/GitHub.svg'
import sandboxLogo from '../../assets/Sandbox.svg'

export const Contact = ({ isMobile }) => {

  // =============== MOBILE ===============
  if(isMobile) {
const contactLinks = [
    { img: linkedinLogo, link: "https://www.linkedin.com/in/matias-godoy/" },
    { img: githubLogo, link: "https://github.com/Mugenmatt" },
    { img: sandboxLogo, link: "https://codesandbox.io/dashboard/recent" },
    // Si tenés una imagen para email, importala y reemplazá abajo
    { img: "https://cdn-icons-png.flaticon.com/512/561/561127.png", link: "mailto:matigodoy93@hotmail.com" }, 
  ];

  return (
    <motion.div
      className="flex flex-col gap-4 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="flex justify-center flex-wrap gap-12">
        {contactLinks.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.img}
              alt={`icon-${i}`}
              className={`${item.link.includes('linkedin') ? '' : 'bg-white p-2'} rounded-md w-34 h-34 hover:scale-110 transition-transform duration-200`}
            />
          </a>
        ))}
      </div>
    </motion.div>
    );
  }

  // =============== DESKTOP ===============
  return (
    <>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          
          <span className="text-3xl flex justify-center my-2">😀</span>

          <h2 className="text-3xl font-bold text-center">Contact</h2>

          <p className="my-4 text-[#ffffff99]">Let's Work Together</p>

          <a 
            href="mailto:matigodoy93@hotmail.com?subject=¡Hola Matías! / Hi Matías!"
            className="text-center cursor-pointer w-2/3 py-2 rounded-xl mb-2 bg-black opacity-80 hover:text-black hover:bg-white text-white"
          >
            Email Me
          </a>


        </div>

    </>
  )
}
