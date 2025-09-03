import React from "react";
import { motion } from "framer-motion";
import caseVideo1 from "../assets/case-video-1.mp4";
import caseVideo2 from "../assets/case-video-2.mp4";
import caseVideo3 from "../assets/case-video-3.mp4";
import caseVideo4 from "../assets/case-video-4.mp4";

const CaseStudies = () => {
    return (
        <div className="bg-black text-white px-4 pb-10 relative">
            {/* Title */}
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Case
                </h1>
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Studies
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
                            Bright
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
                            Beyond
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
                            Harlo
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
                            Lumen
                        </h2>
                    </div>
                </motion.div>
            </div>

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
