import { Button } from "@/components/ui/button";
import AnimatedCircles from "./AnimatedCircles";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EDE8F5] to-white pt-16 relative overflow-hidden">
      <AnimatedCircles />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#3D52A0] to-[#7091E6] flex items-center justify-center">
            <span className="text-4xl font-bold text-white">SS</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#3D52A0] mb-4">
            Sujal Singh
          </h1>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl font-medium text-[#8697C4] mb-6">
            Software Developer
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building smart, scalable & human-friendly solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/resume_sujal.pdf"
              download
              className="bg-[#3D52A0] hover:bg-[#2A3A7A] text-white px-8 py-3 rounded transition-all duration-300 hover:opacity-90 text-lg font-medium flex items-center justify-center"
            >
              Download Resume
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-[#7091E6] text-[#7091E6] hover:bg-[#7091E6] hover:text-white px-8 py-3 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}