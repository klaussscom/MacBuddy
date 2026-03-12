import { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import MoodSection from "./components/MoodSection";
import SiteFooter from "./components/SiteFooter";
import WhySection from "./components/WhySection";
import { siteCopy } from "./data/siteContent";

function getInitialLocale() {
  const stored = window.localStorage.getItem("macbuddy-locale");
  if (stored === "en" || stored === "zh") {
    return stored;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale);
  const content = siteCopy[locale];

  useEffect(() => {
    document.documentElement.lang = content.meta.lang;
    document.title = content.meta.title;
    window.localStorage.setItem("macbuddy-locale", locale);
  }, [content.meta.lang, content.meta.title, locale]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f5f7fb] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96),transparent_34%),radial-gradient(circle_at_right_12%_top_10%,rgba(115,162,255,0.18),transparent_24%),radial-gradient(circle_at_left_20%_bottom_10%,rgba(255,193,122,0.14),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#eef3fb_45%,#f7f8fc_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.15),transparent_85%)]" />

      <main>
        <HeroSection content={content} locale={locale} setLocale={setLocale} />
        <FeaturesSection content={content} />
        <MoodSection content={content} />
        <HowItWorksSection content={content} />
        <WhySection content={content} />
        <CTASection content={content} />
      </main>

      <SiteFooter content={content} />
    </div>
  );
}

export default App;
