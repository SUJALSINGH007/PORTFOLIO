import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedCircles from "./AnimatedCircles";

const projects = [
  {
    title: "MiniURL – URL Shortener",
    description: "A full-stack URL shortening application with REST API, MongoDB storage, and responsive frontend.",
    features: [
      "REST API with Node.js + Express",
      "MongoDB schema for URL storage",
      "Responsive frontend",
      "Version controlled via GitHub"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "React", "GitHub"],
    github: "#",
    demo: "#",
    color: "from-[#3D52A0] to-[#7091E6]"
  },
  // Portfolio Project
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio to showcase my projects, skills, and contact information. Built with React and a custom design.",
    features: [
      "Animated background elements",
      "Contact form with validation",
      "Project showcase section",
      "Responsive and accessible design"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    github: "#", // Replace with actual GitHub repo link
    demo: "#",   // Replace with actual live demo link
    color: "from-[#A770EF] to-[#FDB99B]"
  }
];

export default function Projects() {
  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] dark:text-[#7091E6] text-center mb-12">
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-[#EDE8F5] dark:bg-[#181B23] border-[#ADBBD4] dark:border-[#3D52A0] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-[#3D52A0] dark:text-[#7091E6]">
                      {project.title}
                    </CardTitle>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#8697C4] dark:text-[#ADBBD4] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-[#7091E6] dark:bg-[#3D52A0] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#8697C4] dark:text-[#ADBBD4] mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#EDE8F5] dark:bg-[#23263a] text-[#3D52A0] dark:text-[#7091E6] rounded-full text-sm font-medium border border-[#ADBBD4] dark:border-[#3D52A0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-[#3D52A0] dark:bg-[#7091E6] hover:bg-[#2A3A7A] dark:hover:bg-[#3D52A0] text-white"
                    >
                      View Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#7091E6] dark:border-[#3D52A0] text-[#7091E6] dark:text-[#7091E6] hover:bg-[#7091E6] hover:text-white dark:hover:bg-[#3D52A0] dark:hover:text-white"
                    >
                      GitHub
                    </Button>
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