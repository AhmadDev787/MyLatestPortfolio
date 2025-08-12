"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  Rocket,
  Shield,
  Lock,
  Fingerprint,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Threat Mapping",
    subtitle:
      "Understand your objectives, reveal security blind spots, and create a strong foundation for protection",
    icon: Shield,
  },
  {
    id: 2,
    title: "Secure-by-Design Blueprint",
    subtitle:
      "Craft user-friendly layouts grounded in secure data practices and zero-trust strategies from the start.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Code with Defense in Depth",
    subtitle:
      "Build efficient, reliable code with layered defenses and architecture engineered to withstand attacks.",
    icon: Code,
  },
  {
    id: 4,
    title: "Secure Deployment",
    subtitle:
      "Deliver secure deployments, monitor evolving threats, and neutralize risks before they materialize.",
    icon: Fingerprint,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function SecureProcessSteps() {
  return (
    <section className="relative bg-[#0B0F1A] text-[#E0E0E0] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Cybersecurity grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,209,178,0.03)_1px,transparent_1px),linear-gradient(rgba(0,209,178,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8"
        >
          My <span className="text-[#00D1B2]">Cyber-Secure</span> Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-12"
        >
          From the first wireframe to the final deployment, I blend cutting-edge
          design with military-grade security, ensuring your project is fast,
          reliable, and virtually unbreakable.
        </motion.p>

        {/* Desktop layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 border-t border-[#1f2b33]" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-between space-x-6"
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  variants={item}
                  className="relative flex-1 flex flex-col items-center text-center px-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0,209,178,0.3)",
                        "0 0 40px rgba(244,180,0,0.4)",
                        "0 0 20px rgba(0,209,178,0.3)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0f2620] to-[#002a26] flex items-center justify-center border-2 border-[#00D1B2]"
                  >
                    <Icon className="w-8 h-8 text-[#F4B400]" />
                  </motion.div>

                  <h4 className="mt-4 text-lg font-semibold text-[#00D1B2]">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-300 max-w-xs">
                    {s.subtitle}
                  </p>

                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 translate-y-[-50%] w-6 h-6 -mr-3 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#00D1B2] shadow-[0_0_12px_rgba(0,209,178,0.65)]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden mt-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1f2b33]" />
            <div className="flex flex-col space-y-8">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.id}
                    variants={item}
                    className="pl-12 relative"
                  >
                    <div className="absolute left-0 top-0 flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F4B400] text-[#0B0F1A] flex items-center justify-center shadow-lg">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className="bg-[#0f1720] border border-[#1f2937] rounded-xl p-4 shadow-md hover:shadow-[#00D1B2]/30 transition-all">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-semibold text-[#00D1B2]">
                          {s.title}
                        </h4>
                        <span className="text-xs text-gray-400">
                          Step {s.id}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-300">{s.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
