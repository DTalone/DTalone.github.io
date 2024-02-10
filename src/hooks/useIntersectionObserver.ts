import { useState, useEffect, useRef } from "react";
import useScrollPosition from "./useScrollPosition";

const useIntersectionObserver = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        } else {
          setInView(false);
        }
      }
    }, {});
    if (ref) {
      observer.observe(ref.current!);
      return () => {
        observer.disconnect();
      };
    }
  }, [scrollPosition]);

  return { ref, inView };
};

export default useIntersectionObserver;
