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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // controls scroll length
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Video 1 animation
      tl.fromTo(
        video1Ref.current,
        { x: "-100%", y: "100%", opacity: 0, scale: 0.5 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      ).to(video1Ref.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.in",
      });

      // Video 2 animation
      tl.fromTo(
        video2Ref.current,
        { x: "100%", y: "100%", opacity: 0, scale: 0.5 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      ).to(video2Ref.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.in",
      });

      // Text content animation (only fade/scale in, no hiding)
      tl.fromTo(
        textRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Video 1 */}
      <video
        ref={video1Ref}
        src={video1}
        autoPlay
        muted
        loop
        className="absolute w-1/2 max-w-lg rounded-xl shadow-lg"
      />

      {/* Video 2 */}
      <video
        ref={video2Ref}
        src={video2}
        autoPlay
        muted
        loop
        className="absolute w-1/2 max-w-lg rounded-xl shadow-lg"
      />

      {/* Text Content (stays visible until section scrolls out) */}
      <div ref={textRef} className="absolute text-center px-4">
        <h1 className="basement text-4xl sm:text-6xl md:text-9xl leading-none uppercase text-center">
          Who
        </h1>
        <h1 className="basement text-4xl sm:text-6xl md:text-9xl leading-none uppercase text-center">
          We Are?
        </h1>
        <p className="uncut text-[#B0B0B0] pt-6 sm:pt-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          We craft visually striking stories that move people. Whether it’s a
          high-energy commercial, a cinematic brand film, or sleek social
          content, we bring ideas to life through dynamic video production and
          powerful storytelling.
        </p>

        {/* Button with Framer Motion hover */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <div
            className="rounded-full border border-[#654AFF]"
            style={{
              width: "140px",
              height: "50px",
              padding: "2px",
            }}
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
                  About Us
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
