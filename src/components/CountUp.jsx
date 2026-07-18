import { useEffect, useRef, useState } from "react";

function CountUp({ to, prefix = "", duration = 900 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-out cubic so the counter slows at the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="home__customers-stats-number">
      {prefix}
      {value.toLocaleString("en-US")}
    </span>
  );
}

export default CountUp;
