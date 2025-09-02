import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-20 sm:w-24 md:w-28"
            loading="lazy"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68424bff643c52d0005a4554_logo.svg"
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
          {/* Get in Touch Button */}
          <div className="flex justify-center">
            <div
              className="rounded-full border border-[#654AFF]"
              style={{
                width: "140px",
                height: "48px",
                padding: "2px",
              }}
            >
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center text-white text-sm sm:text-[16px] font-light overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 0.96 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key="cta"
                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    Get in Touch
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="bg-[#654AFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer">
            <p className="bg-white p-1 rounded-full text-black">
              <Plus size={18} />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
