import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-lake-zurich.jpg";
import beatLangAsset from "@/assets/beat-lang.jpg.asset.json";
import lakeSunsetAsset from "@/assets/lake-sunset-sails.jpg.asset.json";
import sailRopesAsset from "@/assets/sail-ropes-detail.jpg.asset.json";
import helmWheelAsset from "@/assets/helm-wheel.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sailingschool Lang — Stäfa & Zurich since 1982" },
      {
        name: "description",
        content:
          "Sailingschool Lang in Stäfa and Zurich since 1982. Intensivecourses for the Swiss D-Schein boat license on Lake Zürich. Founded by Beat Lang.",
      },
      { property: "og:title", content: "Sailingschool Lang — Stäfa & Zurich since 1982" },
      {
        property: "og:description",
        content:
          "Cheap and professional sailing courses for beginners in the Zurich area. Intensivecourse from CHF 1'499.00.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const NUMS = "tabular-nums [font-feature-settings:'tnum','lnum']";
const CONTAINER = "max-w-6xl mx-auto px-6 md:px-12";

function Index() {
  return (
    <div className="min-h-screen bg-background text-navy">


      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-between px-6 md:px-12 py-5 border-b border-navy/5">
        <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-navy">
          Sailingschool Lang
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy/80">
          <a href="#offer" className="hover:text-gold transition-colors">Offer</a>
          <a href="#theory" className="hover:text-gold transition-colors">Theory</a>
          <a href="#week" className="hover:text-gold transition-colors">One Week</a>
          <a href="#subscriptions" className="hover:text-gold transition-colors">Subscriptions</a>
          <a href="#individual" className="hover:text-gold transition-colors">Individual</a>
        </div>
        <a
          href="mailto:info@sail.ch"
          className="px-5 py-2.5 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Lake Zürich at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/75" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl py-24">
          <p className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
            Sailingschool Lang in Stäfa and Zurich — Since 1982
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-6 leading-[1.15] font-medium">
            Intensivecourse in 9 days for 1 person
          </h1>
          <p className={`text-gold text-2xl md:text-4xl font-serif font-semibold mb-10 ${NUMS}`}>
            only CHF 1&apos;499.00
          </p>
          <div className={`space-y-2 text-base md:text-lg font-light text-white/90 mb-10 ${NUMS}`}>
            <p>
              <strong className="text-white font-semibold">Intensivecourse in 14 days for 2 persons</strong> — CHF 2&apos;699.00
            </p>
            <p>
              <strong className="text-white font-semibold">Intensivecourse in 21 days for 3 persons</strong> — CHF 3&apos;699.00
            </p>
          </div>
          <div className={`text-sm text-white/70 max-w-xl mx-auto space-y-1 mb-10 ${NUMS}`}>
            <p>incl. insurance (CHF 80.00)</p>
            <p>incl. preparation of the exam, use of the ship during the exam, crew (CHF 280.00)</p>
          </div>
          <a
            href="mailto:info@sail.ch"
            className="inline-block px-10 py-4 bg-white text-navy font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white transition-all"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className={`py-24 md:py-32 ${CONTAINER}`}>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
              Established 1982
            </span>
            <h2 className="font-serif text-2xl md:text-4xl mt-5 mb-7 leading-tight">
              The cheapest and most professional sailing courses for beginners within the Zurich area.
            </h2>
            <p className="text-navy/75 leading-relaxed mb-5 text-[15px]">
              Established by Beat Lang in 1982 — Segelschule Lang, with his passion for teaching
              various water sports. No previous sailing knowledge required, as a newbie to sailing
              you will learn the ABC&apos;s of sailing.
            </p>
            <p className="text-navy/75 leading-relaxed text-[15px]">
              We teach both theory and practical techniques fast and professionally. As a result you
              will be able to sail silently, relaxed and independently with your D Schein (boat
              license).
            </p>
          </div>
          <figure className="relative">
            <img
              src={beatLangAsset.url}
              alt="Beat Lang — founder of Segelschule Lang"
              loading="lazy"
              className="w-full h-full max-h-[640px] aspect-[3/4] object-cover object-center"
            />
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-navy/50">
              Beat Lang · Founder
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Exam overview */}
      <section className="bg-sand py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
            Sailing courses Zürichsee
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-5 mb-8 leading-tight">
            Boat license Switzerland — cheap, for dummies and beginners.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-6 text-[15px]">
            To get to the exam qualification you need approx. 20 units (1.5 h) including the exam.
            You need to absolve a theoretical part and the practical part. We help you through both
            of the exam.
          </p>
          <p className="text-navy/75 leading-relaxed text-[15px]">
            For quick certified sailing lessons, Segelschule Lang will plan the approach to your
            course to suite your personal needs.
          </p>
        </div>
      </section>


      {/* Theory */}
      <section id="theory" className={`py-24 md:py-32 ${CONTAINER}`}>
        <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
          Step 01
        </span>
        <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-10 leading-tight">Theory</h2>
        <ul className="space-y-5 text-[15px] text-navy/80 leading-relaxed border-l-2 border-gold pl-6 max-w-3xl">
          <li>Theory tests are generally written in your residence canton.</li>
          <li>
            Please fulfill the{" "}
            <a
              href="http://sail.ch/wp-content/uploads/2020/12/SFO324SIFU202008-6.pdf"
              className="text-navy underline decoration-gold underline-offset-4 hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              registration form
            </a>{" "}
            as soon as possible.
          </li>
          <li>
            For enrollment an official eye test and confirmation from your residence community
            office are necessary.
          </li>
          <li>
            Segelschule Lang will advise individuals regarding registration formalities, our
            previous experience with certification formalities takes approximately 4 weeks.
          </li>
          <li>
            <a
              href="https://www.boatdriver.ch/e/e-learning"
              className="text-navy underline decoration-gold underline-offset-4 hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order the questions and the theory in English if necessary.
            </a>
          </li>
        </ul>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-navy">
          And now get in touch with us!
        </p>
      </section>

      {/* One Week Offer */}
      <section id="week" className="relative bg-navy text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <img
          src={sailRopesAsset.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="relative max-w-6xl mx-auto">
          <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
            Step 02
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-10 leading-tight">
            One Week Offer
          </h2>

          <ul className={`space-y-3 text-[15px] text-white/85 mb-12 list-disc pl-5 ${NUMS}`}>
            <li>12 units in 9 days</li>
            <li>price incl. insurance (CHF 80.00)</li>
            <li>price incl. organisation of the exam, using of the boat during the exam, crew (CHF 280.00)</li>
            <li>the official costs for the theory and the practical exam are not included</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-4">
                Basic — 1 lesson compiles to
              </h3>
              <ul className={`space-y-2 text-[15px] text-white/85 ${NUMS}`}>
                <li>1.5 h (1 student)</li>
                <li>2.0 h (2 students)</li>
                <li>2.5 h (3 students)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-4">
                Fixed times
              </h3>
              <ul className={`space-y-2 text-[15px] text-white/85 ${NUMS}`}>
                <li>Monday – Thursday 8.45 am (9.45 am) and 1.45 pm</li>
                <li>Friday – Sunday 8.45 am (9.45 am)</li>
              </ul>
              <p className="mt-4 text-xs text-white/55 leading-relaxed">
                The school can change the lessons according season, numbers of students and weather
                conditions.
              </p>
            </div>
          </div>

          <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-5">Prices</h3>
          <div className="border border-white/15 mb-14 bg-navy/40 backdrop-blur-sm">
            <PriceRow label="Intensivcourse (12 lessons in 9 days) for one person" price="CHF 1'499.00" dark />
            <PriceRow label="Intensivcourse (12 lessons in 14 days) for two persons" price="CHF 2'399.00" dark />
            <PriceRow label="Intensivcourse (12 lessons in 21 days) for three persons" price="CHF 3'699.00" dark />
            <PriceRow label="Additional units (1.5 h)" price="CHF 150.00" dark />
            <PriceRow label="Test lesson (1.5 h)" price="CHF 175.00" dark last />
          </div>

          <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-5">Conditions</h3>
          <ul className="space-y-3 text-[14px] text-white/75 list-disc pl-5 leading-relaxed">
            <li>the course must be fulfilled within two weeks</li>
            <li>the payment of the abonnement is not refundable</li>
            <li>80% of the units must be fixed before the first lesson</li>
            <li>the remaining 20% can be fixed as soon as the date of the exam is known</li>
            <li>the fixed lessons are definitive and take place at any weather</li>
            <li>the school can cancel lessons on place because of stormwarning</li>
            <li>the student can cancel the lessons at latest 48 hours before it takes place</li>
            <li>should the practical exam take place later than 2 months after the start, at least 3 units more are necessary</li>
            <li>the course will take place in Stäfa</li>
            <li>a maximum of 3 persons can take part of the course</li>
            <li>the units will be extended to 2 hours (course with 2 students), respectively 2.5 hours (course with 3 students)</li>
          </ul>
        </div>
      </section>

      {/* Subscriptions */}
      <section id="subscriptions" className={`py-24 md:py-32 ${CONTAINER}`}>
        <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
          Step 03
        </span>
        <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-10 leading-tight">
          Subscriptions
        </h2>

        <h3 className="text-navy font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Basic</h3>
        <ul className={`space-y-2 text-[15px] text-navy/80 mb-12 list-disc pl-5 ${NUMS}`}>
          <li>valid one year</li>
          <li>price incl. insurance (CHF 80.00)</li>
          <li>price incl. organisation of the exam, using of the boat during the exam, crew (CHF 280.00)</li>
          <li>the official costs for the theory and the practical exam are not included</li>
          <li>the course will take place in Stäfa</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-5">
              Price for one person
            </h3>
            <div className="border border-navy/15">
              <PriceRow label="12 units (1.5 h) Monday – Thursday – 17.00 h" price="CHF 1'699.00" />
              <PriceRow label="12 units (1.5 h) Monday – Thursday as from 17.00 h and weekends" price="CHF 1'899.00" />
              <PriceRow label="Additional unit (1.5 h)" price="CHF 150.00" last />
            </div>
          </div>
          <div>
            <h3 className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-5">
              Price for two persons
            </h3>
            <div className="border border-navy/15">
              <PriceRow label="12 units (2 h) Monday – Thursday – 17.00 h" price="CHF 2'499.00" />
              <PriceRow label="12 units (2 h) Monday – Thursday as from 17.00 h and weekends" price="CHF 2'699.00" />
              <PriceRow label="Additional unit (2 h)" price="CHF 200.00" last />
            </div>
          </div>
        </div>

        <h3 className="text-navy font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
          Conditions
        </h3>
        <ul className="space-y-3 text-[14px] text-navy/70 list-disc pl-5 leading-relaxed">
          <li>Payment of the abonnement is not refundable</li>
          <li>the fixed lessons are definitive and take place at any weather</li>
          <li>the school can cancel lessons on place because of stormwarning</li>
          <li>the student can cancel the lessons at latest 48 hours before it takes place</li>
        </ul>
      </section>

      {/* Individual lessons */}
      <section id="individual" className="bg-sand py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs">
            Step 04
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-5 mb-6 leading-tight">
            Individual lessons
          </h2>
          <p className="text-navy/70 text-[14px] mb-10">Insurance CHF 80.00 is not included</p>
          <div className="border border-navy/15 bg-background">
            <PriceRow label="Test lesson (1.5 h)" price="CHF 175.00" />
            <PriceRow label="Private lesson (1 h)" price="CHF 120.00" />
            <PriceRow label="Organisation of the exam, using of the boat during the exam, crew" price="CHF 280.00" />
            <PriceRow label="Insurance" price="CHF 80.00" last />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="relative bg-navy text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden">
        <img
          src={lakeSunsetAsset.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        <div className="relative max-w-6xl mx-auto text-center border-b border-white/10 pb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight">
            And now get in touch with us.
          </h2>
          <div className="space-y-3 text-[15px] text-white/85">
            <p className="font-bold tracking-[0.15em] uppercase text-xs text-gold">
              Sailingschool Lang
            </p>
            <p>Wassersport &amp; Reise GmbH</p>
            <p>Dorfstrasse 33, 8849 Alpthal</p>
            <p>
              <a href="tel:+41449281818" className={`hover:text-gold transition-colors ${NUMS}`}>
                +41 44 928 18 18
              </a>
            </p>
            <p>
              <a href="mailto:info@sail.ch" className="hover:text-gold transition-colors">
                info@sail.ch
              </a>
            </p>
          </div>
          <a
            href="mailto:info@sail.ch"
            className="inline-block mt-10 px-10 py-4 bg-gold text-navy font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-white transition-colors"
          >
            Email us
          </a>
        </div>
        <div className={`relative max-w-6xl mx-auto pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 ${NUMS}`}>
          <div>© 1982–2026 Wassersport &amp; Reise GmbH</div>
          <div>sail.ch · Stäfa &amp; Zurich</div>
        </div>
      </footer>
    </div>
  );
}

function PriceRow({
  label,
  price,
  dark,
  last,
}: {
  label: string;
  price: string;
  dark?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 sm:px-7 py-5 ${
        last ? "" : dark ? "border-b border-white/10" : "border-b border-navy/10"
      }`}
    >
      <span className={`text-[14px] ${dark ? "text-white/85" : "text-navy/80"}`}>{label}</span>
      <span
        className={`font-sans font-semibold text-base tabular-nums [font-feature-settings:'tnum','lnum'] ${
          dark ? "text-gold" : "text-navy"
        } whitespace-nowrap`}
      >
        {price}
      </span>
    </div>
  );
}
