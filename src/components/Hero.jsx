import React, { useEffect, useState } from 'react';
import { CornerRightDown } from 'lucide-react';

// NOTE: Replace these placeholder URLs with your actual imports
// Apne assets wapis import karein yahan:
import heroVideo1 from "../assets/hero13.jpg";
import heroVideo3 from "../assets/hero19.jpg";
import heroVideo4 from "../assets/hero22.jpg";

const videos = [heroVideo1, heroVideo3, heroVideo4];

const Hero = () => {
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(600);

  useEffect(() => {
    // Screen size ke mutabiq radius adjust karein
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 220 : 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Har 3 second mein 120 degrees ghumaen
    const interval = setInterval(() => {
      setAngle(prev => prev + 120);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-[#020202] text-white h-screen px-10 relative overflow-hidden font-sans" style={{ perspective: '1000px' }}>

      {/* 🟢 CHANGE 1 & 2: Images container ko high z-index (z-20) diya gaya hai. */}
      {/* Images container ko text container se ooper rakhne ke liye z-index barhaya gaya hai */}
      <div className="absolute bottom-20 inset-0 flex items-center justify-center z-20" style={{ transformStyle: 'preserve-3d' }}>
        {videos.map((video, index) => {
          const rotate = angle + index * 120;
          const radian = (rotate * Math.PI) / 180;
          const scale = (Math.cos(radian) + 2.8) / 2.1;

          // 🟢 CHANGE 3: Individual image zIndex ki base value barha di hai.
          // Taake yeh hamesha text se ooper rahein. (Text ka z-index ab kam hai ya default)
          const zIndex = Math.round(scale * 10) + 20;

          const x = Math.sin(radian) * radius;
          const y = Math.cos(radian) * 0;

          return (
            <img
              loading='lazy'
              key={index}
              src={video}
              alt={`Hero ${index}`}
              className="absolute rounded-xl object-cover"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                zIndex: zIndex,
                willChange: 'transform',
                width: `${200 * scale}px`,
                height: `${130 * scale}px`,
                objectFit: 'cover',
                transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), width 0.8s, height 0.7s',
                opacity: scale < 0.9 ? 0.7 : 1,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}
            />
          );
        })}
      </div>

      {/* 🔴 CHANGE 2: Text container se z-10 class hata di hai (ya isse z-index: 1 set kar diya hai) */}
      {/* Ab images (z-20) text se ooper nazar aayengi */}
      <div className='flex flex-col items-center pt-36 relative'>
        <h1 className='basement uppercase text-white text-[14vw] leading-36 text-center'>Fepo</h1>
        <h1 className='basement uppercase text-white text-[14vw] leading-none text-center'>Studio&copy;</h1>
      </div>

      <div className='flex items-center justify-center gap-2 pt-14 text-gray-500 relative'>
        <p className='uncut'>Scroll Down</p>
        <p><CornerRightDown size={18} /></p>
      </div>
    </section>
  );
};

export default Hero;