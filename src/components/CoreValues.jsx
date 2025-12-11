import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import who1 from "../assets/who1.png";
import who2 from "../assets/who2.png";
import who3 from "../assets/who3.png";
import who4 from "../assets/who4.png";

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      icon: who1,
      title1: "Video",
      title2: "Production",
      desc: "We create cinematic brand stories that connect emotionally with your audience, elevating your identity through high-impact visuals and thoughtful storytelling.",
    },
    {
      icon: who2,
      title1: "Video",
      title2: "Direction",
      desc: "Our team captures key moments from your events and transforms them into compelling highlight reels that extend the experience and amplify engagement.",
    },
    {
      icon: who3,
      title1: "Video",
      title2: "Filming",
      desc: "Showcase your product’s features and benefits with clean, engaging demo videos that educate, inform, and convert viewers into customers.",
    },
    {
      icon: who4,
      title1: "Video",
      title2: "Entertain",
      desc: "We craft short-form, platform-optimized content designed to stop the scroll, spark interaction, and maximize reach across all major social media channels.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = cardRefs.current.filter((el) => el !== null);

      gsap.fromTo(
        targets,
        {
          // --- BOTTLE CAP SPIN LOGIC ---

          // 1. Position (Movement):
          // Still coming from sides (Cross effect)
          x: (index) => (index < 2 ? 600 : -600),
          // Falling from above
          y: -500,
          // Starting further back in Z-space (Depth)
          z: -500,

          // 2. The Spin (3D Rotation):
          // rotationY is the "Bottle Cap" spin (spinning around vertical axis)
          // We do 720 degrees (2 full spins) so it looks fast and circular
          rotationY: (index) => (index < 2 ? 720 : -720),

          // Slight tilt so it doesn't look like a flat paper
          rotationX: 45,
          // Slight clock-tilt for style
          rotation: (index) => (index < 2 ? 15 : -15),

          scale: 0.3,           // Start small
          opacity: 0,
          filter: "blur(20px)", // Motion blur
        },
        {
          x: 0,
          y: 0,
          z: 0,
          rotationY: 0,        // Finish facing forward
          rotationX: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",

          stagger: 0.15,
          ease: "power2.out",

          scrollTrigger: {
            trigger: containerRef.current,
            start: "-20%",  // Starts slightly earlier
            end: "30%",
            scrub: 5,        // Slightly heavier scrub for the spin weight
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#020202] text-white pb-20 px-4 sm:px-8 lg:px-6 min-h-screen overflow-hidden"
      // IMPORTANT: Perspective is required for the 3D 'Bottle Cap' spin to look real
      style={{ perspective: "2000px" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center pt-20">
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          What
        </h1>
        <h1 className="basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          We Do?
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 pt-16 sm:pt-24">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex flex-col items-start gap-6 sm:gap-8 bg-[#1B1E26] px-4 sm:px-6 py-6 sm:py-10 rounded-3xl"
            style={{
              willChange: "transform, opacity, filter",
              // preserve-3d keeps the card solid during the 3D spin
              transformStyle: "preserve-3d",
              transformOrigin: "center center"
            }}
          >
            <img
              loading="lazy"
              className="w-10 sm:w-20 invert"
              src={card.icon}
              alt={`Icon ${index + 1}`}
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl leading-6 text-white basement uppercase">
                {card.title1}
              </h1>
              <h1 className="text-2xl sm:text-3xl text-white basement uppercase">
                {card.title2}
              </h1>
            </div>
            <p className="uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;