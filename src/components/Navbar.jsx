import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="bg-[#020202] text-white px-10">
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img className='w-28' loading='lazy' src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68424bff643c52d0005a4554_logo.svg" alt="Logo" />
          <motion.p
            className="bg-[#FF1F1F] w-3 h-3 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.p>
        </div>
        <div className='flex items-center gap-2'>
          <div className="flex justify-center mt-4 mb-4">
            {/* Outer fixed border */}
            <div
              className="rounded-full border border-[#654AFF]"
              style={{
                width: "170px",
                height: "60px",
                padding: "2px", // space for scaling content
              }}
            >
              {/* Inner scaling content */}
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-[17px] font-light overflow-hidden cursor-pointer"
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
          </div>

          <div className='bg-[#654AFF] rounded-full w-13 h-13 flex items-center justify-center cursor-pointer'>
            <p className='bg-white p-1 rounded-full text-black'><Plus size={18} /></p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
