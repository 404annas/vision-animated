import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='px-10 text-white bg-[#020202] py-10'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="basement text-7xl md:text-9xl leading-none uppercase">Visual</h1>
        <h1 className="basement text-7xl md:text-9xl leading-none uppercase">Storytelling</h1>
        <p className='uncut text-[#B0B0B0] max-w-lg text-center pt-10'>We craft visually striking stories that move people. Whether it’s a high-energy commercial, a cinematic brand film, or sleek social content, we bring ideas to life through dynamic video production and powerful storytelling.</p>
        <div className="flex justify-center mt-10 pb-10">
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
                    About Us
                  </motion.span>
                ) : (
                  <motion.span
                    key="learn"
                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    About Us
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="border-b border-[#252A3C]"
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  )
}

export default AboutUs;