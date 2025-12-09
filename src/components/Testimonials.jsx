// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import testi1 from "../assets/testi1.jpg";
// import testi2 from "../assets/testi2.jpg";

// const testimonials = [
//     {
//         name: "Sikandar Ali",
//         image:
//             testi1,
//         text: "Blown away by the entire (FEPO's) team on this (CS Anthem Music Video). Shahrukh killed it. FEPO FOREVER!",
//     },
//     {
//         name: "Adnan Malik",
//         image:
//             testi2,
//         text: "Amazing work Shahrukh and congratulations on creating this masterpiece! - on Why Not Meri Jaan - Young Stunners",
//     },
// ];

// const Testimonials = () => {
//     return (
//         <div className="bg-[#020202] text-white pt-10 sm:pt-10 pb-20 px-4 sm:px-8 md:px-10">
//             {/* Section Title */}
//             <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
//                 <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
//                     Real
//                 </h1>
//                 <h1 className="basement text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none uppercase text-center">
//                     Results
//                 </h1>
//             </div>

//             {/* Swiper Slider */}
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 4000, disableOnInteraction: false }}
//                 loop={true}
//                 className="max-w-7xl mx-auto bg-[#1B1E26] rounded-2xl sm:rounded-3xl"
//             >
//                 {testimonials.map((t, i) => (
//                     <SwiperSlide key={i}>
//                         <div className="flex flex-col items-center text-center px-4 sm:px-6 py-16 sm:py-24 md:py-28 lg:py-36">
//                             <img
//                                 src={t.image}
//                                 alt={t.name}
//                                 className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-2 border-[#202430] shadow-md"
//                             />
//                             <h3 className="mt-4 text-lg sm:text-xl md:text-2xl basement">
//                                 {t.name}
//                             </h3>
//                             <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 uncut max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
//                                 "{t.text}"
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Testimonials;


import React from "react";
import testi1 from "../assets/testi1.jpg";
import testi2 from "../assets/testi2.jpg";

const testimonials = [
    {
        name: "Sikandar Ali",
        image: testi1,
        text: "Blown away by the entire (FEPO's) team on this (CS Anthem Music Video). Shahrukh killed it. FEPO FOREVER!",
    },
    {
        name: "Adnan Malik",
        image: testi2,
        text: "Amazing work Shahrukh and congratulations on creating this masterpiece! - on Why Not Meri Jaan - Young Stunners",
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

            {/* Grid Testimonials */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-[#1B1E26] rounded-2xl sm:rounded-3xl p-10 flex flex-col items-center text-center"
                    >
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#202430] shadow-md"
                        />
                        <h3 className="mt-4 text-lg sm:text-xl md:text-2xl basement">
                            {t.name}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-300 uncut max-w-sm sm:max-w-md">
                            "{t.text}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
