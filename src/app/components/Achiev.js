"use client";

import { motion } from "framer-motion";
import {
  Award,
  Laptop,
  ShoppingCart,
  Cpu,
  Layers,
  PenTool,
} from "lucide-react";

const achievements = [
  {
    year: "2025",
    title: "Full-Stack Rent A Car Web",
    description:
      "Developed a lightning-fast, fully featured rent a car web with modern design, smart inventory control, and completed client's requirements.",
    icon: ShoppingCart,
  },
  {
    year: "2025",
    title: "Full-Stack E-Commerce Masterpiece",
    description:
      "Developed a lightning-fast, fully featured store with a sleek admin hub, smart inventory control, and secure payment flow.",
    icon: ShoppingCart,
  },
  {
    year: "2025",
    title: "AI-Powered Fashion Chatbot",
    description:
      "Brought shopping to life with an intelligent assistant delivering instant answers and tailored outfit suggestions.",
    icon: Cpu,
  },
  {
    year: "2025",
    title: "Smart Expense Command Center",
    description:
      "Crafted a precision-built system that automates tracking, visualizes spend, and keeps finances razor-sharp.",
    icon: Laptop,
  },
  {
    year: "2025",
    title: "Next-Gen Blogging Platform",
    description:
      "Built a blazing-fast, SEO-driven content space with immersive media and effortless publishing.",
    icon: PenTool,
  },
  {
    year: "2024",
    title: "Retail POS Reinvented",
    description:
      "Designed a POS with real-time analytics, inventory sync, and a buttery-smooth checkout experience.",
    icon: Layers,
  },
  {
    year: "2023",
    title: "Cybersecurity Practitioner",
    description:
      "Applied top-tier defensive strategies and secure coding principles across all solutions.",
    icon: Award,
  },
];

export default function AchievementsTimeline() {
  return (
    <section className="bg-gradient-to-b from-[#0B0F1A] to-[#05070D] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center text-[#E0E0E0] mb-16"
        >
          My Journey <span className="text-[#00D1B2]">So Far</span>
        </motion.h2>

        <div className="relative">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year + Icon */}
                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F4B400] text-[#0B0F1A] shadow-lg shadow-[#F4B400]/30"
                  >
                    <Icon size={26} />
                  </motion.div>
                  <span className="mt-3 text-sm font-semibold text-[#00D1B2]">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 8px 25px rgba(0,209,178,0.25)",
                  }}
                  className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-lg hover:border-[#00D1B2]/50 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#00D1B2]">
                    {item.title}
                  </h3>
                  <p className="text-[#E0E0E0] text-sm md:text-base mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
