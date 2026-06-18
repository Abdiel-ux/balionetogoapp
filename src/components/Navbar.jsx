import { useState, useEffect } from "react";
import logo from "../assets/images/brand_logo.png";

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight || window.innerHeight;
      setIsPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${isPastHero
          ? "bg-[#0A1628]/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      <div className="px-6 py-3 flex items-center gap-5">
        <div
          className={`
            flex items-center gap-5 border-2 border-white px-7 py-3
            transition-all duration-500
            ${isPastHero ? "border-white/30" : "border-white"}
          `}
        >
          <img src={logo} alt="BaliOneToGo Logo" className="w-14 h-14" />
          <h2 className="text-white text-4xl font-normal tracking-wide">
            BaliOneToGo
          </h2>
        </div>
      </div>
    </header>
  );
}
