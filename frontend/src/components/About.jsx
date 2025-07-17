import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";

export default function About() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] text-center mb-12">
            About Me
          </h2>

          <Card className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#3D52A0]">
                Software Developer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Motivated and detail-oriented Software Developer with experience in full-stack development,
                responsive design, and collaboration on real-world projects. Passionate about creating
                efficient, scalable solutions that solve real-world problems.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#8697C4]">Key Strengths:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Full-stack development with MERN stack</li>
                    <li>• Responsive web design</li>
                    <li>• Problem-solving and critical thinking</li>
                    <li>• Team collaboration and communication</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[#8697C4]">Current Focus:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Building scalable web applications</li>
                    <li>• Learning new technologies</li>
                    <li>• Contributing to open-source projects</li>
                    <li>• Continuous professional development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}