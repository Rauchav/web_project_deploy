import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollAnimator() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.animateDelay;
            if (delay) entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Wait one frame after React commits the new page to the DOM
    const id = setTimeout(() => {
      document
        .querySelectorAll("[data-animate]:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollAnimator;
