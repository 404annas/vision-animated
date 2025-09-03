import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const cards = [
    {
      icon: "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68405a4d4b9a6fe5872a6b2b_icon-01.svg",
      title1: "Brand",
      title2: "Films",
      desc: "We create cinematic brand stories that connect emotionally with your audience, elevating your identity through high-impact visuals and thoughtful storytelling.",
    },
    {
      icon: "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840591309dc9e019747469c_icon-02.svg",
      title1: "Event",
      title2: "Recaps",
      desc: "Our team captures key moments from your events and transforms them into compelling highlight reels that extend the experience and amplify engagement.",
    },
    {
      icon: "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/684050779175aa2898d36880_icon-03.svg",
      title1: "Product",
      title2: "Demos",
      desc: "Showcase your product’s features and benefits with clean, engaging demo videos that educate, inform, and convert viewers into customers.",
    },
    {
      icon: "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/68404fde1cbd67e07ccc8d7e_icon-04.svg",
      title1: "Social",
      title2: "Videos",
      desc: "We craft short-form, platform-optimized content designed to stop the scroll, spark interaction, and maximize reach across all major social media channels.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90, y: 50 },
    visible: { opacity: 1, rotateY: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#020202] text-white py-20 px-4 sm:px-8 lg:px-10">
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
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img loading="lazy" className="w-10 sm:w-12" src={card.icon} alt={`Icon ${index + 1}`} />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">{card.title1}</h1>
              <h1 className="text-2xl sm:text-3xl text-white basement uppercase">{card.title2}</h1>
            </div>
            <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
