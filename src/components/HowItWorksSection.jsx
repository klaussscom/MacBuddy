import SectionHeading from "./SectionHeading";

function HowItWorksSection({ content }) {
  const { howItWorksSection } = content;

  return (
    <section id="how-it-works" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow={howItWorksSection.eyebrow}
            title={howItWorksSection.title}
            description={howItWorksSection.description}
          />

          <div className="grid gap-4">
            {howItWorksSection.steps.map((step, index) => (
              <article
                key={step.number}
                className="animate-fade-up rounded-[1.8rem] border border-white/70 bg-white/60 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl"
                style={{ animationDelay: `${100 + index * 90}ms` }}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold tracking-[0.2em] text-white">
                    {step.number}
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
