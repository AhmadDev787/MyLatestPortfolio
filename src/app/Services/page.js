"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Cpu,
  ShieldCheck,
  BarChart2,
  Monitor,
  Film,
  Cloud,
} from "lucide-react";

// Services page component for Next.js 15 (app router)
// Put this file at: app/services/page.jsx
// Requires: tailwindcss, framer-motion, lucide-react

const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code size={28} />,
    bullets: [
      "React.js & Next.js (App Router - Next 15)",
      "Tailwind CSS, DaisyUI, Shadcn UI",
      "Accessible & responsive UI, SEO-friendly",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Server size={28} />,
    bullets: [
      "Node.js, Express.js, REST APIs",
      "Socket.io for realtime apps",
      "Authentication, rate-limiting, secure endpoints",
    ],
  },
  {
    id: "database",
    title: "Databases & Caching",
    icon: <Database size={28} />,
    bullets: [
      "MongoDB (Mongoose), MySQL, PostgreSQL",
      "Redis for caching & session storage",
      "Schema design & migrations",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Hosting",
    icon: <Cloud size={28} />,
    bullets: [
      "Docker, Nginx, Linux server management",
      "CI/CD with GitHub Actions",
      "AWS & Serverless deployments",
    ],
  },
  {
    id: "security",
    title: "Application Security",
    icon: <ShieldCheck size={28} />,
    bullets: [
      "Secure auth flows, input validation",
      "XSS / CSRF / SQLi prevention",
      "HTTPS, SSL, firewall (Nginx) hardening",
    ],
  },
  {
    id: "ml",
    title: "AI & Chat Bots",
    icon: <Cpu size={28} />,
    bullets: [
      "Python, n8n, Langchain, Ai APIs",
      "Model prototyping & integration",
      "Chatbots Integration & Development",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: <BarChart2 size={28} />,
    bullets: [
      "Meta & Google Ads",
      "SEO strategy & analytics",
      "Conversion optimization",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
  hover: { scale: 1.03, y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.45)" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-[#0B0F1A] text-[#E0E0E0] py-16 px-6 md:px-12 lg:px-24">
      <section className="max-w-7xl mx-auto">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Professional Services — Full‑stack & AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-3xl text-lg text-[#C9D6D6]"
          >
            I build fast, secure, and beautiful web platforms — from frontend to
            infrastructure. Below are the core services I provide. If you want a
            tailored package, I can create a proposal and timeline.
          </motion.p>

          {/* <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#00D1B2]/10 px-3 py-1 text-[#00D1B2] text-sm font-medium">
              Primary: #00D1B2
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F4B400]/10 px-3 py-1 text-[#F4B400] text-sm font-medium">
              Accent: #F4B400
            </span>
          </div> */}
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              className="rounded-2xl border border-zinc-800/60 p-6 bg-gradient-to-b from-white/2 to-transparent"
              variants={cardVariants}
              whileHover="hover"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00))",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg p-3 bg-[#0F1724]/50 border border-zinc-800">
                    <div className="text-[#00D1B2]">{s.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#BFC9C9]">
                      {s.bullets[0]}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-[#C9D6D6]">
                {s.bullets.slice(1).map((b, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#F4B400]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="mt-6 flex items-center justify-between"
              >
                <span className="text-xs text-[#9FB2B2]">
                  Custom proposal & fixed-price options
                </span>
                <a
                  href="/Contact"
                  className="text-sm font-medium rounded-full px-3 py-1 border border-[#00D1B2] text-[#00D1B2]"
                >
                  Get a quote
                </a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.section className="mt-14 rounded-2xl border border-zinc-800 p-6 bg-gradient-to-b from-white/1 to-transparent">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-semibold">Why work with me?</h4>
              <p className="mt-2 text-[#BFC9C9] max-w-2xl">
                I deliver secure, production-ready systems with strong UX and
                monitoring. My stack spans frontend, backend, DevOps and AI — so
                you get a single, accountable developer who can deliver
                end-to-end.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/Contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#00D1B2] px-4 py-2 font-medium shadow-md"
              >
                Contact me
              </a>
              <a
                href="/Portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-zinc-800 px-4 py-2"
              >
                View portfolio
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 border border-zinc-800">
              <h5 className="font-semibold">Delivery</h5>
              <p className="mt-2 text-sm text-[#BFC9C9]">
                Agile sprints, clear milestones, and weekly demos so you always
                know progress.
              </p>
            </div>
            <div className="rounded-lg p-4 border border-zinc-800">
              <h5 className="font-semibold">Security</h5>
              <p className="mt-2 text-sm text-[#BFC9C9]">
                Secure by default: hardened server config, secure headers, and
                regular audits.
              </p>
            </div>
          </div>
        </motion.section>
      </section>

      <footer id="contact" className="mt-20 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-[#9FB2B2]"
        >
          Ready to start? Send an email to{" "}
          <span className="font-medium text-[#00D1B2]">
            ahmadwebdev001@gmail.com
          </span>{" "}
          or use the contact form.
        </motion.p>
      </footer>
    </main>
  );
}
