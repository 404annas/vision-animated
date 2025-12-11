import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. SETUP
      gsap.set(video1Ref.current, {
        x: "-120vw",
        y: "10%",
        rotation: -10,
        opacity: 1,
        scale: 1
      });

      gsap.set(video2Ref.current, {
        x: "120vw",
        y: "-10%",
        rotation: 10,
        opacity: 1,
        scale: 1
      });

      gsap.set(textRef.current, { opacity: 0.5, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,

          // --- FIX 1: PREVENT GLITCHING ---
          // anticipates the pin 1 tick early to prevent "jumping"
          anticipatePin: 1,
          // Forces the animation to complete if user scrolls insanely fast
          fastScrollEnd: true,
          // Prevents calculation overlaps
          preventOverlaps: true,
        },
      });

      // --- PHASE 1: ENTER ---
      tl.to(video1Ref.current, {
        x: "-20%",
        rotation: -5,
        duration: 2,
        ease: "power2.out",
      }, "enter")
        .to(video2Ref.current, {
          x: "20%",
          rotation: 5,
          duration: 2,
          ease: "power2.out",
        }, "enter");

      // --- PHASE 2: REVEAL ---
      tl.to(video1Ref.current, {
        x: "-150%",
        y: "-120%",
        rotation: -30,
        opacity: 0,
        duration: 2,
        ease: "power2.in"
      }, "exit")
        .to(video2Ref.current, {
          x: "150%",
          y: "-120%",
          rotation: 30,
          opacity: 0,
          duration: 2,
          ease: "power2.in"
        }, "exit")

        .to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
        }, "exit-=1");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // FIX 2: Added -z-10 bg-black wrapper to ensure if pinning lags, 
    // the user sees black (not white)
    <div className="bg-black w-full relative">
      <section
        ref={sectionRef}
        className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"
        // FIX 3: backface-visibility helps browser rendering performance
        style={{ backfaceVisibility: "hidden" }}
      >

        <video
          ref={video1Ref}
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-[200px] md:w-[400px] h-[300px] object-cover rounded-3xl shadow-2xl z-20"
          style={{
            left: '50%',
            top: '50%',
            // We use translate3d instead of translate to force GPU hardware acceleration
            transform: 'translate3d(-50%, -50%, 0)',
            willChange: 'transform'
          }}
        />

        <video
          ref={video2Ref}
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-[200px] md:w-[400px] h-[300px] object-cover rounded-3xl shadow-2xl z-20"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
            willChange: 'transform'
          }}
        />

        {/* TEXT */}
        <div ref={textRef} className="absolute text-center px-4 z-10 w-full">
          <h1 className="basement text-5xl sm:text-7xl md:text-[9rem] leading-[0.9] uppercase text-center font-bold tracking-tighter">
            Who<br />We Are?
          </h1>

          <p className="uncut text-[#B0B0B0] pt-8 sm:pt-12 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            We craft visually striking stories that move people. Whether it’s a
            high-energy commercial, a cinematic brand film, or sleek social
            content, we bring ideas to life.
          </p>

          {/* Button */}
          <div className="flex justify-center mt-12">
            <div
              className="rounded-full border border-[#654AFF]"
              style={{ width: "160px", height: "50px", padding: "2px" }}
            >
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-[17px] font-light overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 0.96 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key="about"
                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    Get in Touch
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>

      </section>
      <div className="flex justify-center pb-20 px-4">
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

export default AboutUs;