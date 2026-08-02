import { motion } from 'framer-motion';
import { ProfilePhoto } from '../ui/ProfilePhoto';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex flex-col items-start gap-4">
              <ProfilePhoto size="sm" shape="circle" />
              <div>
                <h3 className="text-2xl font-space font-bold text-white">Let's build something amazing together.</h3>
                <p className="text-gray-400 mt-2">Feel free to reach out for collaborations or just a friendly hello!</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <a href="mailto:maha.kshmi012@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <HiOutlineMail className="text-2xl" />
                </div>
                <span className="font-inter">maha.kshmi012@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-all">
                  <HiOutlinePhone className="text-2xl text-secondary group-hover:text-secondary" />
                </div>
                <span className="font-inter">+91 8590637011</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tertiary/20 group-hover:border-tertiary/50 transition-all">
                  <HiOutlineLocationMarker className="text-2xl text-tertiary group-hover:text-tertiary" />
                </div>
                <span className="font-inter">Coimbatore, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Mahalakshmi102" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all text-white">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/maha-lakshmi-k" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all text-white">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10"
          >
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Project Collaboration"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(127,90,240,0.3)]"
              >
                Send Message <HiPaperAirplane className="rotate-90" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
