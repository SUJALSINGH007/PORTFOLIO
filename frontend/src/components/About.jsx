import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll delay={0}>
            <h2 className="text-4xl font-bold text-[#3D52A0] dark:text-[#7091E6] text-center mb-12">
              About Me
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Card className="bg-[#EDE8F5] dark:bg-[#181B23] border-[#ADBBD4] dark:border-[#3D52A0] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-[#3D52A0] dark:text-[#7091E6]">
                  Software Developer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RevealOnScroll delay={200}>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Motivated and detail-oriented Software Developer with experience in full-stack development,
                    responsive design, and collaboration on real-world projects. Passionate about creating
                    efficient, scalable solutions that solve real-world problems.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={300}>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#8697C4] dark:text-[#ADBBD4]">Key Strengths:</h3>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Full-stack development with MERN stack</li>
                        <li>• Responsive web design</li>
                        <li>• Problem-solving and critical thinking</li>
                        <li>• Team collaboration and communication</li>
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}