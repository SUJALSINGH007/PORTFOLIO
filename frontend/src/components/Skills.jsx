import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python"],
    color: "from-[#3D52A0] to-[#7091E6]"
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "React", "Tailwind CSS"],
    color: "from-[#7091E6] to-[#8697C4]"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    color: "from-[#8697C4] to-[#ADBBD4]"
  },
  {
    title: "Database",
    skills: ["MongoDB"],
    color: "from-[#ADBBD4] to-[#EDE8F5]"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"],
    color: "from-[#3D52A0] to-[#8697C4]"
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication"],
    color: "from-[#7091E6] to-[#ADBBD4]"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#EDE8F5] relative overflow-hidden">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] text-center mb-12">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white border-[#ADBBD4] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-[#3D52A0] flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#EDE8F5] text-[#3D52A0] rounded-full text-sm font-medium border border-[#ADBBD4]"
                      >
                        {skill}
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