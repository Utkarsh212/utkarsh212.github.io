import { Code2, ExternalLink, Github, Star, BookOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "react-pdftotext",
      description:
        "Browser-Native PDF Parser (10K+ Weekly Downloads). A lightweight, memory-safe client library to extract plain text from PDFs directly in the browser. Zero external server dependencies for strict data privacy.",
      tech: ["TypeScript", "pdf.js"],
      stats: "36.5K+ npm, 32.1K+ Yarn",
      links: {
        github: "https://github.com/utkarsh212/react-pdftotext",
        npm: "https://www.npmjs.com/package/react-pdftotext",
      },
      featured: true,
    },
    {
      title: "CouponAI",
      description:
        "An AI-powered inbox assistant that autonomously extracts promotional emails into structured coupon cards using a locally hosted LLM (Gemma 3:4b via Ollama). Designed a modular prompt-engineering pipeline achieving >90% accuracy.",
      tech: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Ollama",
        "Node.js",
        "MongoDB",
      ],
      links: {
        github: "https://github.com/Utkarsh212/CouponAI",
        article:
          "https://dev.to/utkarsh212/couponai-turn-promotional-emails-into-smart-savings-53dc",
      },
      featured: true,
      badge: "Dev.to Hackathon 2025",
    },
    {
      title: "LogiHub",
      description:
        "A comprehensive B2B logistics management platform serving 20+ organizations, processing over 20,000 orders daily. Automates order routing between e-commerce marketplaces and delivery agencies. Features real-time courier allocation, complex financial dashboards (revenue & commissions), automated tracking, CSV management, and bulk label generation.",
      tech: ["Next.js", "React Query", "Zustand", "Formik"],
      stats: "20K+ Daily Orders",
      links: {
        demo: "https://logihub-xi.vercel.app/",
      },
      featured: true,
      badge: "Freelance",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-brand-secondary text-white brutal-shadow border-2 border-brand-border">
          <Code2 size={28} />
        </div>
        <h2 className="text-4xl font-black tracking-tight text-brand-text">
          Featured Work.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border-4 border-brand-border brutal-shadow-hover p-6 sm:p-8 relative"
          >
            {project.badge && (
              <div className="absolute -top-4 -right-4 bg-brand-accent text-white font-bold text-xs px-3 py-1 border-2 border-brand-border shadow-[2px_2px_0px_#111] transform rotate-3 z-10">
                {project.badge}
              </div>
            )}

            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-brand-text/90 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-brand-bg border-2 border-brand-border text-sm font-semibold text-brand-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t-2 border-brand-border border-dashed mt-auto">
              <div className="text-brand-secondary font-bold text-sm flex items-center gap-1.5">
                {project.stats && (
                  <>
                    <Star size={16} fill="currentColor" />
                    {project.stats}
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-brand-border brutal-shadow-hover hover:bg-brand-bg"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.links.npm && (
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-accent text-white border-2 border-brand-border brutal-shadow-hover shadow-[2px_2px_0px_#111]"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.links.article && (
                  <a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-accent text-white border-2 border-brand-border brutal-shadow-hover shadow-[2px_2px_0px_#111]"
                  >
                    <BookOpen size={20} />
                  </a>
                )}
                {project.links.demo && !project.links.npm && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-accent text-white border-2 border-brand-border brutal-shadow-hover shadow-[2px_2px_0px_#111]"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
