import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  // Theme toggle logic
  const [isDark, setIsDark] = useState(true); // Default to dark mode

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

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#181B23]/95 backdrop-blur-sm border-b border-[#ADBBD4] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3D52A0] to-[#7091E6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-semibold text-[#3D52A0] dark:text-white text-lg">Sujal Singh</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-200 hover:text-[#3D52A0] dark:hover:text-[#7091E6] transition-colors duration-300 font-medium text-sm"
            >
              Contact
            </a>
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
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-[#3D52A0] text-[#3D52A0] hover:bg-[#3D52A0] hover:text-white"
            aria-label="Open menu"
          >
            <FiMenu className="text-xl" />
          </Button>
        </div>
      </div>
    </nav>
  );
}