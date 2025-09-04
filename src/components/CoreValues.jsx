import React from "react";
import { motion } from "framer-motion";
import who1 from "../assets/who1.png";
import who2 from "../assets/who2.png";
import who3 from "../assets/who3.png";
import who4 from "../assets/who4.png";

const CoreValues = () => {
  const cards = [
    {
      icon: who1,
      title1: "Video",
      title2: "Production",
      desc: "We create cinematic brand stories that connect emotionally with your audience, elevating your identity through high-impact visuals and thoughtful storytelling.",
    },
    {
      icon: who2,
      title1: "Video",
      title2: "Direction",
      desc: "Our team captures key moments from your events and transforms them into compelling highlight reels that extend the experience and amplify engagement.",
    },
    {
      icon: who3,
      title1: "Video",
      title2: "Filming",
      desc: "Showcase your product’s features and benefits with clean, engaging demo videos that educate, inform, and convert viewers into customers.",
    },
    {
      icon: who4,
      title1: "Video",
      title2: "Entertain",
      desc: "We craft short-form, platform-optimized content designed to stop the scroll, spark interaction, and maximize reach across all major social media channels.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90, y: 50 },
    visible: { opacity: 1, rotateY: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#020202] text-white pb-20 px-4 sm:px-8 lg:px-6">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          What
        </h1>
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          We Do?
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 pt-8 sm:pt-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img loading="lazy" className="w-10 sm:w-20 invert" src={card.icon} alt={`Icon ${index + 1}`} />
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
