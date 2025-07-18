import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  // Theme toggle logic
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Ensure dark mode is set on initial mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleTheme = () => setIsDark((d) => !d);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#181B23]/80 backdrop-blur-md shadow-xl border-b border-[#ADBBD4]/40 dark:border-[#23263a]/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3D52A0] to-[#7091E6] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span className="font-extrabold tracking-tight text-2xl md:text-3xl text-[#3D52A0] dark:text-white">Sujal Singh</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-200 font-semibold text-lg px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7091E6] after:content-[''] after:block after:h-[2px] after:bg-[#7091E6] dark:after:bg-[#3D52A0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                style={{overflow: 'hidden'}}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-[#3D52A0] text-xl" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ml-2 p-2 rounded-full border-none outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7091E6] ${menuOpen ? 'bg-[#EDE8F5] dark:bg-[#23263a]' : 'hover:bg-[#EDE8F5] dark:hover:bg-[#23263a]'}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <FiX className="text-2xl text-[#3D52A0] dark:text-[#7091E6] transition-transform duration-200 rotate-90" />
            ) : (
              <FiMenu className="text-2xl text-[#3D52A0] dark:text-[#7091E6]" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-start pt-20 bg-black/30 dark:bg-black/60"
        >
          <div className="w-[90vw] max-w-sm rounded-2xl bg-white/80 dark:bg-[#23263a]/90 shadow-2xl backdrop-blur-xl p-8 flex flex-col space-y-6 animate-slide-fade-in border border-[#ADBBD4] dark:border-[#3D52A0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#3D52A0] dark:text-[#7091E6] font-bold text-lg py-2 px-4 rounded-lg hover:bg-[#EDE8F5] dark:hover:bg-[#181B23] transition-colors duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Animations */}
      <style>{`
        @keyframes slide-fade-in {
          0% { opacity: 0; transform: translateY(-24px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-fade-in {
          animation: slide-fade-in 0.35s cubic-bezier(.4,0,.2,1);
        }
        .lg\:flex .after\\:scale-x-0 { transform: scaleX(0); }
        .lg\:flex .hover\\:after\:scale-x-100:hover:after { transform: scaleX(1); }
      `}</style>
    </nav>
  );
}