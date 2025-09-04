import React from "react";
import { motion } from "framer-motion"

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.png";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.png";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";
import hero12 from "../assets/hero12.jpg";
import hero13 from "../assets/hero13.jpg";
import hero14 from "../assets/hero14.jpg";
import hero15 from "../assets/hero15.jpg";
import hero16 from "../assets/hero16.jpg";
import hero17 from "../assets/hero17.jpeg";
import hero18 from "../assets/hero18.jpg";
import hero19 from "../assets/hero19.jpg";
import hero20 from "../assets/hero20.jpg";
import hero21 from "../assets/hero21.jpg";
import hero22 from "../assets/hero22.jpg";

import { Link } from "react-router-dom";

const images = [
    { src: hero9, title: "HUSN-E-EID" },
    { src: hero1, title: "Tu jhoom" },
    { src: hero2, title: "Muaziz saarif" },
    { src: hero3, title: "Agay dekh" },
    { src: hero5, title: "Faltu pyar" },
    { src: hero6, title: "Hydr-dhanak" },
    { src: hero4, title: "Roop" },
    { src: hero10, title: "Phir milenge" },
    { src: hero11, title: "Peechay hut" },
    { src: hero12, title: "Turi jandi" },
    { src: hero8, title: "Vuse-Charge" },
    { src: hero13, title: "Velo aux 4" },
    { src: hero14, title: "Velo-tere naal" },
    { src: hero16, title: "Koi nahi like us" },
    { src: hero7, title: "Memories" },
    { src: hero15, title: "Blockbuster" },
    { src: hero17, title: "Velo" },
    { src: hero18, title: "Ye dunya" },
    { src: hero19, title: "Pasoori" },
    { src: hero20, title: "Sajan Das Na" },
    { src: hero21, title: "Sohna Tu" },
    { src: hero22, title: "Why Not" },
];

const Portfolio = () => {
    return (
        <div className="bg-[#020202] text-white  pt-16 px-6 md:px-12">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl basement uppercase tracking-wide">
                    Portfolio
                </h1>
                <p className="text-gray-400 mt-3 text-lg uncut">
                    A collection of work
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((item, index) => (
                    <Link
                        key={index}
                        className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        {/* Image */}
                        <div className="relative w-full h-64 overflow-hidden">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4 text-center">
                            <h2 className="text-lg basement uppercase">
                                {item.title}
                            </h2>
                        </div>
                    </Link>
                ))}
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

export default Portfolio;
