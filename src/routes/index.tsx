import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-lake-zurich.jpg";
import founderImage from "@/assets/founder-beat-lang.jpg";
import bavariaImage from "@/assets/bavaria-46.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segelschule Lang — Sailing & Motorboat School on Lake Zürich since 1982" },
      {
        name: "description",
        content:
          "Family-owned sailing and motorboat school on Lake Zürich. D-Schein certification, skippered Bavaria 46 trips, rentals, water taxi, and a nautical shop in Stäfa. Founded by Beat Lang in 1982.",
      },
      { property: "og:title", content: "Segelschule Lang — Sail Lake Zürich since 1982" },
      {
        property: "og:description",
        content:
          "Master the elements with Switzerland's premier nautical school. Courses, charters, and rentals on Lake Zürich.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const courses = [
  {
    eyebrow: "Sailing School",
    title: "D-Schein & B-Schein",
    body: "Fundamental Swiss sailing certification on Lake Zürich and advanced coastal navigation for serious sailors heading to sea.",
    cta: "Explore course",
  },
  {
    eyebrow: "Motorboat School",
    title: "Bootsführerschein",
    body: "Precision maneuvering and high-speed engine management on our modern training craft, from bases in Zollikon or Stäfa.",
    cta: "Explore course",
  },
  {
    eyebrow: "Private Hire",
    title: "Skippered Yacht Trips",
    body: "Experience the open water on our Bavaria 46 with a professional skipper. Mile trips, sailing holidays, and Caribbean expeditions.",
    cta: "Explore trips",
  },
];

const services = [
  "Water Taxi in Zürich",
  "SUP & Kayak Rental",
  "Caribbean Expeditions",
  "Nautical Shop in Stäfa",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-navy">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-between px-6 md:px-10 py-5 border-b border-navy/5">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-navy">
          SAIL.CH
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy/80">
          <a href="#courses" className="hover:text-gold transition-colors">Courses</a>
          <a href="#fleet" className="hover:text-gold transition-colors">Fleet</a>
          <a href="#heritage" className="hover:text-gold transition-colors">Heritage</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-6 py-2.5 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors"
        >
          Book Now
        </a>
      </nav>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sailing yacht on Lake Zürich at golden hour with the Swiss alps in the background"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
            Segelschule Lang — Since 1982
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 italic leading-[1.05]">
            Master the Elements
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg mb-10 font-light text-white/90 leading-relaxed">
            Family-owned excellence on Lake Zürich. From your first knot to offshore expeditions
            across the Atlantic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#courses"
              className="px-10 py-4 bg-white text-navy font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white transition-all"
            >
              Book a Course
            </a>
            <a
              href="#fleet"
              className="px-10 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-navy transition-all"
            >
              View Fleet
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Intro */}
      <section id="heritage" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
              Since 1982
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-7 leading-tight">
              40 Years. 150,000 Nautical Miles. One Legacy.
            </h2>
            <p className="text-navy/70 leading-relaxed mb-5 text-[15px]">
              Founded by Beat Lang, Segelschule Lang has been the premier destination for nautical
              education in Switzerland. Our philosophy blends traditional seamanship with modern
              yachting technology — the first transatlantic crossings were navigated by sextant.
            </p>
            <p className="text-navy/70 leading-relaxed mb-10 text-[15px]">
              Today we train captains, rent boats, run a nautical shop in Stäfa, and lead
              expeditions from Lake Zürich to the Caribbean.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-navy/10 pt-8">
              <div>
                <div className="text-4xl font-serif text-gold leading-none">8k+</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-navy/50 mt-2">
                  Skippers Certified
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold leading-none">Beat Lang</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-navy/50 mt-2">
                  Master Mariner
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={founderImage}
              alt="Portrait of Beat Lang, founder of Segelschule Lang"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-[4/5] object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section id="courses" className="bg-sand py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
              Curriculum
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-4">Choose Your Path</h2>
            <p className="text-navy/60 text-[15px]">
              Tailored instruction from beginners to offshore skippers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((c) => (
              <article
                key={c.title}
                className="group bg-white p-8 md:p-10 border border-navy/5 hover:border-gold transition-colors flex flex-col"
              >
                <div className="text-gold mb-8 text-xs font-bold uppercase tracking-[0.25em]">
                  {c.eyebrow}
                </div>
                <h3 className="font-serif text-2xl mb-4">{c.title}</h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-8 flex-1">{c.body}</p>
                <a
                  href="#contact"
                  className="self-start text-[11px] font-bold uppercase tracking-[0.25em] border-b border-navy pb-1 group-hover:text-gold group-hover:border-gold transition-colors"
                >
                  {c.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Highlight */}
      <section id="fleet" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-2/3">
            <img
              src={bavariaImage}
              alt="The Bavaria 46 sailing yacht under full sail on alpine waters"
              loading="lazy"
              width={1600}
              height={1024}
              className="w-full aspect-video object-cover"
            />
          </div>
          <div className="md:w-1/3 flex flex-col justify-center">
            <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs mb-4">
              The Flagship
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Bavaria 46
            </h2>
            <p className="text-navy/70 leading-relaxed mb-8 text-[15px]">
              Our pride and joy. Equipped for ultimate performance and comfort. Whether for
              training, luxury events, or your next mile trip, she remains the gold standard on the
              open water.
            </p>
            <ul className="space-y-4 text-sm font-medium border-l-2 border-gold pl-6">
              <li>LOA: 14.27 meters</li>
              <li>Capacity: 12 persons</li>
              <li>Expedition-grade rigging</li>
              <li>Available for mile trips & charters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations & Contact */}
      <footer id="contact" className="bg-navy text-white pt-24 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
              Set sail from Stäfa or Zollikon.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-4">
                  Base Stäfa
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Wassersport Zentrum
                  <br />
                  8712 Stäfa
                  <br />
                  Main Office & Shop
                </p>
              </div>
              <div>
                <h4 className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-4">
                  Base Zollikon
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Motorboat Academy
                  <br />
                  8702 Zollikon
                  <br />
                  Training Center
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-4">
              Get in touch
            </h4>
            <p className="text-sm text-white/70 mb-2">
              <a href="tel:+41449281818" className="hover:text-gold transition-colors">
                +41 44 928 18 18
              </a>
            </p>
            <p className="text-sm text-white/70 mb-6">
              <a href="mailto:info@sail.ch" className="hover:text-gold transition-colors">
                info@sail.ch
              </a>
            </p>
            <a
              href="mailto:info@sail.ch"
              className="block text-center w-full py-3 bg-gold text-navy font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40">
          <div>© 1982–2026 Wassersport & Reise GmbH · Dorfstrasse 33, 8849 Alpthal</div>
          <div>Segelschule Lang · sail.ch</div>
        </div>
      </footer>
    </div>
  );
}
