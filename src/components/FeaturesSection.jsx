import SectionHeading from "./SectionHeading";

function FeatureTextCard({ card, delay = 0 }) {
  return (
    <article
      className="animate-fade-up rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(148,163,184,0.18)] md:p-7"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {card.label}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-600">{card.description}</p>
    </article>
  );
}

function FeaturesSection({ content }) {
  const { featuresSection } = content;

  return (
    <section id="features" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={featuresSection.eyebrow}
          title={featuresSection.title}
          description={featuresSection.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuresSection.cards.map((card, index) => (
            <FeatureTextCard key={card.kind} card={card} delay={80 + index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
