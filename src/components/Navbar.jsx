import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Home, Briefcase, Users, BarChart2, Layers, Mail } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { name: "About", icon: Home },
    { name: "Services", icon: Briefcase },
    { name: "Work", icon: Users },
    { name: "Results", icon: BarChart2 },
    { name: "Brands", icon: Layers },
    { name: "Contact", icon: Mail },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.3, when: "afterChildren", staggerChildren: 0.04, staggerDirection: -1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15, y: -8 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -15, y: -8, transition: { duration: 0.2 } },
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      gsap.to(window, { duration: 1.2, scrollTo: { y: element, offsetY: 80 }, ease: "power2.inOut" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#020202] text-white px-4 sm:px-6 md:px-10 py-4 relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-10 sm:w-14 md:w-16" src={logo} alt="Logo" loading="lazy" />
          <motion.p
            className="bg-[#FF1F1F] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 relative">
          {/* Get in Touch Button */}
          <div className="rounded-full border border-[#654AFF]" style={{ width: "150px", height: "50px", padding: "2px" }}>
            <motion.div
              className="bg-[#654AFF] w-full h-full rounded-full uncut flex items-center justify-center text-white text-sm sm:text-[17px] font-light cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              animate={{ scale: hovered ? 0.96 : 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => handleScroll("Contact")}
            >
              Get in Touch
            </motion.div>
          </div>

          {/* Plus Icon */}
          <motion.div
            className="bg-[#654AFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {menuOpen ? <Minus size={18} /> : <Plus size={18} />}
            </motion.div>
          </motion.div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-30"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Menu */}
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-0 mt-4 w-52 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border-2 border-[#654AFF] z-40"
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
                            className="px-5 py-4 flex items-center uncut gap-2 cursor-pointer text-black text-xs sm:text-[17px] font-light rounded-xl relative overflow-hidden"
                            onClick={() => handleScroll(item.name)}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Hover background */}
                            <motion.div
                              className="absolute inset-0 bg-[#654AFF]/10 rounded-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: hoveredItem === index ? 1 : 0, scale: hoveredItem === index ? 1 : 0.8 }}
                              transition={{ duration: 0.3 }}
                            />

                            {/* Icon + Name */}
                            <IconComponent size={18} className="relative z-10" />
                            <span className="relative z-10">{item.name}</span>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Footer accent */}
                  <motion.div
                    className="h-1 bg-[#654AFF]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
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
