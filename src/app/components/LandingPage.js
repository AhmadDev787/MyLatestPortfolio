"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  // Typewriter Effect
  const words = [
    "Full-Stack Developer",
    "AI Engineer",
    "Digital Solutions Architect",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        let currentWord = words[wordIndex];
        if (!isDeleting) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0B0F1A] overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-yellow-900/20 animate-pulse"></div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 p-6 relative z-10">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            <span className="text-cyan-400">{text}</span>
            <span className="blinking-cursor text-yellow-400">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-300 mb-6"
          >
            Crafting scalable and high-performance web solutions — blending
            modern tech with security practices.
          </motion.p>

          {/* Icons Row */}
          <motion.div
            className="flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-cyan-400 w-6 h-6" />
              <span className="text-[#F4B400]">
                Security Best Practices Followed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-400 w-6 h-6" />
              <span className="text-[#F4B400]">Innovative Solutions</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/me2.png"
            alt="Profile"
            width={450}
            height={450}
            className="rounded-2xl "
          />
        </motion.div>
      </div>

      {/* Cursor Blink Animation */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
