import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full relative py-24 md:py-32 border-b-2 border-brand-border bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-brand-bg border-2 border-brand-border brutal-shadow text-sm font-bold tracking-wider uppercase mb-2">
              Foodie Dev 🍜
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-brand-text leading-[1.1]">
              I'm Utkarsh. I write code & build{" "}
              <span className="text-brand-accent underline decoration-4 underline-offset-8">
                cool stuff.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-text/80 max-w-2xl font-medium">
              A Full Stack Engineer secretly masquerading as a web architect and
              open-source enthusiast. I turn coffee into scalable SaaS platforms
              and AI tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-bg bg-brand-text border-2 border-brand-border brutal-shadow-hover w-full sm:w-auto"
              >
                See My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Utkarsh Pancholi.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-text bg-white border-2 border-brand-border brutal-shadow-hover w-full sm:w-auto"
              >
                Grab My Resume
                <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-brand-secondary translate-x-4 translate-y-4 border-2 border-brand-border"></div>
            <div className="relative w-48 h-64 md:w-56 md:h-72 border-2 border-brand-border bg-brand-bg overflow-hidden brutal-shadow-hover group">
              {/* Note: Replace /avatar.jpg with the actual passport image in the public folder */}
              <img
                src="/avatar.jpg"
                alt="Utkarsh Pancholi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Utkarsh+Pancholi&size=512&background=f4f4f0&color=1a1a1a&bold=true&font-size=0.33";
                }}
              />
              {/* Optional: Retro scanline overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
