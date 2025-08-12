"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  Home,
  Code2,
  Lock,
  Phone,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-[#0B0F1A] text-white flex flex-col">
      {/* FOOTER */}
      <footer className="bg-[#0F1524] border-t border-gray-800 mt-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 p-8 text-gray-300">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p>
              Full-stack developer & cybersecurity expert building secure,
              scalable, and impactful digital products for businesses worldwide.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-cyan-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Skills" className="hover:text-cyan-400">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-cyan-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Visual" className="hover:text-cyan-400">
                  Visualize
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />{" "}
                ahmadwebdev001@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" /> +92 326 5378067
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ahmadwebdev"
                className="hover:text-cyan-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#0B0F1A] text-center py-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Ahmad Dev. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
