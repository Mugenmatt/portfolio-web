import { useEffect, useState } from 'react';
import './App.css'
import PortfolioDesktop from './pages/PortfolioDesktop'
import { PortfolioMobile } from './pages/PortfolioMobile';

function App() {
  // Desktop o Mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  
  // Setear el tamaño actual de ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Escucha de evento al hacer resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <PortfolioMobile /> : <PortfolioDesktop />}
    </>
  )
}

export default App
