import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  decimals?: number;
  inView?: boolean;
}

export const AnimatedNumber = ({ end, duration = 2.5, decimals = 0, inView = true }: AnimatedNumberProps) => {
  const springValue = useSpring(0, {
    duration: duration * 1000, // framer-motion springs use ms for duration
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (current) => 
    current.toFixed(decimals)
  );

  useEffect(() => {
    if (inView) {
      springValue.set(end);
    } else {
      springValue.set(0);
    }
  }, [inView, end, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};
