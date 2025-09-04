import React, { useEffect, useState } from 'react';
import { CornerRightDown } from 'lucide-react';
import heroVideo1 from "../assets/hero1.jpg";
import heroVideo3 from "../assets/hero3.jpg";
import heroVideo4 from "../assets/hero4.jpg";
import heroVideo2 from "../assets/hero2.jpg";
import heroVideo5 from "../assets/hero5.jpg";
import heroVideo6 from "../assets/hero6.jpg";
import heroVideo7 from "../assets/hero7.png";
import heroVideo8 from "../assets/hero8.jpg";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4, heroVideo5, heroVideo6, heroVideo7, heroVideo8];

const HeroAno = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => prev + 90);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#020202] px-4 py-10 sm:py-16 relative h-[75vh] sm:h-[85vh] overflow-hidden flex flex-col">

            {/* Videos Layer */}
            <div className="relative flex items-center justify-center h-1/2 sm:h-2/3 w-full">
                {videos.map((video, index) => {
                    const rotate = angle + index * 90;
                    const scale = (Math.cos((rotate * Math.PI) / 180) + 1.5) / 1.7;
                    const zIndex = Math.round(scale * 10);

                    // Responsive distance
                    const distance = window.innerWidth < 640 ? 70 : window.innerWidth < 1024 ? 120 : 180;
                    const x = Math.sin((rotate * Math.PI) / 180) * distance;
                    const y = Math.cos((rotate * Math.PI) / 180) * 10;

                    return (
                        <img
                        loading='lazy'
                            key={index}
                            src={video}
                            className="absolute rounded-md sm:rounded-lg shadow-md"
                            style={{
                                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                                zIndex,
                                width: `clamp(70px, ${50 * scale}vw, 160px)`,
                                height: `clamp(50px, ${50 * scale}vw, 120px)`,
                                objectFit: "cover",
                                transition: "transform 0.8s, width 0.8s, height 0.8s",
                            }}
                        />
                    );
                })}
            </div>

            {/* Text Layer */}
            <div className="relative z-20 flex flex-col gap-4 items-center justify-center text-white pt-20 sm:pt-10 text-center">
                <h1 className="basement uppercase text-3xl sm:text-5xl md:text-6xl leading-0">Fepo</h1>
                <h1 className="basement uppercase text-3xl sm:text-5xl md:text-6xl">Studio&copy;</h1>

                <div className="flex gap-2 items-center uncut text-gray-500 text-sm sm:text-base">
                    <p>Scroll Down</p>
                    <CornerRightDown size={16} />
                </div>
            </div>
        </div>
    );
};

export default HeroAno;
