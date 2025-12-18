import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "../assets/fepoLogo3.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Footer.css";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <footer className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-10">
        <div id="contact" className="flex items-center flex-col gap-6">
          <Link to={"/"}>
            <img
              className="w-16 sm:w-24 cursor-pointer hover:opacity-80 transition-all duration-300"
              loading="lazy"
              src={logo}
              alt="Logo"
            />
          </Link>

          <p className="font-uncut uppercase text-center max-w-md text-sm sm:text-base text-[#BABABA]">
            Crafting visuals and compelling stories for brands that move the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 text-[#9C979F] font-uncut pt-8">
            <p onClick={() => handleScroll("home")} className="cursor-pointer hover:text-white transition-all duration-300">Home</p>
            <p onClick={() => handleScroll("about")} className="cursor-pointer hover:text-white transition-all duration-300">About</p>
            <p onClick={() => handleScroll("services")} className="cursor-pointer hover:text-white transition-all duration-300">Services</p>
            <p onClick={() => handleScroll("work")} className="cursor-pointer hover:text-white transition-all duration-300">Work</p>
            <p onClick={() => handleScroll("results")} className="cursor-pointer hover:text-white transition-all duration-300">Results</p>
            <p onClick={() => handleScroll("brands")} className="cursor-pointer hover:text-white transition-all duration-300">Brands</p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8"> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span><a href="https://www.instagram.com/f_e_p_o_/"><Instagram size={20} /> </a></span> <span><a href="https://www.instagram.com/f_e_p_o_/"> <Instagram size={20} /> </a></span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span> <Twitter size={20} /> </span> <span> <Twitter size={20} /> </span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span> <Linkedin size={20} /> </span> <span> <Linkedin size={20} /> </span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] transition-all duration-300 text-white p-3 rounded-full cursor-pointer"> <span> <Facebook size={20} /> </span> <span> <Facebook size={20} /> </span> </div> </div> </div>
      </footer >

      <div className="relative bg-[#020202] overflow-hidden h-12 sm:h-32 md:h-44">
        <p className="absolute bottom-4 left-2 sm:left-4 md:left-6 text-sm text-[#9C979F] z-20 font-uncut sm:block hidden">
          Developed by <a href="https://techxudo.com/" className="text-[#654AFF]">Techxudo</a>
        </p>

        <h1 className="text-[#0F0F0F] leading-none text-center text-[80px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-basement uppercase">
          Fepo
        </h1>
      </div>
    </>
  );
};

export default Footer;
