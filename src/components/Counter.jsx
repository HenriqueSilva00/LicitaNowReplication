import { useEffect, useRef, useState } from "react";

export default function Counter({ end = 0, duration = 800, suffix = "+" }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const startValue = 0;
    const endValue = Number(end) || 0;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);

      const current = Math.floor(
        startValue + (endValue - startValue) * progress
      );
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
