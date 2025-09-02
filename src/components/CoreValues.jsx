import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CoreValues = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-[#020202] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          Video
        </h1>
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          Solutions
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10">
        {/* Card 1 */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl">
          <img
            loading="lazy"
            className="w-10 sm:w-12"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68405a4d4b9a6fe5872a6b2b_icon-01.svg"
            alt="Icon 1"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">
              Brand
            </h1>
            <h1 className="text-2xl sm:text-3xl text-white basement uppercase">
              Films
            </h1>
          </div>
          <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            We create cinematic brand stories that connect emotionally with your
            audience, elevating your identity through high-impact visuals and
            thoughtful storytelling.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl">
          <img
            loading="lazy"
            className="w-10 sm:w-12"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840591309dc9e019747469c_icon-02.svg"
            alt="Icon 2"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">
              Event
            </h1>
            <h1 className="text-2xl sm:text-3xl text-white basement uppercase">
              Recaps
            </h1>
          </div>
          <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Our team captures key moments from your events and transforms them
            into compelling highlight reels that extend the experience and
            amplify engagement.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl">
          <img
            loading="lazy"
            className="w-10 sm:w-12"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/684050779175aa2898d36880_icon-03.svg"
            alt="Icon 3"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">
              Product
            </h1>
            <h1 className="text-2xl sm:text-3xl text-white basement uppercase">
              Demos
            </h1>
          </div>
          <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Showcase your product’s features and benefits with clean, engaging
            demo videos that educate, inform, and convert viewers into customers.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl">
          <img
            loading="lazy"
            className="w-10 sm:w-12"
            src="https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68404fde1cbd67e07ccc8d7e_icon-04.svg"
            alt="Icon 4"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">
              Social
            </h1>
            <h1 className="text-2xl sm:text-3xl text-white basement uppercase">
              Videos
            </h1>
          </div>
          <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            We craft short-form, platform-optimized content designed to stop the
            scroll, spark interaction, and maximize reach across all major social
            media channels.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-10 pb-10">
        <div
          className="rounded-full border border-[#654AFF]"
          style={{
            width: "150px",
            height: "50px",
            padding: "2px",
          }}
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
                  key="about"
                  initial={{ rotate: 12, y: -40, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  exit={{ rotate: -12, y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  All Services
                </motion.span>
              ) : (
                <motion.span
                  key="learn"
                  initial={{ rotate: 12, y: -40, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  exit={{ rotate: -12, y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  All Services
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="flex justify-center">
        <motion.div
          className="border-b border-[#252A3C]"
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ width: "100%" }}
        />
      </div> */}
    </section>
  );
};

export default CoreValues;
