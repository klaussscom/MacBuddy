function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 shadow-[0_10px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
