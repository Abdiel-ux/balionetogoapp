import { useState, useEffect } from 'react';
import arrowIcon from '../assets/images/Arrow 1.png';
import logo from '../assets/images/brand_logo.png';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Daftar gambar background - tambahkan gambar Anda di sini
  const backgroundImages = [
    'src/assets/images/pura_lempuyang.png',
    'src/assets/images/pura_taman_ayun.png',
    'src/assets/images/nusa_penida 2.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col items-center justify-between pb-12 overflow-hidden pt-6"
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        key={currentImageIndex}
        src={backgroundImages[currentImageIndex]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000"
      />

      {/* Header with Logo and Text */}
      <div className="relative z-20 flex items-center gap-5 border-2 border-white px-7 py-3 mb-6">
        <img src={logo} alt="BaliOneToGo Logo" className="w-14 h-14" />
        <h2 className="text-white text-4xl font-normal tracking-wide">BaliOneToGo</h2>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-md mx-auto px-6 w-full">
        <h1 className=" text-white text-4xl font-bold leading-tight mb-4">
          Providing<br />
          professional and<br />
          experienced<br />
          drivers.
        </h1>
        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs">
          BaliOneToGo (BOTG) is a professional driver service in Bali dedicated to
          providing comfortable, safe, and enjoyable travel experiences for both local
          and international tourists.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center w-14 h-14 border-2 border-white transition-transform duration-300 hover:scale-110"
          aria-label="Get in touch"
        >
          <img src={arrowIcon} alt="arrow" className="w-6 h-4" />
        </a>
      </div>
    </section>
  )};
