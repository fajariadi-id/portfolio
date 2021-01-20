import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const h1Animation = (trigger, x, y) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom-=150',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
    defaults: { duration: 1, opacity: 0, ease: 'power3.out' },
  });

  timeline.from(`${trigger} hr`, { x: x }).from(`${trigger} h1`, { y: y }, 0.2);
};

export const h2Animation = (trigger, x, y) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom-=150',
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    defaults: { duration: 1, opacity: 0, ease: 'power3.out' },
  });

  timeline.from(`${trigger} hr`, { x: x }).from(`${trigger} h2`, { y: y }, 0.2);
};

export const gsapFrom = (
  selector,
  x,
  y,
  trigger,
  delay,
  stagger = null,
  duration = 1
) => {
  gsap.from(selector, {
    x: x,
    y: y,
    duration: duration,
    delay: delay,
    opacity: 0,
    stagger: stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom-=150',
      toggleActions: 'play none none reverse',
    },
  });
};
