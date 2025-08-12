"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-[#E0E0E0] py-16 px-6 md:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-[#C9D6D6] max-w-2xl mx-auto"
        >
          Have a project in mind or just want to say hello? Fill out the form
          below and I’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          action="mailto:ahmadwebdev001@gmail.com"
          method="POST"
          encType="text/plain"
          className="mt-10 grid gap-6 bg-[#0F1724] p-8 rounded-2xl border border-zinc-800 shadow-lg"
        >
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <div className="flex items-center gap-3 bg-[#0B0F1A] border border-zinc-700 rounded-lg px-4">
              <User className="text-[#00D1B2]" size={20} />
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full py-3 bg-transparent outline-none text-[#E0E0E0]"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <div className="flex items-center gap-3 bg-[#0B0F1A] border border-zinc-700 rounded-lg px-4">
              <Mail className="text-[#00D1B2]" size={20} />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full py-3 bg-transparent outline-none text-[#E0E0E0]"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <div className="flex items-start gap-3 bg-[#0B0F1A] border border-zinc-700 rounded-lg px-4">
              <MessageSquare className="mt-3 text-[#00D1B2]" size={20} />
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full py-3 bg-transparent outline-none text-[#E0E0E0]"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-[#00D1B2] text-[#0B0F1A] font-medium py-3 rounded-lg hover:bg-[#00b49a] transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}
