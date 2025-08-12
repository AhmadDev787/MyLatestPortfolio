"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  ShieldCheck,
  Brain,
  MonitorSmartphone,
  Rocket,
  GraduationCap,
  MapPin,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-[#00D1B2]" />,
      title: "Frontend Development",
      description:
        "Expert in crafting lightning-fast, responsive, and visually stunning UIs using React.js, Next.js, Tailwind CSS, DaisyUI, and Shadcn UI.",
    },
    {
      icon: <Server className="w-8 h-8 text-[#F4B400]" />,
      title: "Backend & Databases",
      description:
        "Building scalable APIs and real-time apps with Node.js, Express.js, Socket.io, and managing databases like MongoDB, MySQL, PostgreSQL, and Redis.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00D1B2]" />,
      title: "Cybersecurity",
      description:
        "Specialized in secure authentication, encryption, and shielding apps from XSS, CSRF, SQLi, DoS, and DDoS attacks.",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#F4B400]" />,
      title: "AI & Machine Learning",
      description:
        "Proficient in PyTorch, Python, Pandas, NumPy, and Scikit-learn for AI-driven solutions, deep learning, and data science.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-[#00D1B2]" />,
      title: "UI/UX & Animation",
      description:
        "Designing engaging user experiences in Figma, Photoshop, Canva with rich animations via GSAP.js & Framer Motion.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#F4B400]" />,
      title: "Digital Marketing",
      description:
        "Boosting growth through SEO, Meta Ads, Google Ads, and conversion-focused marketing strategies.",
    },
  ];

  return (
    <div className="bg-[#0B0F1A] text-[#E0E0E0] min-h-screen px-6 md:px-16 py-16">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-[#00D1B2]">Me</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          My name is{" "}
          <span className="text-[#F4B400] font-semibold">Ahmad Hassan</span>, a
          passionate full-stack web developer, AI engineer, and digital
          solutions expert from{" "}
          <span className="text-[#00D1B2] font-semibold">
            Sargodha, Pakistan
          </span>
          . I hold an{" "}
          <span className="text-[#00D1B2] font-semibold">
            Intermediate in Computer Science
          </span>{" "}
          and am a{" "}
          <span className="text-[#F4B400] font-semibold">
            Udemy Certified Web Developer
          </span>
          . With expertise across frontend, backend, DevOps, AI, and digital
          marketing — I create secure, high-performance, and scalable solutions
          from scratch to deployment.
        </p>
      </motion.div>

      {/* Personal Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: <MapPin className="w-6 h-6 text-[#00D1B2]" />,
            title: "Location",
            description: "Sargodha, Punjab, Pakistan",
          },
          {
            icon: <GraduationCap className="w-6 h-6 text-[#F4B400]" />,
            title: "Education",
            description: "Intermediate in Computer Science",
          },
          {
            icon: <Award className="w-6 h-6 text-[#00D1B2]" />,
            title: "Certifications",
            description: "Udemy Certified Web Developer",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-6 rounded-xl shadow-lg hover:shadow-[#00D1B2]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 max-w-4xl mx-auto text-center"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          I don’t just build applications — I craft{" "}
          <span className="text-[#F4B400] font-semibold">
            impactful digital experiences
          </span>{" "}
          that blend speed, security, and stunning design. Whether you’re
          launching a startup or scaling an enterprise, I’ll help you bring your
          vision to life with{" "}
          <span className="text-[#00D1B2] font-semibold">
            precision, creativity, and performance
          </span>
          .
        </p>
      </motion.div>
    </div>
  );
}
