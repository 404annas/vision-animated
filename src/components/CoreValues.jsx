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
      const targets = cardRefs.current.filter(Boolean);

      ScrollTrigger.matchMedia({
        // 📱 Mobile (below sm ~ 640px)
        "(max-width: 639px)": () => {
          gsap.fromTo(
            targets,
            {
              x: (i) => (i < 2 ? 600 : -600),
              y: -500,
              z: -500,
              rotationY: (i) => (i < 2 ? 720 : -720),
              rotationX: 45,
              rotation: (i) => (i < 2 ? 15 : -15),
              scale: 0.3,
              opacity: 0,
              filter: "blur(20px)",
            },
            {
              x: 0,
              y: 0,
              z: 0,
              rotationY: 0,
              rotationX: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "-40%", // 👈 MOBILE START
                end: "25%",
                scrub: 5,
              },
            }
          );
        },

        // 💻 Tablet & Desktop (sm and above)
        "(min-width: 640px)": () => {
          gsap.fromTo(
            targets,
            {
              x: (i) => (i < 2 ? 600 : -600),
              y: -500,
              z: -500,
              rotationY: (i) => (i < 2 ? 720 : -720),
              rotationX: 45,
              rotation: (i) => (i < 2 ? 15 : -15),
              scale: 0.3,
              opacity: 0,
              filter: "blur(20px)",
            },
            {
              x: 0,
              y: 0,
              z: 0,
              rotationY: 0,
              rotationX: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "-20%", // 👈 DESKTOP START
                end: "25%",
                scrub: 5,
              },
            }
          );
        },
      });
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
      <div
        className="flex flex-col items-center justify-center text-center pt-0 sm:pt-10">
        <h1 id="services" className="font-basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
          What
        </h1>
        <h1 className="font-basement text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase">
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
              <h1 className="text-2xl sm:text-3xl leading-6 text-white font-basement uppercase">
                {card.title1}
              </h1>
              <h1 className="text-2xl sm:text-3xl text-white font-basement uppercase">
                {card.title2}
              </h1>
            </div>
            <p className="font-uncut text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;