import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircles from "./AnimatedCircles";
import RevealOnScroll from "./RevealOnScroll";

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
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll delay={0}>
            <h2 className="text-4xl font-bold text-[#3D52A0] dark:text-[#7091E6] text-center mb-12">
              Education & Achievements
            </h2>
          </RevealOnScroll>
          {/* Education */}
          <div className="space-y-6">
            <RevealOnScroll delay={100}>
              <h3 className="text-2xl font-semibold text-[#3D52A0] dark:text-[#7091E6] mb-4">Education</h3>
            </RevealOnScroll>
            {education.map((item, index) => (
              <RevealOnScroll key={item.degree} delay={200 + index * 120}>
                <Card className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#3D52A0]">
                      {item.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 mb-2">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
          {/* Certifications */}
          <div className="space-y-6 mt-10">
            <RevealOnScroll delay={100}>
              <h3 className="text-2xl font-semibold text-[#3D52A0] dark:text-[#7091E6] mb-4">Certifications</h3>
            </RevealOnScroll>
            {certifications.map((item, index) => (
              <RevealOnScroll key={item.title} delay={200 + index * 120}>
                <Card className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#3D52A0]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 mb-2">{item.provider}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
          {/* Achievements */}
          <div className="space-y-6 mt-10">
            <RevealOnScroll delay={100}>
              <h3 className="text-2xl font-semibold text-[#3D52A0] dark:text-[#7091E6] mb-4">Extracurricular Activities</h3>
            </RevealOnScroll>
            {achievements.map((item, index) => (
              <RevealOnScroll key={item.title} delay={200 + index * 120}>
                <Card className="bg-[#EDE8F5] border-[#ADBBD4] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#3D52A0]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 mb-2">{item.event}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}