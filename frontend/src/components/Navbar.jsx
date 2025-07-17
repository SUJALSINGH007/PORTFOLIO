import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#ADBBD4] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3D52A0] to-[#7091E6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-semibold text-[#3D52A0] text-lg">Sujal Singh</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#3D52A0] transition-colors duration-300 font-medium text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-[#3D52A0] text-[#3D52A0] hover:bg-[#3D52A0] hover:text-white"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
}