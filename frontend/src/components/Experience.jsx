import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";

const experiences = [
  {
    title: "Software Development Intern",
    company: "YugaYatra Retail (OPC) Pvt. Ltd.",
    period: "Jul 2025 – Present",
    description: "Working on projects with Cursor AI & Firebase Studio. Using Google Workspace for collaboration and project management.",
    technologies: ["Cursor AI", "Firebase Studio", "Google Workspace"],
    color: "from-[#3D52A0] to-[#7091E6]"
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] text-center mb-12">
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-[#3D52A0] mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-[#8697C4] mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600">
                        {exp.period}
                      </p>
                    </div>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-[#3D52A0] rounded-full text-sm font-medium border border-[#ADBBD4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}