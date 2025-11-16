import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 1,
  className = ""
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationProps = {};

    switch (animation) {
      case "fadeIn":
        animationProps = {
          opacity: 0,
          y: 30,
        };
        break;
      case "slideInLeft":
        animationProps = {
          opacity: 0,
          x: -100,
        };
        break;
      case "slideInRight":
        animationProps = {
          opacity: 0,
          x: 100,
        };
        break;
      case "slideInUp":
        animationProps = {
          opacity: 0,
          y: 100,
        };
        break;
      case "slideInDown":
        animationProps = {
          opacity: 0,
          y: -100,
        };
        break;
      case "scaleIn":
        animationProps = {
          opacity: 0,
          scale: 0.8,
        };
        break;
      default:
        animationProps = {
          opacity: 0,
          y: 30,
        };
    }

    gsap.set(element, animationProps);

    const animation = gsap.to(element, {
      ...animationProps,
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
