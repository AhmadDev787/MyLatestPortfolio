"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // 👈 Add this
import {
  ShieldCheck,
  Home,
  Code2,
  Phone,
  Menu,
  X,
  SquareUserRound,
  Workflow,
  Eye,
  Paperclip,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 Current path

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    {
      href: "/About",
      label: "About",
      icon: <SquareUserRound className="w-4 h-4" />,
    },
    {
      href: "/Skills",
      label: "Skills",
      icon: <Workflow className="w-4 h-4" />,
    },
    {
      href: "/Services",
      label: "Services",
      icon: <Code2 className="w-4 h-4" />,
    },
    { href: "/Visual", label: "Visualize", icon: <Eye className="w-4 h-4" /> },
    { href: "/Contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
    { href: "/cv.pdf", label: "CV", icon: <Paperclip className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-[#0F1524] text-[#E0E0E0] sticky top-0 z-50 border-b border-gray-800 shadow-lg shadow-[#00D1B2]/10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-[#00D1B2] font-bold text-lg cursor-pointer"
        >
          <ShieldCheck className="w-6 h-6" />
          Ahmad Web Dev
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.span key={i} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive
                      ? "text-[#00D1B2] font-semibold"
                      : "hover:text-[#00D1B2]"
                  }`}
                >
                  {link.icon} {link.label}
                </Link>
              </motion.span>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#E0E0E0] hover:text-[#00D1B2] transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#0B0F1A] shadow-lg shadow-[#00D1B2]/20 z-50 p-6 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="text-[#E0E0E0] hover:text-[#F4B400]"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive
                        ? "text-[#00D1B2] font-semibold"
                        : "text-[#E0E0E0] hover:text-[#00D1B2]"
                    }`}
                  >
                    {link.icon} {link.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer Info in Menu */}
            <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-400">
              <p>© 2026 Ahmad Dev</p>
              <p className="text-[#F4B400]">Crafting Secure Solutions</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
