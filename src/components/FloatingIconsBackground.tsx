import { Plane, DollarSign, User, TrendingUp, Target, Briefcase, BarChart3, Handshake, Rocket, Award } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingIcon {
  id: number;
  Icon: React.ElementType;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
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

  useEffect(() => {
    // Generate random floating icons
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      const count = 20; // Number of floating icons

      for (let i = 0; i < count; i++) {
        newIcons.push({
          id: i,
          Icon: iconOptions[Math.floor(Math.random() * iconOptions.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 16 + Math.random() * 24, // 16-40px
          duration: 20 + Math.random() * 30, // 20-50s
          delay: Math.random() * -20, // Staggered start
          rotate: Math.random() * 360,
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute floating-icon-drift"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
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
      ))}
    </div>
  );
};

export default FloatingIconsBackground;