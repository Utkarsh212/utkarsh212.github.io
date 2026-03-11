import { Wrench } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Languages & Scripting",
      skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "Redux",
        "Zustand",
        "React Query",
        "GraphQL",
        "Jest",
      ],
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "React Flow"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "Azure (AZ-900 Certified)",
        "AWS",
        "Docker",
        "Azure DevOps",
        "CI/CD",
      ],
    },
    {
      title: "Tools & Architecture",
      skills: [
        "Multi-tenant SaaS",
        "WebSockets",
        "Git",
        "Agile",
        "LLM Integration (Ollama)",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-brand-text text-brand-bg brutal-shadow border-2 border-brand-border">
          <Wrench size={28} />
        </div>
        <h2 className="text-4xl font-black tracking-tight text-brand-text">
          The Toolkit.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="group bg-brand-bg border-4 border-brand-border p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-brand-text mb-4 pb-2 border-b-2 border-brand-border/20 border-dashed">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-semibold bg-white border-2 border-brand-border text-brand-text group-hover:bg-brand-accent group-hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
