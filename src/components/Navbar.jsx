import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-10 sm:w-14 md:w-16"
            loading="lazy"
            src={logo}
            alt="Logo"
          />
          <motion.p
            className="bg-[#FF1F1F] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Right Side - Button + Plus */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Outer fixed border */}
          <div
            className="rounded-full border border-[#654AFF]"
            style={{
              width: "150px",
              height: "50px",
              padding: "2px", // space for scaling content
            }}
          >
            {/* Inner scaling content */}
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
                    key="about"
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
          </div>


          {/* Plus Icon */}
          <div className="bg-[#654AFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer">
            <p className="bg-white p-1 rounded-full text-black">
              <Plus size={18} />
            </p>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
