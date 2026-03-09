"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Cpu,
  GitBranch,
  ShieldCheck,
  Cloud,
  Award,
  MapPin,
} from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const techBadges = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "DaisyUI",
  "Shadcn UI",
  "Node.js",
  "Express",
  "Socket.io",
  "N8N",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Nginx",
  "Linux",
  "AWS",
  "Git",
  "Prometheus",
  "Grafana",
  "Loki",
  "GitHub Actions",
  "Python",
  "Figma",
  "Photoshop",
  "Canva",
  "CapCut",
  "SEO",
  "Meta Ads",
  "Google Ads",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-[#E0E0E0] px-6 md:px-12 lg:px-24 py-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Skills & Expertise
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Comprehensive overview of technical skills, security-first practices,
          tools, and real projects that showcase production-ready solutions.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#00D1B2]" /> Nocera Inferiore,
            Italy
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#F4B400]" /> Udemy — Certified Web
            Dev
          </span>
        </div>
      </motion.header>

      {/* Summary */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          className="md:col-span-1 bg-[#0f1720] border border-[#1f2937] p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#00D1B2] mb-3">
            Professional Summary
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ahmad Hassan — full-stack developer & digital solutions architect
            combining modern web stacks, DevOps practices and AI capabilities to
            deliver secure, scalable and user-centered applications.
          </p>
        </motion.div>

        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          className="col-span-2 bg-gradient-to-br from-[#071016] to-[#051017] border border-[#102027] p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-semibold text-[#00D1B2] mb-3">
            Core Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Capability
              icon={<Monitor className="w-6 h-6 text-[#F4B400]" />}
              title="Frontend"
              text="React, Next.js, Tailwind, DaisyUI, Shadcn UI — responsive, accessible, fast UIs."
            />
            <Capability
              icon={<Server className="w-6 h-6 text-[#00D1B2]" />}
              title="Backend & Real-time"
              text="Node.js, Express, Socket.io — robust APIs and real-time features."
            />
            <Capability
              icon={<Database className="w-6 h-6 text-[#F4B400]" />}
              title="Databases"
              text="MongoDB, PostgreSQL, MySQL, Redis — reliable storage & caching."
            />
            <Capability
              icon={<Cloud className="w-6 h-6 text-[#00D1B2]" />}
              title="DevOps & Infra"
              text="Linux, Docker, Nginx, AWS, GitHub Actions — automated, scalable deployments."
            />
          </div>
        </motion.div>
      </section>

      {/* Security Section */}
      <SectionCard
        icon={<ShieldCheck className="w-8 h-8 text-[#00D1B2]" />}
        title="Security & Best Practices"
        text="I emphasize defensive, production-grade security integrated into every stage of development, including authentication, encryption, and attack prevention."
      >
        {/* security details grid */}
      </SectionCard>

      {/* Technical Stack */}
      <SectionCard
        icon={<Code2 className="w-8 h-8 text-[#F4B400]" />}
        title="Technical Stack"
        text="Complete list of tools & frameworks I use regularly:"
      >
        <div className="flex flex-wrap gap-3">
          {techBadges.map((t) => (
            <span
              key={t}
              className="text-xs md:text-sm bg-[#0f1720] border border-[#1f2937] px-3 py-2 rounded-full text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}

function Capability({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-300">{text}</p>
      </div>
    </div>
  );
}

function SectionCard({ icon, title, text, children }) {
  return (
    <motion.article
      variants={card}
      initial="hidden"
      whileInView="show"
      className="bg-[#071017] border border-[#102027] rounded-2xl p-6 mb-6 shadow-lg"
    >
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 mt-2">{text}</p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </motion.article>
  );
}
