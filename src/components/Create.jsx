import Marquee from "react-fast-marquee";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brands from "../assets/brand1.png";
import logo1 from "../assets/pslLogo.png";
import logo2 from "../assets/pepsiLogo.png"
import logo3 from "../assets/cockImage.webp"
import logo4 from "../assets/cockStudio2.webp";
import logo5 from "../assets/hblLogo.png";
import logo6 from "../assets/hblLogo2.png";
import logo7 from "../assets/tapalLogo2.png"
import logo8 from "../assets/alakarmLogo.png"
import logo9 from "../assets/ptcImage.png"
const Create = () => {
    const [hovered, setHovered] = useState(false);

    const logos = [
        { src: logo1, w: "w-44" },
        { src: logo2, w: "w-32" },
        { src: logo6, w: "w-44" },
        { src: logo3, w: "w-40" },
        { src: logo7, w: "w-48" },
        { src: logo4, w: "w-40" },
        { src: logo8, w: "w-36" },
        { src: logo9, w: "w-48" },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-10 text-white bg-[#020202] py-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center justify-center text-center"
            >
                {/* Headings */}
                <h1 id="brands" className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase">
                    Brands Fepo
                </h1>
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase">
                    Work with
                </h1>

                {/* Text */}
                <p className="uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl mt-4">
                    We’re here to turn your vision into powerful video.
                </p>
                <p className="uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl">
                    Reach out, and let’s create something worth watching.
                </p>

                {/* Marquee Slider */}
                <div className="w-full py-10">
                    <Marquee
                        speed={80}
                        gradient={false}
                    >
                        {logos.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                className={`${item.w} mx-10`}
                                alt="Brand"
                            />
                        ))}
                    </Marquee>
                </div>

                {/* Button */}
                <div className="flex justify-center pb-8 sm:pb-10">
                    <div
                        className="rounded-full border border-[#654AFF]"
                        style={{ width: "150px", height: "52px", padding: "2px" }}
                    >
                        <motion.div
                            className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-base md:text-lg font-light cursor-pointer"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            animate={{ scale: hovered ? 0.96 : 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={hovered ? "hover" : "default"}
                                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                                >
                                    Reach Out
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Divider */}
            <div className="flex justify-center">
                <motion.div
                    className="border-b border-[#252A3C]"
                    initial={{ scaleX: 0, originX: 0.5 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    style={{ width: "100%" }}
                />
            </div>
        </div>
    );
};

export default Create;
