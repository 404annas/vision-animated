import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import video3 from "../assets/hero-video-3.mp4";
import video4 from "../assets/hero-video-4.mp4";

const Create = () => {
    const [hovered, setHovered] = useState(false);

    const containerRef = useRef(null);

    // Track scroll progress inside this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"], // 👈 triggers when section hits middle
    });

    // --- Video 3 ---
    const video3Scale = useTransform(scrollYProgress, [0, 0.2], [0.6, 1.5]);
    const video3X = useTransform(scrollYProgress, [0.15, 0.3], [0, -800]);
    const video3Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    // --- Video 4 ---
    const video4Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.65], [0, 1, 0]);
    const video4Scale = useTransform(scrollYProgress, [0.35, 0.55], [0.6, 1.5]);
    const video4X = useTransform(scrollYProgress, [0.5, 0.65], [0, 800]);

    // --- Text ---
    const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.7, 0.85], [100, 0]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#020202]">
            {/* Sticky keeps animations fixed in viewport */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Video 3 */}
                <motion.video
                    src={video3}
                    autoPlay
                    loop
                    muted
                    className="absolute w-[50vw] rounded-2xl shadow-lg"
                    style={{ scale: video3Scale, x: video3X, opacity: video3Opacity }}
                />

                {/* Video 4 */}
                <motion.video
                    src={video4}
                    autoPlay
                    loop
                    muted
                    className="absolute w-[50vw] rounded-2xl shadow-lg"
                    style={{ scale: video4Scale, x: video4X, opacity: video4Opacity }}
                />

                {/* Text */}
                <motion.div
                    className="text-center text-white max-w-3xl px-4"
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <h1 className="basement text-6xl md:text-9xl uppercase">Let’s</h1>
                    <h1 className="basement text-6xl md:text-9xl uppercase">Create</h1>
                    <p className="uncut text-[#AEAEAE] text-lg md:text-xl mt-6">
                        We’re here to turn your vision into powerful video.
                    </p>
                    <p className="uncut text-[#AEAEAE] text-lg md:text-xl">
                        Reach out, and let’s create something worth watching.
                    </p>

                    <div className="flex justify-center mt-8 sm:mt-10">
                        <div
                            className="rounded-full border border-[#654AFF]"
                            style={{
                                width: "160px",
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
                                    <motion.span
                                        key="about"
                                        initial={{ rotate: 12, y: -40, opacity: 0 }}
                                        animate={{ rotate: 0, y: 0, opacity: 1 }}
                                        exit={{ rotate: -12, y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        Let's Create
                                    </motion.span>
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Create;
