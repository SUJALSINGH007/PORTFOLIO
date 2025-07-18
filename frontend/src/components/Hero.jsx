import { Button } from "@/components/ui/button";
import AnimatedCircles from "./AnimatedCircles";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden transition-colors duration-300">
      <AnimatedCircles />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Profile Image Placeholder */}
          <RevealOnScroll delay={0}>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#3D52A0] to-[#7091E6] dark:from-[#7091E6] dark:to-[#3D52A0] flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SS</span>
            </div>
          </RevealOnScroll>

          {/* Name */}
          <RevealOnScroll delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3D52A0] dark:text-[#7091E6] mb-4">
              Sujal Singh
            </h1>
          </RevealOnScroll>

          {/* Tagline */}
          <RevealOnScroll delay={200}>
            <h2 className="text-xl md:text-2xl font-medium text-[#8697C4] dark:text-[#ADBBD4] mb-6">
              Software Developer
            </h2>
          </RevealOnScroll>

          {/* Subtext */}
          <RevealOnScroll delay={300}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building smart, scalable & human-friendly solutions
            </p>
          </RevealOnScroll>

          {/* Action Buttons */}
          <RevealOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/resume_sujal.pdf"
                download
                className="bg-[#3D52A0] dark:bg-[#7091E6] hover:bg-[#2A3A7A] dark:hover:bg-[#3D52A0] text-white px-8 py-3 rounded transition-all duration-300 hover:opacity-90 text-lg font-medium flex items-center justify-center"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                role="button"
                className="border-[#7091E6] dark:border-[#3D52A0] text-[#7091E6] dark:text-[#7091E6] hover:bg-[#7091E6] hover:text-white dark:hover:bg-[#3D52A0] dark:hover:text-white px-8 py-3 transition-all duration-300 rounded border-2 text-lg font-medium flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}