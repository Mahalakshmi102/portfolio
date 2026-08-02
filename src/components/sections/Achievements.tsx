import { motion } from 'framer-motion';
import { HiOutlineTrophy, HiOutlineCheckBadge, HiOutlineStar } from 'react-icons/hi2';
import { AnimatedNumber } from '../ui/AnimatedNumber';
import { useInView } from 'react-intersection-observer';

const achievementsData = [
  {
    icon: <HiOutlineCheckBadge />,
    title: 'Responsive Web Design',
    description: 'Certification earned from freeCodeCamp.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <HiOutlineCheckBadge />,
    title: 'Design Fundamentals',
    description: 'Certification earned from Coursera.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: <HiOutlineCheckBadge />,
    title: 'JavaScript Fundamentals',
    description: 'Certification earned from Great Stack.',
    color: 'from-primary to-secondary'
  }
];

export const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        {/* Big Numbers / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" ref={ref}>
          {[
            { value: 50, label: 'LeetCode Solved', suffix: '+' },
            { value: 3, label: 'Certifications', suffix: '' },
            { value: 1, label: 'Hackathons', suffix: '' },
            { value: 3, label: 'Languages', suffix: '' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              className="glass p-6 text-center group hover:bg-white/5 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold font-space text-gradient mb-2">
                <AnimatedNumber end={stat.value} duration={2.5} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-[1px] rounded-3xl overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative h-full glass p-8 rounded-[23px] bg-bg-dark/90 group-hover:bg-bg-dark/70 transition-colors z-10 flex flex-col items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-space text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
