import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import clsx from 'clsx';

interface ProfilePhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  shape?: 'circle' | 'rounded-rectangle';
}

export const ProfilePhoto = ({ className, size = 'md', shape = 'circle' }: ProfilePhotoProps) => {
  // Parallax effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  // Map mouse movement to slight rotation/translation
  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const mouseX = e.clientX - windowWidth / 2;
      const mouseY = e.clientY - windowHeight / 2;
      
      // Limit movement max bounds
      x.set(mouseX / 10);
      y.set(mouseY / 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Size mappings
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    hero: 'w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]',
  };

  // Shape mappings
  const shapeClasses = {
    circle: 'rounded-full',
    'rounded-rectangle': 'rounded-[3rem]', // 48px radius for large, scales nicely
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        perspective: 1000
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={clsx('relative z-10 group', sizeClasses[size], className)}
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full relative"
      >
        {/* Soft Background Ambient Glow */}
        <div className={clsx(
          "absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-tertiary opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-700",
          shapeClasses[shape]
        )}></div>

        {/* Glassmorphism Frame & Glowing Border */}
        <div className={clsx(
          "relative w-full h-full p-1.5 bg-gradient-to-tr from-primary/80 via-secondary/80 to-tertiary/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-shadow duration-500",
          shapeClasses[shape]
        )}>
          {/* Inner Image Container */}
          <div className={clsx(
            "w-full h-full overflow-hidden bg-bg-dark border-4 border-black/50 relative",
            shapeClasses[shape]
          )}>
            <img 
              src="/images/profile.jpg" 
              alt="Mahalakshmi K" 
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Subtle Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-inherit"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
