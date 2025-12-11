import React, { useEffect, useState, useRef } from 'react';
import { CornerRightDown } from 'lucide-react';
import { gsap } from 'gsap';

// IMAGES
import heroVideo1 from "../assets/hero13.jpg";
import heroVideo3 from "../assets/hero19.jpg";
import heroVideo4 from "../assets/hero22.jpg";

const videos = [heroVideo1, heroVideo3, heroVideo4];
const NUM_ITEMS = videos.length;
const DEGREE_STEP = 360 / NUM_ITEMS;

// CONFIG
const SPEED_FACTOR = 0.2;

// RADIUS per breakpoint
const RADII = {
    xs: 100,   // <480
    sm: 130,   // 480-639
    md: 160,   // 640-767
    tab: 200,  // 768-1023
};

// IMAGE SIZES per breakpoint
const IMAGE_SIZES = {
    xs: { width: 100, height: 80 },   // very small phones
    sm: { width: 150, height: 95 },   // normal phones
    md: { width: 180, height: 115 },  // big phones
    tab: { width: 220, height: 140 }, // tablets (still <lg)
};

const HeroAno = () => {

    const imageRefs = useRef([]);
    const rotationAngleRef = useRef({ angle: 0 });

    const [radius, setRadius] = useState(RADII.xs);
    const [imgSize, setImgSize] = useState(IMAGE_SIZES.xs);

    // RESPONSIVE SETTINGS
    useEffect(() => {
        const updateSize = () => {
            const w = window.innerWidth;

            if (w < 480) {
                setRadius(RADII.xs);
                setImgSize(IMAGE_SIZES.xs);
            }
            else if (w < 640) {
                setRadius(RADII.sm);
                setImgSize(IMAGE_SIZES.sm);
            }
            else if (w < 768) {
                setRadius(RADII.md);
                setImgSize(IMAGE_SIZES.md);
            }
            else {
                setRadius(RADII.tab);
                setImgSize(IMAGE_SIZES.tab);
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);

    }, []);

    useEffect(() => {
        if (!imageRefs.current.length) return;

        const updateElement = (el, degrees, r) => {
            const rad = (degrees * Math.PI) / 180;

            const scale = (Math.cos(rad) + 3.2) / 2;
            const zIndex = Math.round(scale * 100);

            const x = Math.sin(rad) * r;

            gsap.set(el, {
                x,
                y: 0,
                scale,
                zIndex,
                opacity: scale < 0.9 ? 0.55 : 1,
                force3D: true,
            });
        };

        const updateCarousel = () => {
            const curr = rotationAngleRef.current.angle;
            imageRefs.current.forEach((el, idx) => {
                const angle = curr + idx * DEGREE_STEP;
                updateElement(el, angle, radius);
            });
        };

        updateCarousel();

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(rotationAngleRef.current, {
            angle: `-=${360}`,
            duration: 360 / (DEGREE_STEP * SPEED_FACTOR),
            ease: "none",
            onUpdate: updateCarousel,
        });

        return () => tl.kill();
    }, [radius]);

    return (
        <div className="lg:hidden bg-[#020202] px-4 py-10 relative h-[85vh] overflow-hidden">

            {/* CAROUSEL */}
            <div
                className="absolute inset-0 flex items-center justify-center z-20 -mt-40"
                style={{ transformStyle: "preserve-3d" }}
            >
                {videos.map((video, i) => (
                    <img
                        key={i}
                        ref={(el) => (imageRefs.current[i] = el)}
                        src={video}
                        loading="lazy"
                        className="absolute rounded-xl object-cover"
                        style={{
                            width: `${imgSize.width}px`,
                            height: `${imgSize.height}px`,
                            willChange: "transform, opacity",
                            transformOrigin: "center center",
                            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
                        }}
                    />
                ))}
            </div>

            {/* TEXT */}
            <div className="relative z-10 flex flex-col items-center pt-80 sm:pt-40">
                <h1 className="basement uppercase text-white text-[18vw] sm:text-[20vw] leading-none">
                    Fepo
                </h1>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 relative z-10">
                <p className="uncut">Scroll Down</p>
                <CornerRightDown size={16} />
            </div>
        </div>
    );
};

export default HeroAno;
