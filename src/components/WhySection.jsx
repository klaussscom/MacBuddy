import SectionHeading from "./SectionHeading";

function WhySection({ content }) {
  const { whySection } = content;

  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-7 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl md:p-9">
            <SectionHeading
              eyebrow={whySection.eyebrow}
              title={whySection.title}
              description={whySection.description}
            />
          </div>

          <div className="grid gap-4">
            {whySection.points.map((point, index) => (
              <article
                key={point}
                className="animate-fade-up flex items-start gap-4 rounded-[1.7rem] border border-white/70 bg-white/60 p-5 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl"
                style={{ animationDelay: `${100 + index * 80}ms` }}
              >
                <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{point}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {whySection.pointDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
