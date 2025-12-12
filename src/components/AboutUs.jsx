import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Mail, MessageCircle, X, UserRound, Send } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);
  const [formOpen, setFormOpen] = useState(false); // popup form state
  const sectionRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const textRef = useRef(null);

  // Disable scrolling when popup is open
  // useEffect(() => {
  //   if (formOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [formOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // SETUP VIDEOS & TEXT
      gsap.set(video1Ref.current, { x: "-120vw", y: "10%", rotation: -10, opacity: 1, scale: 1 });
      gsap.set(video2Ref.current, { x: "120vw", y: "-10%", rotation: 10, opacity: 1, scale: 1 });
      gsap.set(textRef.current, { opacity: 0.5, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      // PHASE 1: ENTER
      tl.to(video1Ref.current, { x: "-20%", rotation: -5, duration: 2, ease: "power2.out" }, "enter")
        .to(video2Ref.current, { x: "20%", rotation: 5, duration: 2, ease: "power2.out" }, "enter")

        // PHASE 2: EXIT
        .to(video1Ref.current, { x: "-150%", y: "-120%", rotation: -30, opacity: 0, duration: 2, ease: "power2.in" }, "exit")
        .to(video2Ref.current, { x: "150%", y: "-120%", rotation: 30, opacity: 0, duration: 2, ease: "power2.in" }, "exit")
        .to(textRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, "exit-=1");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black w-full relative">
      <section
        ref={sectionRef}
        className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden"
        style={{ backfaceVisibility: "hidden" }}
        id="about" // Added ID for navigation if needed
      >
        {/* Videos */}
        <video
          ref={video1Ref}
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-[200px] md:w-[400px] h-[300px] md:h-[350px] object-cover rounded-3xl shadow-2xl z-20"
          style={{ left: '50%', top: '50%', transform: 'translate3d(-50%, -50%, 0)', willChange: 'transform' }}
        />
        <video
          ref={video2Ref}
          src={video2}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-[200px] md:w-[400px] h-[300px] md:h-[350px] object-cover rounded-3xl shadow-2xl z-20"
          style={{ left: '50%', top: '50%', transform: 'translate3d(-50%, -50%, 0)', willChange: 'transform' }}
        />

        {/* Text */}
        <div ref={textRef} className="absolute text-center px-4 z-10 w-full">
          <h1 className="basement text-5xl sm:text-7xl md:text-[9rem] leading-[0.9] uppercase text-center font-bold tracking-tighter">
            Who<br />We Are?
          </h1>
          <p className="uncut text-[#B0B0B0] pt-8 sm:pt-12 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            We craft visually striking stories that move people. Whether it’s a
            high-energy commercial, a cinematic brand film, or sleek social
            content, we bring ideas to life.
          </p>

          {/* Get in Touch Button */}
          <div className="flex justify-center mt-12">
            <div className="rounded-full border border-[#654AFF]" style={{ width: "160px", height: "50px", padding: "4px" }}>
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full flex items-center justify-center uncut text-white text-sm sm:text-[17px] font-light overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 0.96 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setFormOpen(true)}
              >
                Get in Touch
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form with Dark Glassmorphism Effect */}
      <AnimatePresence>
        {formOpen && (
          <>
            {/* Overlay: Changed to transparent to allow blur to see videos behind */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }} // Changed to 0 so videos are visible for backdrop-blur
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/0 z-30" // Completely transparent overlay
              onClick={() => setFormOpen(false)}
            />

            {/* Form Container: Applied Glassmorphism styling */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] 
              max-w-lg rounded-xl shadow-2xl px-5 py-6 z-40
              **bg-white/10 backdrop-blur-xl border border-white/20 text-white**" // Dark Glass classes
            >
              {/* Close */}
              {/* <div className="flex justify-end mb-2">
                <X className="cursor-pointer text-white/80 hover:text-white" onClick={() => setFormOpen(false)} />
              </div> */}

              {/* Form - Styling updated for dark glass theme */}
              <form className="flex flex-col gap-3 uncut">
                <div className="flex items-center gap-2 border border-white/30 rounded-lg p-2 bg-black/10">
                  <UserRound size={18} className="text-white/70" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full outline-none bg-transparent text-white placeholder-white/80"
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
                    rows={3}
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
    </div>
  );
};

export default AboutUs;