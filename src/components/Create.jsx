import Marquee from "react-fast-marquee";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserRound, Mail, Send } from "lucide-react";

// logos
import logo1 from "../assets/pslLogo.png";
import logo2 from "../assets/pepsiLogo.png";
import logo3 from "../assets/cockImage.webp";
import logo4 from "../assets/cockStudio2.webp";
import logo6 from "../assets/hblLogo2.png";
import logo7 from "../assets/tapalLogo2.png";
import logo8 from "../assets/alakarmLogo.png";
import logo9 from "../assets/ptcImage.png";

const Create = () => {
    const [hovered, setHovered] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

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

    // disable scroll when popup open
    // useEffect(() => {
    //     // [Urdu/English Comment] Scroll bar ko band karo agar form khula ho (Disable scroll bar if form is open)
    //     document.body.style.overflow = formOpen ? "hidden" : "auto";
    // }, [formOpen]);

    return (
        <>
            {/* MAIN SECTION */}
            <div className="px-4 sm:px-6 md:px-10 text-white bg-[#020202] py-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <h1
                        id="brands"
                        className="font-basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase"
                    >
                        We Work with
                    </h1>

                    <p className="font-uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl mt-4">
                        We’re here to turn your vision into powerful video.
                    </p>
                    <p className="font-uncut text-[#AEAEAE] text-base sm:text-lg md:text-xl">
                        Reach out, and let’s create something worth watching.
                    </p>

                    <div className="w-full py-10">
                        <Marquee speed={80} gradient={false}>
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

                    {/* REACH OUT BUTTON */}
                    <div className="flex justify-center pb-8 sm:pb-10">
                        <div
                            className="rounded-full border border-[#654AFF]"
                            style={{ width: "150px", height: "52px", padding: "2px" }}
                        >
                            <motion.div
                                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center font-uncut text-white text-sm sm:text-base md:text-lg font-semibold cursor-pointer"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onClick={() => setFormOpen(true)}
                                animate={{ scale: hovered ? 0.96 : 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                Reach Out
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

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

            {/* POPUP FORM - UPDATED WITH DARK GLASSMORPHISM EFFECT */}
            <AnimatePresence>
                {formOpen && (
                    <>
                        {/* Overlay: Changed to transparent background to allow backdrop-blur to work on main content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0 }} // Keep opacity 0 to see content behind
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/0 z-30" // [Urdu/English Comment] Glass effect ke liye overlay ko transparent rakha (Overlay kept transparent for glass effect)
                            onClick={() => setFormOpen(false)}
                        />

                        {/* Actual Form: Applied Dark Glass classes */}
                        <motion.div
                            initial={{ opacity: 0, y: -50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] 
                            max-w-md rounded-xl shadow-2xl px-5 py-6 z-40
                            **bg-white/10 backdrop-blur-xl border border-white/20 text-white**" // [Urdu/English Comment] Glass effect classes lagayi (Applied glass effect classes)
                        >
                            {/* Close Button */}
                            {/* <div className="flex justify-end mb-2">
                                <X
                                    className="cursor-pointer text-white/80 hover:text-white"
                                    onClick={() => setFormOpen(false)}
                                />
                            </div> */}

                            {/* FORM CONTENT (STYLES UPDATED FOR DARK GLASS THEME) */}
                            <form className="flex flex-col gap-3 font-uncut">
                                <div className="flex items-center gap-2 border border-white/30 rounded-lg p-2 bg-black/10">
                                    <UserRound size={18} className="text-white/70" />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full outline-none bg-transparent text-white placeholder-white/80" // [Urdu/English Comment] Placeholder aur text ko white kiya (Made placeholder and text white)
                                    />
                                </div>

                                <div className="flex items-center gap-2 border border-white/30 rounded-lg p-2 bg-black/10">
                                    <Mail size={18} className="text-white/70" />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full outline-none bg-transparent text-white placeholder-white/80"
                                    />
                                </div>

                                <div className="flex items-center gap-2 border border-white/30 rounded-lg py-2 pr-2 pl-4 bg-black/10">
                                    <textarea
                                        placeholder="Hey There..."
                                        className="w-full outline-none bg-transparent text-white resize-none placeholder-white/80"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#654AFF] text-white py-2 rounded-lg font-medium hover:bg-[#5434d8] transition-all duration-300 cursor-pointer
                                   flex items-center justify-center gap-2" // Added flex, items-center, justify-center, gap-2
                                >
                                    <Send size={18} /> {/* Added Send icon */}
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Create;