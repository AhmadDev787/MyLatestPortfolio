"use client";

import { motion } from "framer-motion";
import {
  Code,
  Shield,
  Database,
  Globe,
  Cpu,
  Network,
  Terminal,
  Cloud,
} from "lucide-react";

const skills = [
  { name: "Web Development", icon: Globe },
  { name: "Cybersecurity", icon: Shield },
  { name: "Backend APIs", icon: Database },
  { name: "DevOps & Cloud", icon: Cloud },
  { name: "Networking", icon: Network },
  { name: "Programming", icon: Code },
  { name: "Automation", icon: Cpu },
  { name: "CLI Tools", icon: Terminal },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function AboutSkills() {
  return (
    <section className="relative bg-[#0B0F1A] text-[#E0E0E0] py-20 px-6 md:px-20 overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00D1B2]/10 via-transparent to-[#F4B400]/10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Side - About */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#00D1B2] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I’m a passionate developer & cybersecurity enthusiast with a broad
            skill set in modern web development, secure systems, and automation.
            I love creating efficient, scalable, and secure solutions tailored
            to client needs.
          </motion.p>
        </motion.div>

        {/* Right Side - Skills */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.15,
                  rotate: 3,
                  boxShadow: "0 0 20px #00D1B2",
                }}
                className="relative bg-[#111827] p-6 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-10 h-10 text-[#F4B400] mb-3" />
                </motion.div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
