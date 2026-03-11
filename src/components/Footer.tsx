import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-brand-text text-brand-bg border-t-2 border-brand-border py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter text-white">
            Utkarsh Pancholi.
          </h2>
          <p className="mt-2 text-brand-bg/80 text-sm max-w-sm">
            Architecting scalable SaaS applications and building AI-powered
            tools since 2021.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a
              href="mailto:utka21200@gmail.com"
              className="p-3 border-2 border-brand-bg hover:bg-brand-accent hover:border-brand-accent transition-colors text-white relative group"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/utkarsh212"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-brand-bg hover:bg-white hover:text-brand-text transition-colors text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-pancholi-7895261a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-brand-bg hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-brand-bg/60 font-medium">
            © {new Date().getFullYear()} Handcrafted with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
