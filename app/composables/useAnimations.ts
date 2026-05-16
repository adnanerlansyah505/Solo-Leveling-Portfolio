import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'

export const useGsapAnimation = () => {
  const animateIn = (element: HTMLElement | null, delay = 0) => {
    if (!element) return
    
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        ease: 'power2.out'
      }
    )
  }

  const animateSkillBar = (element: HTMLElement | null, targetValue: number) => {
    if (!element) return
    
    gsap.to(element, {
      width: `${targetValue}%`,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.2
    })
  }

  const pulseGlow = (element: HTMLElement | null) => {
    if (!element) return
    
    gsap.to(element, {
      boxShadow: [
        '0 0 20px rgba(168, 85, 247, 0.4)',
        '0 0 40px rgba(168, 85, 247, 0.8)',
        '0 0 20px rgba(168, 85, 247, 0.4)'
      ],
      duration: 2,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }

  const floatingMotion = (element: HTMLElement | null) => {
    if (!element) return
    
    gsap.to(element, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }

  const glitchEffect = (element: HTMLElement | null) => {
    if (!element) return
    
    gsap.to(element, {
      x: () => gsap.utils.random(-5, 5),
      y: () => gsap.utils.random(-5, 5),
      duration: 0.1,
      repeat: 3,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(element, { x: 0, y: 0, duration: 0.1 })
      }
    })
  }

  const staggerAnimation = (elements: HTMLElement[], stagger = 0.1) => {
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: 'power2.out'
      }
    )
  }

  return {
    animateIn,
    animateSkillBar,
    pulseGlow,
    floatingMotion,
    glitchEffect,
    staggerAnimation
  }
}

export const useScrollAnimation = () => {
  const observeElements = (selector: string, callback: (el: Element) => void) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  }

  return { observeElements }
}
