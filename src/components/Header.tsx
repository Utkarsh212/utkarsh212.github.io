import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Off-Screen", href: "#off-screen" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-bg border-b-2 border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tighter text-brand-text decoration-brand-accent hover:underline decoration-4"
            >
              UP.
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-brand-text font-medium text-lg hover:text-brand-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/utkarsh212"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 brutal-border brutal-shadow-hover bg-white text-brand-text"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-pancholi-7895261a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 brutal-border brutal-shadow-hover bg-brand-accent text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
            >
              {isOpen ? (
                <X size={28} className="text-brand-text" />
              ) : (
                <Menu size={28} className="text-brand-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-bg border-b-2 border-brand-border shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-3 text-lg font-medium text-brand-text border-2 border-transparent hover:border-brand-border hover:bg-white transition-all brutal-shadow-hover inline-block"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 pt-4">
              <a
                href="https://github.com/utkarsh212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 brutal-border brutal-shadow bg-white text-brand-text"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-pancholi-7895261a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 brutal-border brutal-shadow bg-brand-accent text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:utka21200@gmail.com"
                className="p-3 brutal-border brutal-shadow bg-brand-secondary text-white"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
