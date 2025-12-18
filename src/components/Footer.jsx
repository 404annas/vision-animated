import logo from "../assets/fepoLogo3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Footer.css";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const targetId = id.toLowerCase();

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: element, offsetY: 80 },
          ease: "power2.inOut",
        });
      }
    } else {
      navigate("/", { state: { targetId: targetId } });
    }
  };

  return (
    <>
      <footer className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-10">
        <div id="contact" className="flex items-center flex-col gap-6">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <img
              className="w-20 sm:w-24 cursor-pointer hover:opacity-80 transition-all duration-300"
              loading="lazy"
              src={logo}
              alt="Logo"
            />
          </Link>

          <p className="font-uncut uppercase text-center max-w-md text-sm sm:text-base text-[#BABABA]">
            Crafting visuals and compelling stories for brands that move the world.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-6 items-center justify-center gap-6 sm:gap-10 md:gap-16 text-[#9C979F] font-uncut pt-8">
            <p onClick={() => handleScroll("home")} className="cursor-pointer hover:text-white transition-all duration-300">Home</p>
            <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-white transition-all duration-300">About</p>
            <p onClick={() => handleScroll("services")} className="cursor-pointer hover:text-white transition-all duration-300">Services</p>
            <p onClick={() => handleScroll("work")} className="cursor-pointer hover:text-white transition-all duration-300">Work</p>
            <p onClick={() => handleScroll("results")} className="cursor-pointer hover:text-white transition-all duration-300">Results</p>
            <p onClick={() => handleScroll("brands")} className="cursor-pointer hover:text-white transition-all duration-300">Brands</p>
          </div>

          <p className="font-uncut sm:hidden block pt-4">Developed by <a href="https://techxudo.com/" target="_blank" className="text-[#654AFF]">Techxudo</a></p>
        </div>
      </footer >

      <div className="relative bg-[#020202] overflow-hidden h-12 sm:h-32 md:h-44">
        <p className="absolute bottom-4 left-2 sm:left-4 md:left-6 text-sm text-[#9C979F] z-20 font-uncut sm:block hidden">
          Developed by <a href="https://techxudo.com/" target="_blank" rel="noopener noreferrer" className="text-[#654AFF]">Techxudo</a>
        </p>

        <h1 className="text-[#0F0F0F] leading-none text-center text-[80px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-basement uppercase">
          Fepo
        </h1>
      </div>
    </>
  );
};

export default Footer;