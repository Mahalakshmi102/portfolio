import { motion } from 'framer-motion';

const timelineData = [
  {
    type: 'education',
    date: '2024 - 2028',
    title: 'B.Tech in Information Technology',
    organization: 'Nehru Institute of Technology, Coimbatore',
    description: 'Current CGPA: 8.5/10. Specialized in software engineering, algorithms, and full-stack development.'
  },
  {
    type: 'education',
    date: '2022 - 2024',
    title: 'HSC & SSLC',
    organization: 'Government Higher Secondary School, Divansapudur, Pollachi',
    description: 'HSC: 79.3% | SSLC: 79.6%. Strong foundation in mathematics, physics, and computer science.'
  },
  {
    type: 'hackathon',
    date: '2026',
    title: 'Participant - Hackmarathon 2026',
    organization: 'FinSaathi Project',
    description: 'Developed FiFinSaathi, a multilingual financial awareness and digital inclusion platform for rural users, within a 24-hour hackathon.'
  }
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-dark border-2 border-secondary transform -translate-x-[6px] md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(0,212,255,0.5)] z-20"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass p-6 md:p-8 hover:border-primary/50 transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="inline-block px-3 py-1 bg-white/10 text-tertiary text-xs font-semibold rounded-full mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-space font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-md text-gray-400 mb-4">{item.organization}</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
