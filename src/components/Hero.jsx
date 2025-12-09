import React, { useEffect, useState, useRef } from 'react';
import { CornerRightDown } from 'lucide-react';
import { gsap } from 'gsap';

// Placeholder imports (Keep your original imports)
import heroVideo1 from "../assets/hero13.jpg";
import heroVideo3 from "../assets/hero19.jpg";
import heroVideo4 from "../assets/hero22.jpg";

const videos = [heroVideo1, heroVideo3, heroVideo4];
const NUM_ITEMS = videos.length;
const DEGREE_STEP = 360 / NUM_ITEMS;

// Configuration Constants
const SPEED_FACTOR = 0.2;
const DESKTOP_RADIUS = 400;
const MOBILE_RADIUS = 150;
const INITIAL_IMAGE_SIZE = { width: 380, height: 230 };

const Hero = () => {
  const imageRefs = useRef([]);
  const rotationAngleRef = useRef({ angle: 0 });
  const [radius, setRadius] = useState(DESKTOP_RADIUS);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? MOBILE_RADIUS : DESKTOP_RADIUS);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!imageRefs.current || imageRefs.current.length === 0) return;

    const updateElement = (el, degrees, r) => {
      const radian = (degrees * Math.PI) / 180;

      // Smooth Scale Calculation
      const scale = (Math.cos(radian) + 2.5) / 2;

      // Optimized zIndex:
      // We multiply by 100 to give more "depth steps" and prevent flickering 
      // when two items are very close in size.
      const zIndex = Math.round(scale * 100);

      const x = Math.sin(radian) * r;
      const y = 0;

      // OPTIMIZATION HERE:
      // 1. We removed 'width' and 'height' animation.
      // 2. We use pure transforms (x, y, scale).
      // 3. force3D: true pushes this to the GPU for butter-smooth rendering.
      gsap.set(el, {
        x: x,
        y: y,
        scale: scale,
        zIndex: zIndex,
        opacity: scale < 0.9 ? 0.6 : 1,
        force3D: true, // Crucial for smoothness
        overwrite: 'auto' // Prevents conflicts
      });
    };

    const updateCarousel = () => {
      const currentAngle = rotationAngleRef.current.angle;
      imageRefs.current.forEach((el, index) => {
        const itemAngle = currentAngle + index * DEGREE_STEP;
        updateElement(el, itemAngle, radius);
      });
    };

    // Initial positioning
    updateCarousel();

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(rotationAngleRef.current, {
      angle: `-=${360}`,
      duration: 360 / (DEGREE_STEP * SPEED_FACTOR),
      ease: "none",
      onUpdate: updateCarousel,
    });

    return () => {
      tl.kill();
    };

  }, [radius]);

  return (
    <section
      className="bg-[#020202] text-white h-screen px-10 relative overflow-hidden font-sans"
      // Added backface-visibility hidden to container to help browser rendering
      style={{ perspective: '1000px', backfaceVisibility: 'hidden' }}
    >
      <div
        className="absolute bottom-30 inset-0 flex items-center justify-center z-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {videos.map((video, index) => {
          return (
            <img
              loading='lazy'
              key={index}
              src={video}
              alt={`Hero ${index}`}
              ref={el => imageRefs.current[index] = el}
              className="absolute rounded-xl object-cover"
              style={{
                // FIX: Set fixed dimensions here instead of animating them
                width: `${INITIAL_IMAGE_SIZE.width}px`,
                height: `${INITIAL_IMAGE_SIZE.height}px`,
                willChange: 'transform, opacity', // Hint to browser
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                // Centering the transformation origin helps smoothness
                transformOrigin: 'center center'
              }}
            />
          );
        })}
      </div>

      <div className='flex flex-col items-center pt-36 relative z-10'>
        <h1 className='basement uppercase text-white text-[14vw] leading-36 text-center'>Fepo</h1>
      </div>

      <div className='flex items-center justify-center gap-2 pt-14 text-gray-500 relative z-10'>
        <p className='uncut'>Scroll Down</p>
        <p><CornerRightDown size={18} /></p>
      </div>
    </section>
  );
};

export default Hero;