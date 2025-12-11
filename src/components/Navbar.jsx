import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["About", "Services", "Work", "Results", "Brands", "Contact"];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  // Smooth scroll function using GSAP
  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 }, // adjust offset if needed
        ease: "power2.inOut",
      });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <nav className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-4 relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-10 sm:w-14 md:w-16" src={logo} alt="Logo" loading="lazy" />
          <motion.p
            className="bg-[#FF1F1F] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 relative">
          {/* Get in Touch Button */}
          <div className="rounded-full border border-[#654AFF]" style={{ width: "150px", height: "50px", padding: "2px" }}>
            <motion.div
              className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-[17px] font-light overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              animate={{ scale: hovered ? 0.96 : 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-[17px] font-light overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 0.96 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  {!hovered ? (
                    <motion.span
                      key="contact"
                      onClick={() => handleScroll("contact")}
                      initial={{ rotate: 12, y: -40, opacity: 0 }}
                      animate={{ rotate: 0, y: 0, opacity: 1 }}
                      exit={{ rotate: -12, y: -10, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      Get in Touch
                    </motion.span>
                  ) : (
                    <motion.span
                      key="learn"
                      onClick={() => handleScroll("contact")}
                      initial={{ rotate: 12, y: -40, opacity: 0 }}
                      animate={{ rotate: 0, y: 0, opacity: 1 }}
                      exit={{ rotate: -12, y: -10, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      Get in Touch
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* Plus Icon */}
          <div
            className="bg-[#654AFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <p className="bg-white p-1 rounded-full text-black">{menuOpen ? <Minus size={18} /> : <Plus size={18} />}</p>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full right-0 mt-2 w-64 bg-white/80 backdrop-blur-sm rounded-md shadow-lg overflow-hidden flex flex-col z-40"
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="px-4 py-3 text-left uncut cursor-pointer text-black text-xs sm:text-[17px] font-light hover:bg-white/50 border-b border-b-black/10"
                    onClick={() => handleScroll(item)}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
