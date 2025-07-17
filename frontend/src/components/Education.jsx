import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Noida International University",
    period: "2022–2026",
    type: "education"
  }
];

const certifications = [
  {
    title: "React.js – From Beginner to Expert",
    provider: "Learnify IT (Udemy)",
    date: "July 2025",
    type: "certification"
  }
];

const achievements = [
  {
    title: "Volunteer and Event Organizer",
    event: "Lakshya 2024 - Inter-University Games at Noida International University",
    type: "achievement"
  },
  {
    title: "Yuva Road Safety Summit 2024",
    event: "Ministry of Road Transport & Highways ",
    type: "achievement"
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] text-center mb-12">
            Education & Achievements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#3D52A0] mb-4">Education</h3>
              {education.map((item, index) => (
                <Card key={index} className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#3D52A0]">
                      {item.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#8697C4] font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-gray-600">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#3D52A0] mb-4">Certifications</h3>
              {certifications.map((item, index) => (
                <Card key={index} className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#3D52A0]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#8697C4] font-medium mb-1">{item.provider}</p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#3D52A0] mb-4">Extracurricular Activities</h3>
              {achievements.map((item, index) => (
                <Card key={index} className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#3D52A0]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#8697C4] font-medium">{item.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}