import { Plane, DollarSign, User, TrendingUp, Target, Briefcase, BarChart3, Handshake, Rocket, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface FloatingIcon {
  id: number;
  Icon: React.ElementType;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  parallaxSpeed: number; // Different speed for each icon
}

const iconOptions = [
  Plane,
  DollarSign,
  User,
  TrendingUp,
  Target,
  Briefcase,
  BarChart3,
  Handshake,
  Rocket,
  Award,
];

const FloatingIconsBackground = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Generate random floating icons
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      const count = 20;

      for (let i = 0; i < count; i++) {
        newIcons.push({
          id: i,
          Icon: iconOptions[Math.floor(Math.random() * iconOptions.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 16 + Math.random() * 24,
          duration: 20 + Math.random() * 30,
          delay: Math.random() * -20,
          rotate: Math.random() * 360,
          parallaxSpeed: 0.02 + Math.random() * 0.08, // 0.02 to 0.1 speed multiplier
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafRef.current = undefined;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {icons.map((icon) => {
        const parallaxY = scrollY * icon.parallaxSpeed;
        
        return (
          <div
            key={icon.id}
            className="absolute floating-icon-drift"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
              transform: `translateY(${parallaxY}px)`,
            }}
          >
            <icon.Icon
              className="text-foreground/[0.03] blur-[1px]"
              style={{
                width: icon.size,
                height: icon.size,
                transform: `rotate(${icon.rotate}deg)`,
              }}
              strokeWidth={1}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIconsBackground;