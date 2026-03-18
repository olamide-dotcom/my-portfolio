import { useEffect, useState } from "react";

export default function useFadeIn(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // trigger only once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible ? "fade-in" : "";
}