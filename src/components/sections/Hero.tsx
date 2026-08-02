import { motion } from 'framer-motion';
import { Typewriter } from '../ui/Typewriter';
import { Hero3D } from '../canvas/Hero3D';
import { HiDownload, HiArrowRight, HiChat } from 'react-icons/hi';
import { SiReact, SiMongodb } from 'react-icons/si';
import { FaJava, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { ProfilePhoto } from '../ui/ProfilePhoto';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-start space-y-6 bg-bg-dark/30 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl text-secondary font-inter">Hi,</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-space leading-tight">
              I'm <br />
              <span className="text-gradient">Mahalakshmi K</span>
            </h1>
          </div>

          <div className="text-2xl md:text-3xl font-space h-10 text-gray-300">
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Stack Developer',
                'Java Developer',
                'Problem Solver',
                'Software Engineer',
                'Tech Enthusiast'
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBeforeDelete={2000}
            />
          </div>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed font-inter">
            I build scalable, beautiful and user-focused web applications with modern technologies while solving real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(127,90,240,0.5)]"
            >
              <HiDownload className="text-xl" /> Download Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-secondary hover:bg-secondary/10 transition-all font-medium"
            >
              View Projects <HiArrowRight />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-tertiary hover:bg-tertiary/10 transition-all font-medium"
            >
              <HiChat /> Hire Me
            </a>
          </div>
        </motion.div>
        
        {/* Profile Photo & Floating Icons */}
        <div className="hidden lg:flex relative h-full w-full items-center justify-center">
          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[15%] left-[10%] z-20 bg-bg-dark/80 backdrop-blur-md p-4 rounded-full border border-secondary/30 shadow-[0_0_15px_rgba(0,212,255,0.2)] text-secondary text-3xl"
          >
            <SiReact />
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15], x: [-10, 10, -10], rotate: [0, -10, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[20%] right-[10%] z-20 bg-bg-dark/80 backdrop-blur-md p-4 rounded-full border border-tertiary/30 shadow-[0_0_15px_rgba(94,234,212,0.2)] text-tertiary text-3xl"
          >
            <FaJava />
          </motion.div>
          
          <motion.div 
            animate={{ y: [-20, 20, -20], x: [10, -10, 10] }} 
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[20%] left-[5%] z-20 bg-bg-dark/80 backdrop-blur-md p-4 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-500 text-3xl"
          >
            <FaNodeJs />
          </motion.div>
          
          <motion.div 
            animate={{ y: [20, -20, 20], rotate: [0, 15, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[15%] right-[15%] z-20 bg-bg-dark/80 backdrop-blur-md p-4 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(127,90,240,0.2)] text-primary text-3xl"
          >
            <SiMongodb />
          </motion.div>

          <motion.div 
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[50%] -left-[5%] z-20 bg-bg-dark/80 backdrop-blur-md p-3 rounded-full border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)] text-orange-500 text-2xl"
          >
            <FaGitAlt />
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }} 
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[60%] -right-[5%] z-20 bg-bg-dark/80 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white text-2xl"
          >
            <FaGithub />
          </motion.div>

          {/* Center Profile Photo */}
          <ProfilePhoto size="hero" shape="rounded-rectangle" />
        </div>
      </div>
    </section>
  );
};
