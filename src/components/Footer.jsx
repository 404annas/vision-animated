import React from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-10">
        <div className="flex items-center flex-col gap-6">
          <img
            className="w-36 cursor-pointer hover:opacity-80 transition-all duration-300"
            loading="lazy"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68424bff643c52d0005a4554_logo.svg"
            alt="Logo"
          />
          <p className="uncut uppercase text-center max-w-md text-md text-[#BABABA]">
            Crafting bold visuals and compelling stories for brands that move the world.
          </p>

          <div className="flex items-center justify-between gap-56 text-[#9C979F] uncut pt-10">
            <p>Home</p>
            <p>About</p>
            <p>Case Studies</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Instagram size={20} />
              </span>
              <span>
                <Instagram size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Twitter size={20} />
              </span>
              <span>
                <Twitter size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Linkedin size={20} />
              </span>
              <span>
                <Linkedin size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] transition-all duration-300 text-white p-3 rounded-full cursor-pointer">
              <span>
                <Facebook size={20} />
              </span>
              <span>
                <Facebook size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-10">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <p className="uppercase text-[#67635E] uncut text-sm">Powered By</p>
              <p className="uppercase uncut text-white text-sm">Webflow</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-[#67635E] uncut text-sm">Created By</p>
              <p className="uppercase uncut text-white text-sm">Flowaze</p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="uppercase uncut text-white text-sm">Style Guide</p>
            <p className="uppercase uncut text-white text-sm">Licenses</p>
            <p className="uppercase uncut text-white text-sm">Changelog</p>
          </div>
        </div>
      </footer>

      <div className="relative bg-[#020202] overflow-hidden h-40">
        <h1 className="mor text-[#0F0F0F] leading-none text-center text-[280px] basement px-0 uppercase py-0">
          Visione
        </h1>
      </div>
    </>
  );
};

export default Footer;
