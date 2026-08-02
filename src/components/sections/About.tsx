import { motion } from 'framer-motion';
import { ProfilePhoto } from '../ui/ProfilePhoto';
import { HiOutlineAcademicCap, HiOutlineCodeBracket, HiOutlineLightBulb, HiOutlineTrophy } from 'react-icons/hi2';
import { AnimatedNumber } from '../ui/AnimatedNumber';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <HiOutlineAcademicCap />, label: 'Current CGPA', value: 8.5, suffix: '' },
    { icon: <HiOutlineCodeBracket />, label: 'Major Projects', value: 3, suffix: '+' },
    { icon: <HiOutlineLightBulb />, label: 'LeetCode Problems', value: 50, suffix: '+' },
    { icon: <HiOutlineTrophy />, label: 'Certifications', value: 3, suffix: '' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Photo and Signature */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center justify-center space-y-8"
          >
            <ProfilePhoto size="lg" shape="circle" />
            
            <div className="text-center">
              <div className="font-space text-2xl text-white mb-1 tracking-wider" style={{ fontFamily: "'Dancing Script', cursive, sans-serif" }}>
                Mahalakshmi K
              </div>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
          </motion.div>

          {/* Right: Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 glass p-8 md:p-12"
          >
            <h3 className="text-2xl text-secondary font-space mb-4">Career Objective</h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              As an aspiring Software Engineer and Full Stack Developer, I am passionate about building scalable, 
              beautiful, and user-focused web applications. I strive to leverage modern technologies to solve 
              real-world problems and deliver exceptional digital experiences. My goal is to continuously learn, 
              innovate, and contribute to impactful projects that make a difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" ref={ref}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl text-tertiary mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold font-space text-white flex items-center">
                    <AnimatedNumber 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0} 
                      inView={inView} 
                    />
                    <span className="text-primary ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2 text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
