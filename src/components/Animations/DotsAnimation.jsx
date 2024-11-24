import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DotsAnimation = () => {
  const dotsRef = useRef(null);

  useEffect(() => {
    if (!dotsRef.current) return;

    const dots = dotsRef.current.children;

    const animateDots = () => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl.fromTo(
        dots,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "back.out(1.7)",
        }
      ).to(dots, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        delay: 0.5,
        stagger: 0.3,
      });
    };

    animateDots();
  }, []);

  return (
    <span ref={dotsRef} className="inline-block ml-1 text-4xl">
      <span className="inline-block">.</span>
      <span className="inline-block">.</span>
      <span className="inline-block">.</span>
    </span>
  );
};

export default DotsAnimation;
