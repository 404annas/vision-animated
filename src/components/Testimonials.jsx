import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Ethan Cole",
        image:
            "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840f957f9769a64b56812dc_Warm%20and%20Stylish%20Latino%20with%20Beard.webp",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a malesuada tellus, consectetur convallis nibh.",
    },
    {
        name: "Maya Blake",
        image:
            "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840f957f9769a64b56812d0_Sunny%20Autumnal%20Elegance.webp",
        text: "Aenean elit velit, pharetra hendrerit laoreet quis, molestie eu mi. Nulla facilisi.",
    },
    {
        name: "Noah Bennett",
        image:
            "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840f957f9769a64b56812c4_Harmonious%20Purple%20Palette%20-%20Candid%20Gentleman%20Portrait.webp",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
        name: "Marcus Hale",
        image:
            "https://cdn.prod.website-files.com/683f6a1d3749cee9a45775ce/6840f957f9769a64b56812e8_Cheerful%20Curly-Haired%20Man%20in%20Tortoiseshell%20Glasses.webp",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-[#020202] text-white pt-10 sm:pt-10 pb-20 px-4 sm:px-8 md:px-10">
            {/* Section Title */}
            <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Real
                </h1>
                <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
                    Results
                </h1>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="max-w-7xl mx-auto bg-[#1B1E26] rounded-2xl sm:rounded-3xl"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col items-center text-center px-4 sm:px-6 py-16 sm:py-24 md:py-28 lg:py-36">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-2 border-[#202430] shadow-md object-cover"
                            />
                            <h3 className="mt-4 text-lg sm:text-xl md:text-2xl basement">
                                {t.name}
                            </h3>
                            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 uncut max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
                                "{t.text}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
