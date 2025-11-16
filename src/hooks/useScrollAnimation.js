import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animation = 'fadeIn', options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeIn: {
        opacity: 0,
        y: 50,
      },
      slideInLeft: {
        opacity: 0,
        x: -100,
      },
      slideInRight: {
        opacity: 0,
        x: 100,
      },
      slideInUp: {
        opacity: 0,
        y: 100,
      },
      slideInDown: {
        opacity: 0,
        y: -100,
      },
      scaleIn: {
        opacity: 0,
        scale: 0.8,
      },
      rotateIn: {
        opacity: 0,
        rotation: -45,
        scale: 0.8,
      },
    };

    const fromVars = animations[animation] || animations.fadeIn;

    gsap.from(element, {
      ...fromVars,
      duration: options.duration || 1,
      delay: options.delay || 0,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        toggleActions: options.toggleActions || 'play none none reverse',
        ...options.scrollTrigger,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, options]);

  return elementRef;
};

export const useStaggerAnimation = (animation = 'fadeIn', options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    if (!children.length) return;

    const animations = {
      fadeIn: {
        opacity: 0,
        y: 50,
      },
      slideInLeft: {
        opacity: 0,
        x: -100,
      },
      slideInRight: {
        opacity: 0,
        x: 100,
      },
      slideInUp: {
        opacity: 0,
        y: 100,
      },
    };

    const fromVars = animations[animation] || animations.fadeIn;

    gsap.from(children, {
      ...fromVars,
      duration: options.duration || 0.8,
      stagger: options.stagger || 0.15,
      ease: options.ease || 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: options.start || 'top 80%',
        toggleActions: options.toggleActions || 'play none none reverse',
        ...options.scrollTrigger,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [animation, options]);

  return containerRef;
};
