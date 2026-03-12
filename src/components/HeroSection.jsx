import { downloadUrl } from "../data/siteContent";
import { BuddyBlobIcon, MoodImage } from "./Visuals";

function MiniMood({ mood, label, active, currentMoodLabel }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl transition duration-300 ${
        active
          ? "border-white/80 bg-white/80 shadow-[0_20px_40px_rgba(99,102,241,0.16)]"
          : "border-white/50 bg-white/45"
      }`}
    >
      <MoodImage mood={mood} className="h-10 w-10 shrink-0" />
      <div>
        <div className="text-sm font-medium text-slate-900">{label}</div>
        <div className="text-xs text-slate-500">{currentMoodLabel}</div>
      </div>
    </div>
  );
}

function HeroSection({ content, locale, setLocale }) {
  const { hero, navigation } = content;
  const activeLocaleLabel = locale === "en" ? "中" : "EN";

  return (
    <section className="relative px-4 pb-16 pt-6 md:px-6 md:pb-24 md:pt-8">
      <div className="mx-auto max-w-7xl">
        <header className="glass-panel mb-8 flex flex-col gap-4 rounded-[2rem] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7">
          <a href="#top" className="inline-flex items-center gap-3">
            <BuddyBlobIcon className="h-11 w-11 shrink-0" />
            <div>
              <div className="text-base font-semibold tracking-[-0.03em] text-slate-950">Mac Buddy</div>
              <div className="text-sm text-slate-500">{hero.brandTagline}</div>
            </div>
          </a>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600 md:gap-6">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "zh" : "en")}
              className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              aria-label={hero.languageLabel}
            >
              {activeLocaleLabel}
            </button>
            <a href={downloadUrl} download className="button-primary">
              {hero.primaryCta}
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10"
        >
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl">
              {hero.builtFor}
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.07em] text-slate-950 md:text-7xl lg:text-[5.5rem]">
              {hero.headline}
            </h1>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={downloadUrl} download className="button-primary text-center">
                {hero.primaryCta}
              </a>
              <a href="#features" className="button-secondary text-center">
                {hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {hero.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/60 bg-white/50 p-4 shadow-[0_12px_30px_rgba(148,163,184,0.1)] backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">{item.title}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:140ms]">
            <div className="relative rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_30px_80px_rgba(148,163,184,0.18)] backdrop-blur-2xl md:p-6">
              <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.32),transparent_70%)] blur-3xl" />

              <div className="relative rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(242,247,255,0.82))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                    {hero.mockup.appName}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className="text-sm text-slate-300">{hero.mockup.moodLabel}</div>
                        <div className="mt-1 text-3xl font-semibold tracking-[-0.04em]">{hero.mockup.moodValue}</div>
                      </div>
                      <MoodImage mood="excellent" className="h-14 w-14" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        {hero.mockup.noteLabel}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-200">
                        {hero.mockup.noteText}
                      </p>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {hero.mockup.miniMoods.map((item, index) => (
                        <MiniMood
                          key={item.label}
                          mood={item.mood}
                          label={item.label}
                          currentMoodLabel={hero.mockup.currentMood}
                          active={index === 0}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_45px_rgba(148,163,184,0.14)] backdrop-blur-xl">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500">{hero.mockup.overviewLabel}</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                            {hero.mockup.overviewTitle}
                          </div>
                        </div>
                        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                          {hero.mockup.stable}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {hero.mockup.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-2xl bg-slate-50 p-4">
                            <div className="text-sm text-slate-500">{metric.label}</div>
                            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{metric.value}</div>
                            {metric.progress ? (
                              <div className="mt-2 h-2 rounded-full bg-slate-200">
                                <div
                                  className={`h-2 rounded-full ${metric.color}`}
                                  style={{ width: metric.progress }}
                                />
                              </div>
                            ) : null}
                            {metric.subtext ? (
                              <div className="mt-2 text-sm text-slate-500">{metric.subtext}</div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_45px_rgba(148,163,184,0.14)] backdrop-blur-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500">{hero.mockup.previewLabel}</div>
                          <div className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                            {hero.mockup.previewTitle}
                          </div>
                        </div>
                        <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                          {hero.mockup.previewBadge}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-[1.25rem] bg-[#f6f9ff] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                        <div className="flex items-center gap-3">
                          <MoodImage mood="excellent" className="h-9 w-9" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">Mac Buddy</div>
                            <div className="text-xs text-slate-500">{hero.mockup.previewStatus}</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          {hero.mockup.previewCpu}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
