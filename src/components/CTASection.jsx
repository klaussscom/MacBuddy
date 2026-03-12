import { downloadUrl } from "../data/siteContent";

function CTASection({ content }) {
  const { ctaSection } = content;

  return (
    <section className="px-4 pb-20 pt-8 md:px-6 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(237,243,255,0.72))] px-6 py-12 shadow-[0_30px_80px_rgba(148,163,184,0.18)] backdrop-blur-2xl md:px-12 md:py-16">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                {ctaSection.eyebrow}
              </div>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
                {ctaSection.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {ctaSection.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={downloadUrl} className="button-primary text-center">
                {ctaSection.primaryCta}
              </a>
              <a href="#top" className="button-secondary text-center">
                {ctaSection.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
