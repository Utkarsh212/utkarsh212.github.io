import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Celebal Technologies Pvt. Ltd.",
      duration: "Jan 2023 - Present",
      description: [
        <>
          <strong>Platform Overview:</strong> Led end-to-end frontend
          development for{" "}
          <a
            href="https://www.gprnt.ai/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-accent underline font-bold px-1 hover:bg-brand-bg transition-colors"
          >
            Gprnt
          </a>
          , a Nationwide Utility for Sustainability Reporting. The platform
          helps 300+ global organizations process and track Scope emissions via
          a centralized dashboard (
          <a
            href="https://app.gprnt.ai/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-accent underline font-bold px-1 hover:bg-brand-bg transition-colors"
          >
            Live App
          </a>
          ).
        </>,
        <>
          <strong>Leadership & Growth:</strong> Progressed from Junior Engineer
          to Lead Frontend Engineer over 3+ years. Currently architecting the
          global transition of the platform while managing a dedicated team of
          frontend developers.
        </>,
        <>
          <strong>Architecture:</strong> Designed a multi-tenant SaaS frontend
          using a single codebase and deployment strategy, ensuring scalable
          customization across branding, permissions, and workflows via runtime
          tenant resolution.
        </>,
        <>
          <strong>Technical Stack:</strong> Built a modular frontend ecosystem
          with Next.js, Material UI, Zustand, TanStack Query, and React Flow
          resulting in a 40% reduction in feature development time and a 30%
          improvement in load performance.
        </>,
        <>
          <strong>Integrations:</strong> Integrated Azure AD B2C for role-based
          access and embedded APIs from MyInfo Business, Xero, and ESGpedia,
          saving manual data entry by 50%.
        </>,
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-brand-accent text-white brutal-shadow border-2 border-brand-border">
          <Briefcase size={28} />
        </div>
        <h2 className="text-4xl font-black tracking-tight text-brand-text">
          Experience.
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative bg-white border-4 border-brand-border brutal-shadow-hover p-6 sm:p-8"
          >
            {/* The structural bold headers */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-text mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-brand-secondary">
                  {exp.company}
                </p>
              </div>
              <div className="inline-block px-4 py-2 border-2 border-brand-border bg-brand-bg text-brand-text font-bold text-sm">
                {exp.duration}
              </div>
            </div>

            <ul className="space-y-3 text-brand-text/90">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
