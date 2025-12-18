import React from "react";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Imported FaWhatsapp icon

const FloatingCTA = () => {
    // [Urdu/English Comment] Phone number jisko wa.me link mein use karna hai. (Phone number to be used in the wa.me link.)
    const phoneNumber = "923338805362"; // Number without +, spaces, or dashes

    return (
        <div
            // [Urdu/English Comment] CTA buttons ko neeche daayein kone mein fix kiya (Fixed CTA buttons to the bottom right corner)
            className="fixed bottom-4 right-4 z-50 flex flex-col gap-2" // Changed gap to gap-3 for better spacing
            style={{ pointerEvents: "auto" }}
        >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8">
                <div className="footer-item bg-[#020202] border border-[#4D4944] hover:border-[#67635E] text-white p-3.5 rounded-full cursor-pointer">
                    <span>
                        <a href="https://www.instagram.com/f_e_p_o_/">
                            <Instagram size={20} />
                        </a>
                    </span>

                    <span>
                        <a href="https://www.instagram.com/f_e_p_o_/">
                            <Instagram size={20} />
                        </a>
                    </span>
                </div>
            </div>

            {/* MAIL BUTTON (Email button) */}
            <a
                href="mailto:yourmail@gmail.com"
                className="w-12 h-12 bg-[#654AFF] hover:bg-[#523ad8] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
            >
                <Mail size={22} />
            </a>

            {/* WHATSAPP BUTTON (WhatsApp button) */}
            <a
                // [Urdu/English Comment] wa.me link structure (The wa.me link structure)
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer" // Changed color to WhatsApp green
            >
                <FaWhatsapp size={26} /> {/* Replaced Phone icon with FaWhatsapp */}
            </a>
        </div>
    );
};

export default FloatingCTA;