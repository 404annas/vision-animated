import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollManager = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if we have a targetId passed from the Navbar/Footer
        if (location.state && location.state.targetId) {
            const { targetId } = location.state;
            const element = document.getElementById(targetId);

            if (element) {
                // Delay slightly to allow the Home page DOM to fully render
                setTimeout(() => {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: { y: element, offsetY: 80 },
                        ease: "power2.inOut",
                    });
                }, 100);

                // Clear the state so it doesn't scroll again on refresh
                window.history.replaceState({}, document.title);
            }
        } else if (!location.state) {
            // If simply navigating to a new page without specific ID, scroll to top
            window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
};

export default ScrollManager;