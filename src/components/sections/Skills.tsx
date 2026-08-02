import { motion } from 'framer-motion';
import { 
  SiJavascript, SiPython, SiC, SiHtml5, SiCss, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 90 },
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'C', icon: <SiC />, level: 80 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS', icon: <SiCss />, level: 90 },
      { name: 'React', icon: <SiReact />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 80 },
      { name: 'Express.js', icon: <SiExpress />, level: 80 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'Git', icon: <SiGit />, level: 90 },
      { name: 'GitHub', icon: <SiGithub />, level: 90 },
      { name: 'VS Code', icon: <VscVscode />, level: 95 },
      { name: 'Postman', icon: <SiPostman />, level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-tertiary/10 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="glass p-8 group hover:border-secondary/30 transition-colors"
            >
              <h3 className="text-2xl font-space text-secondary mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-gray-300 group-hover:text-primary transition-colors">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-200 font-inter">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400 tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + catIndex * 0.1, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
