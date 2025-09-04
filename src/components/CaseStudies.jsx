import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import caseVideo1 from "../assets/work1.mp4";
import caseVideo2 from "../assets/work3.mp4";
import caseVideo3 from "../assets/work4.mp4";
import caseVideo4 from "../assets/work5.mp4";
import { Link } from "react-router-dom";

const CaseStudies = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="bg-black text-white px-4 pb-10 relative">
            {/* Title */}
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Our
                </h1>
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Work
                </h1>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto relative px-4">
                {/* Video 1 */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <video
                        src={caseVideo1}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#7BC6D6] uppercase basement">
                            Husn-e-eid
                        </h2>
                    </div>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <video
                        src={caseVideo2}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#D88281] uppercase basement">
                            Velo
                        </h2>
                    </div>
                </motion.div>

                {/* Video 3 */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <video
                        src={caseVideo3}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#3C4D58] uppercase basement">
                            Why not
                        </h2>
                    </div>
                </motion.div>

                {/* Video 4 */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <video
                        src={caseVideo4}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#CACB8D] uppercase basement">
                            Peechay hut
                        </h2>
                    </div>
                </motion.div>
            </div>

            <Link to={"/portfolio"} onClick={() => scrollTo(0, 0)}>
                <div
                    className="rounded-full border border-[#654AFF] mx-auto mt-10"
                    style={{
                        width: "160px",
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
                                    View More
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="learn"
                                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    View More
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </Link>

            {/* Divider */}
            <div className="flex justify-center pt-10 px-4">
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

export default CaseStudies;
