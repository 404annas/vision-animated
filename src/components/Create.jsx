import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video3 from "../assets/hero-video-3.mp4";
import video4 from "../assets/hero-video-4.mp4"

const Create = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="px-4 sm:px-6 md:px-10 text-white bg-[#020202] py-10">
            {/* Section Content */}
            <motion.div initial={{ opacity: 0, scale: 0.8, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} className="flex flex-col items-center justify-center text-center">
                {/* Headings */}
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
                    Let's
                </h1>
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
                    Create
                </h1>

                {/* Paragraphs */}
                <p className="uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl mt-4">
                    We’re here to turn your vision into powerful video.
                </p>
                <p className="uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl">
                    Reach out, and let’s create something worth watching.
                </p>

                {/* Button */}
                <div className="flex justify-center mt-8 sm:mt-10 pb-8 sm:pb-10">
                    {/* Outer border */}
                    <div
                        className="rounded-full border border-[#654AFF]"
                        style={{
                            width: "150px",
                            height: "52px",
                            padding: "2px", // ensures spacing for scale
                        }}
                    >
                        {/* Inner animated button */}
                        <motion.div
                            className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-base md:text-lg font-light overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            animate={{ scale: hovered ? 0.96 : 1 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={hovered ? "hover" : "default"}
                                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    Reach Out
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom divider line */}
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
    );
};

export default Create;
