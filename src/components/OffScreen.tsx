import { Coffee } from "lucide-react";

const OffScreen = () => {
  return (
    <section id="off-screen" className="scroll-mt-24 pb-12">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-white text-brand-text brutal-shadow border-2 border-brand-border">
          <Coffee size={28} />
        </div>
        <h2 className="text-4xl font-black tracking-tight text-brand-text">
          Off-Screen.
        </h2>
      </div>

      <div className="bg-brand-secondary/10 border-4 border-brand-border p-8 md:p-12 brutal-shadow-hover relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10 max-w-3xl">
          <h3 className="text-3xl font-bold bg-white inline-block px-4 py-1 border-2 border-brand-border transform -rotate-2 mb-8">
            When I'm not coding...
          </h3>

          <div className="space-y-6 text-lg text-brand-text/90 font-medium leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-brand-accent text-2xl">🌍</span>
              <span>
                I am deeply interested in <strong>Spiritual Tourism</strong>.
                Traveling to explore ancient temples, serene ashrams, and
                culturally rich spiritual destinations gives me a sense of peace
                and a fresh perspective that debugging occasionally takes away!
              </span>
            </p>

            <p className="flex items-start gap-3">
              <span className="text-brand-accent text-2xl">🍜</span>
              <span>
                I'm also a huge fan of <strong>Food Exploration</strong>.
                Whether it's trying out a highly-rated local street food spot or
                experimenting with new cuisines, discovering new flavors is one
                of my favorite hobbies.
              </span>
            </p>

            <p className="flex items-start gap-3">
              <span className="text-brand-accent text-2xl">🌱</span>
              <span>
                Continuously learning. From diving into the open-source
                community to tinkering with new AI models locally, the learning
                never really stops.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffScreen;
