import React from "react";
import { motion } from "framer-motion";
import caseVideo1 from "../assets/case-video-1.mp4";
import caseVideo2 from "../assets/case-video-2.mp4";
import caseVideo3 from "../assets/case-video-3.mp4";
import caseVideo4 from "../assets/case-video-4.mp4";

const CaseStudies = () => {
    return (
        <div className="bg-black text-white pb-20 relative">
            {/* Title */}
            <div className="flex flex-col items-center justify-center mb-16">
                <h1 className="basement text-9xl leading-none uppercase">Case</h1>
                <h1 className="basement text-9xl leading-none uppercase">Studies</h1>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto relative">
                {/* Video 1 */}
                <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        src={caseVideo1}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl text-[#7BC6D6] uppercase basement">Bright</h2>
                    </div>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <video
                        src={caseVideo2}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl text-[#D88281] uppercase basement">Beyond</h2>
                    </div>
                </motion.div>

                {/* Video 3 (starts behind video 1, slides down to row 2) */}
                <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: -250 }} // start behind first row
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        src={caseVideo3}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl basement text-[#3C4D58] uppercase">Harlo</h2>
                    </div>
                </motion.div>

                {/* Video 4 (starts behind video 2, slides down to row 2) */}
                <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-lg"
                    initial={{ opacity: 0, y: -250 }} // start behind first row
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <video
                        src={caseVideo4}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl basement text-[#CACB8D] uppercase">Lumen</h2>
                    </div>
                </motion.div>
            </div>
            <div className="flex justify-center pt-10 px-10">
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
