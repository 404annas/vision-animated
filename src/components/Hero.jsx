import React, { useEffect, useState } from 'react';
import { CornerRightDown } from 'lucide-react';
import heroVideo1 from "../assets/hero-video-1.mp4";
import heroVideo2 from "../assets/hero-video-2.mp4";
import heroVideo3 from "../assets/hero-video-3.mp4";
import heroVideo4 from "../assets/hero-video-4.mp4";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

const Hero = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 90);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#020202] text-white h-screen px-10 relative overflow-hidden">
      <div className="absolute bottom-20 inset-0 flex items-center justify-center">
        {videos.map((video, index) => {
          const rotate = angle + index * 90;
          const scale = (Math.cos((rotate * Math.PI) / 180) + 1.5) / 1.2;
          const zIndex = Math.round(scale * 10);

          const x = Math.sin((rotate * Math.PI) / 180) * 500;
          const y = Math.cos((rotate * Math.PI) / 180) * 0;

          return (
            <video
              key={index}
              src={video}
              autoPlay
              loop
              muted
              className="absolute rounded-xl"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                zIndex: zIndex,
                width: `${120 * scale}px`,
                height: `${100 * scale}px`,
                objectFit: 'cover',
                transition: 'transform 0.8s, width 0.8s, height 0.8s',
              }}
            />

          );
        })}
      </div>

      <div className='flex flex-col items-center pt-36 relative z-10'>
        <h1 className='basement uppercase text-white text-[14vw] leading-36 text-center'>Video</h1>
        <h1 className='basement uppercase text-white text-[14vw] leading-none text-center'>Studio&copy;</h1>
      </div>

      <div className='flex items-center justify-between relative z-10'>
        <p className='text-gray-500 uncut'>Since 2010</p>
        <p className='text-gray-500 uncut'>Los Angeles, CA</p>
      </div>
      <div className='flex items-center justify-center gap-2 pt-10 text-gray-500 relative z-10'>
        <p className='uncut'>Scroll Down</p>
        <p><CornerRightDown size={18} /></p>
      </div>
    </section>
  );
};

export default Hero;
