import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after reaching 100%
          return 100;
        }
        return prev + 2; // Adjust speed as needed
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-dark"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-4xl font-space text-gradient mb-8 tracking-widest font-bold">
        MK
      </div>
      
      <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.1 }}
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-400 font-inter tabular-nums">
        {Math.round(progress)}%
      </div>
    </motion.div>
  );
};
