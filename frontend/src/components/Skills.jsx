import { SiJavascript, SiPython, SiHtml5, SiCss3, SiBootstrap, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPostman } from "react-icons/si";
import AnimatedCircles from "./AnimatedCircles";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
];

export default function Skills() {
  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <AnimatedCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3D52A0] dark:text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {skills.map(({ name, icon: Icon }, idx) => (
              <div key={name} className="flex flex-col items-center group">
                <Icon className="text-5xl md:text-6xl text-[#3D52A0] dark:text-[#7091E6] group-hover:text-[#7091E6] dark:group-hover:text-yellow-400 transition-colors duration-300" title={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}