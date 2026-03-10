import { FlaskConical, Globe2, Camera, Link, MapPin } from "lucide-react";

const CurrentlyBuilding = () => {
  return (
    <section id="lab" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-brand-accent text-white brutal-shadow border-2 border-brand-border">
          <FlaskConical size={28} />
        </div>
        <h2 className="text-4xl font-black tracking-tight text-brand-text">
          In The Lab.
        </h2>
      </div>

      <div className="bg-brand-bg border-4 border-brand-border brutal-shadow-hover p-8 md:p-10 relative group overflow-hidden">
        {/* Decorative WIP tape */}
        <div className="absolute top-6 -right-16 bg-brand-secondary text-brand-bg font-bold text-xs uppercase tracking-widest py-1.5 px-16 transform rotate-45 border-y-2 border-brand-border z-20 brutal-shadow">
          [WIP] In Development
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="flex-1">
            <h3 className="text-3xl font-black text-brand-text mb-2">
              Terra Voice
            </h3>
            <p className="text-xl font-bold text-brand-accent mb-6">
              A 3D Interactive Travel Journal
            </p>

            <p className="text-brand-text/90 text-lg leading-relaxed mb-8">
              I'm currently building a platform for travel enthusiasts to
              document and share their journeys with the world. Instead of a
              standard feed, memories are plotted on an interactive 3D globe. It
              acts as a digital travel journal where you can pinpoint
              coordinates, build itineraries, and upload your trip photos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Globe2 className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-text">
                    Interactive 3D Globe
                  </h4>
                  <p className="text-sm text-brand-text/80">
                    Plot experiences natively in a 3D space with immersive
                    tooltips.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Camera className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-text">Media Rich</h4>
                  <p className="text-sm text-brand-text/80">
                    Upload up to 5 photos per experience with public/private
                    visibility toggles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-text">
                    Itinerary Tracking
                  </h4>
                  <p className="text-sm text-brand-text/80">
                    Document detailed routes and places traveled across your
                    journeys.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Link className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-text">
                    Shareable "Worlds"
                  </h4>
                  <p className="text-sm text-brand-text/80">
                    Generate a custom link for your Instagram bio to showcase
                    your public journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
