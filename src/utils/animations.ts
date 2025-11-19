// Utility functions for animations

export const prefersReducedMotion = 
  typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

// IntersectionObserver reveal for cards and sections
export function initRevealOnScroll() {
  if (prefersReducedMotion) {
    // Instantly show all elements for reduced motion
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach(el => io.observe(el));
}

// SVG stroke reveal for flow diagrams
export function initSVGStrokeReveal() {
  const paths = Array.from(document.querySelectorAll('.flow-path')) as SVGPathElement[];
  
  paths.forEach(path => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
  });

  if (prefersReducedMotion) {
    // Instant reveal for reduced motion
    paths.forEach(p => p.classList.add('revealed'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paths = entry.target.querySelectorAll('.flow-path');
          paths.forEach((p, i) => {
            setTimeout(() => p.classList.add('revealed'), i * 140);
          });
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.process-flow').forEach(el => io.observe(el));
}

// Initialize all animations on page load
export function initAllAnimations() {
  if (typeof window === 'undefined') return;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initRevealOnScroll();
      initSVGStrokeReveal();
    });
  } else {
    initRevealOnScroll();
    initSVGStrokeReveal();
  }
}
