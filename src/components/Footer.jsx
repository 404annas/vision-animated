import React from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-10">
        {/* Top section */}
        <div className="flex items-center flex-col gap-6">
          {/* Logo */}
          <img
            className="w-16 sm:w-28 cursor-pointer hover:opacity-80 transition-all duration-300"
            loading="lazy"
            src={logo}
            alt="Logo"
          />

          {/* Tagline */}
          <p className="uncut uppercase text-center max-w-md text-sm sm:text-base text-[#BABABA]">
            Crafting visuals and compelling stories for brands that move the world.
          </p>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 text-[#9C979F] uncut pt-8">
            <p className="cursor-pointer hover:text-white">Home</p>
            <p className="cursor-pointer hover:text-white">About</p>
            <p className="cursor-pointer hover:text-white">Case Studies</p>
            <p className="cursor-pointer hover:text-white">Services</p>
            <p className="cursor-pointer hover:text-white">Contact</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8"> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span><a href="https://www.instagram.com/f_e_p_o_/"><Instagram size={20} /> </a></span> <span><a href="https://www.instagram.com/f_e_p_o_/"> <Instagram size={20} /> </a></span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span> <Twitter size={20} /> </span> <span> <Twitter size={20} /> </span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer"> <span> <Linkedin size={20} /> </span> <span> <Linkedin size={20} /> </span> </div> <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] transition-all duration-300 text-white p-3 rounded-full cursor-pointer"> <span> <Facebook size={20} /> </span> <span> <Facebook size={20} /> </span> </div> </div>
        </div>

        <div className="text-center pt-10 basement text-sm sm:text-base">
          <a href="tel: +92 333 8805362"><p>Contact Us: +92 333 8805362</p></a>
        </div>
      </footer>

      {/* Large Background Text */}
      <div className="relative bg-[#020202] overflow-hidden h-12 sm:h-32 md:h-44">
        <h1 className="mor text-[#0F0F0F] leading-none text-center text-[80px] sm:text-[160px] md:text-[220px] lg:text-[280px] basement px-0 uppercase py-0">
          Fepo
        </h1>
      </div>
    </>
  );
};

export default Footer;
