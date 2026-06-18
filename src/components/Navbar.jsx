import { useState, useEffect } from 'react';
import logo from '../assets/images/brand_logo.png';

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('home')?.offsetHeight || window.innerHeight;
      setIsPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-center px-6 py-6">
        <div
          onClick={handleLogoClick}
          className={`relative flex items-center gap-5 border-2 px-7 py-3 transition-all duration-500 cursor-pointer ${
            isPastHero ? 'border-white/30' : 'border-white'
          }`}
        >
          {/* Blue glow blur - hanya aktif setelah scroll melewati hero */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 rounded-full bg-[#106BAA] blur-2xl transition-opacity duration-700 -z-10 ${
              isPastHero ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <img src={logo} alt="BaliOneToGo Logo" className="relative w-14 h-14 z-10" />
          <h2 className="relative text-white text-4xl font-normal tracking-wide z-10">
            BaliOneToGo
          </h2>
        </div>
      </div>
    </header>
  );
}