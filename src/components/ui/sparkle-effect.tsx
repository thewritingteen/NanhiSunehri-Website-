"use client";

import { useEffect, useState } from 'react';

interface Sparkle {
  id: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

interface SparkleEffectProps {
  count?: number;
  className?: string;
}

export default function SparkleEffect({ count = 15, className = "" }: SparkleEffectProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }).map((_, i) => ({
      id: `sparkle-${Date.now()}-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 1, // duration between 1.5s and 2.5s
      size: 3 + Math.random() * 4, // size between 3px and 7px
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-primary/80 shadow-[0_0_10px_2px_hsla(var(--primary),0.6)] animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
