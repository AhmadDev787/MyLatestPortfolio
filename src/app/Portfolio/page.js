"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Terminal, Bot, Car, FileText } from "lucide-react";

// Portfolio data
const projects = [
  {
    id: "ecommerce",
    title: "Full-Featured E-Commerce Platform",
    description:
      "A modern e-commerce website with admin panel, inventory management, secure authentication, payment integration, and SEO optimization.",
    icon: <ShoppingCart size={28} />,
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe", "Framer Motion"],
    link: "#",
  },
  {
    id: "pos",
    title: "Point-of-Sale (POS) Software",
    description:
      "Custom POS system for businesses to manage sales, stock, and reporting with real-time updates and printable invoices.",
    icon: <Terminal size={28} />,
    tech: ["React.js", "MySQL", "Express.js", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "chatbot",
    title: "AI Chatbot for Clothing Store",
    description:
      "An AI-powered chatbot answering queries like product availability, pricing, and return policies with NLP integration.",
    icon: <Bot size={28} />,
    tech: [
      "Python",
      "Next.js",
      "Machine Learning",
      "Data Science",
      "Scikit-Learn",
      "Flask",
      "Tailwind CSS",
    ],
    link: "#",
  },
  {
    id: "carshowroom",
    title: "Car Showroom Management System",
    description:
      "Custom software to manage car inventory, expenses, shipments, and sales tracking with analytics dashboard.",
    icon: <Car size={28} />,
    tech: ["Next.js", "MongoDB", "Express.js", "Recharts"],
    link: "#",
  },
  {
    id: "blogging",
    title: "Modern Blogging Platform",
    description:
      "A blogging web app with rich text editing, SEO-friendly posts, user authentication, and category filtering.",
    icon: <FileText size={28} />,
    tech: ["Wordpress"],
    link: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  },
  hover: { scale: 1.03, y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-[#E0E0E0] py-16 px-6 md:px-12 lg:px-24">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Work & Portfolio
          </h1>
          <p className="mt-4 text-[#C9D6D6] max-w-3xl mx-auto">
            A showcase of some of my most impactful projects — from full-stack
            web platforms to AI-powered tools, all built with performance,
            security, and great UX in mind.
          </p>
        </motion.header>

        {/* Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-2xl border border-zinc-800 bg-[#0F1724]/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#0B0F1A] border border-zinc-700 text-[#00D1B2]">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-[#BFC9C9] mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border border-[#F4B400] text-[#F4B400]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#BFC9C9] mb-4">
            Want to build something amazing together?
          </p>
          <a
            href="/Contact"
            className="inline-flex items-center gap-3 bg-[#00D1B2] text-[#0B0F1A] font-medium px-6 py-3 rounded-full hover:bg-[#00b49a] transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
}
