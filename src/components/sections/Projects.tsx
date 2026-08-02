import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Smart Attendance Monitoring System',
    description: 'A comprehensive attendance tracking system featuring six role-based dashboards (Admin, Principal, HOD, Faculty, Student, and Parent). Implemented day-wise attendance management, automated percentage calculation, and secure role-based authentication.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['MERN Stack', 'Role-based Auth', 'Analytics'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Food Delivery Web Application',
    description: 'A full-stack food delivery platform with user authentication, food browsing, cart management, and seamless order placement. Integrated Stripe for secure payments and built a comprehensive admin dashboard to manage inventory and users.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1000',
    tags: ['MERN Stack', 'Stripe Integration', 'Admin Dashboard'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'FiFinSaathi',
    description: 'A multilingual financial awareness platform designed for rural digital inclusion. Features include budget planning, scam awareness, government schemes, and EMI calculators, built during Hackmarathon 2026.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000',
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    github: '#',
    live: '#',
    caseStudy: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container with Tilt-like hover */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Decorative background blob */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"></div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold font-space text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="glass p-6 text-gray-300 leading-relaxed font-inter relative z-20">
                  {project.description}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 text-sm font-medium text-tertiary bg-tertiary/10 border border-tertiary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <a href={project.github} className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                    <FaGithub className="text-xl" /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 hover:text-secondary transition-colors font-medium">
                    <HiOutlineExternalLink className="text-xl" /> Live Demo
                  </a>
                  <a href={project.caseStudy} className="px-4 py-2 rounded-full border border-white/20 hover:border-white hover:bg-white/5 transition-all text-sm font-medium ml-auto">
                    Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
