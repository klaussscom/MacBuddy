import SectionHeading from "./SectionHeading";
import { MoodImage } from "./Visuals";

function MoodSection({ content }) {
  const { moodSection } = content;

  return (
    <section id="moods" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={moodSection.eyebrow}
          title={moodSection.title}
          description={moodSection.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {moodSection.items.map((mood, index) => (
            <article
              key={mood.label}
              className="animate-fade-up group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/60 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(148,163,184,0.18)]"
              style={{ animationDelay: `${80 + index * 70}ms` }}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${mood.accent} opacity-80`} />
              <div className="relative">
                <MoodImage mood={mood.image} className="mb-6 h-20 w-20" />
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{mood.label}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">“{mood.description}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoodSection;
