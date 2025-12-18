import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X, UserRound, Mail, Send, Phone, Contact2 } from "lucide-react";
import logo from "../assets/fepoLogo3.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Home, Briefcase, UsersRound, BarChart2, Layers } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "About", icon: Home },
    { name: "Services", icon: Briefcase },
    { name: "Work", icon: UsersRound },
    { name: "Results", icon: BarChart2 },
    { name: "Brands", icon: Layers },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3, when: "afterChildren", staggerChildren: 0.04, staggerDirection: -1, ease: [0.16, 1, 0.3, 1] } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15, y: -8 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -15, y: -8, transition: { duration: 0.2 } },
  };

  const handleScroll = (id) => {
    const targetId = id.toLowerCase();

    if (location.pathname === "/") {
      // If on Home page, scroll immediately
      const element = document.getElementById(targetId);
      if (element) {
        gsap.to(window, { duration: 1.2, scrollTo: { y: element, offsetY: 80 }, ease: "power2.inOut" });
      }
    } else {
      // If NOT on Home page, navigate to Home and pass the targetId
      navigate("/", { state: { targetId: targetId } });
    }

    // Close menus
    setMenuOpen(false);
    setFormOpen(false);
  };

  return (
    <nav className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-4 relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10 sm:w-14 md:w-20" src={logo} alt="Logo" loading="lazy" />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 relative">
          {/* Get in Touch Button */}
          <div className="relative">
            <div className="rounded-full border border-[#654AFF]" style={{ width: "170px", height: "50px", padding: "3px" }}>
              <motion.div
                className="bg-[#654AFF] w-full h-full rounded-full font-uncut flex items-center gap-2 justify-center text-white text-sm sm:text-[17px] font-light cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{ scale: hovered ? 0.96 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => {
                  setFormOpen(!formOpen);
                  setMenuOpen(false);
                }}
              >
                <Contact2 size={18} />
                <p>Get in Touch</p>
              </motion.div>
            </div>

            {/* Form Dropdown */}
            <AnimatePresence>
              {formOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-30"
                    onClick={() => setFormOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full mt-2 -right-13 sm:right-0 w-80 sm:w-92 rounded-xl shadow-2xl px-5 py-5 z-40
                                bg-white/10 backdrop-blur-xl border border-white/20 text-white"
                  >
                    <form className="flex flex-col gap-3 font-uncut">
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
                          placeholder="Hey there..."
                          className="w-full outline-none bg-transparent text-white resize-none placeholder-white/80"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#654AFF] text-white py-2 rounded-lg font-medium hover:bg-[#5434d8] transition-all duration-300 cursor-pointer
                                   flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Plus Icon */}
          <motion.div
            className="bg-[#654AFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-50"
            onClick={() => {
              if (!formOpen) setMenuOpen(!menuOpen);
              setFormOpen(false);
            }}
            style={{ pointerEvents: formOpen ? "none" : "auto" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: menuOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              {menuOpen ? <Minus size={18} /> : <Plus size={18} />}
            </motion.div>
          </motion.div>


          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-20"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-0 mt-2 w-52 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border-2 border-[#654AFF] z-40"
                >
                  <div className="p-2">
                    {menuItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          variants={itemVariants}
                          className="relative"
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <motion.div
                            className="px-5 py-4 flex items-center font-uncut gap-2 cursor-pointer text-black text-xs sm:text-[17px] font-bold rounded-xl relative overflow-hidden"
                            onClick={() => handleScroll(item.name)}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-[#654AFF]/10 rounded-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: hoveredItem === index ? 1 : 0, scale: hoveredItem === index ? 1 : 0.8 }}
                              transition={{ duration: 0.3 }}
                            />
                            <IconComponent size={18} className="relative z-10" />
                            <span className="relative z-10">{item.name}</span>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <motion.div className="h-1 bg-[#654AFF]" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;