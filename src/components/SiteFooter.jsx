import { downloadUrl } from "../data/siteContent";
import { BuddyBlobIcon } from "./Visuals";

function SiteFooter({ content }) {
  const { footer, navigation } = content;

  return (
    <footer className="px-4 pb-10 md:px-6 md:pb-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/50 px-6 py-8 shadow-[0_18px_50px_rgba(148,163,184,0.12)] backdrop-blur-xl md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="inline-flex items-center gap-3">
              <BuddyBlobIcon className="h-10 w-10 shrink-0" />
              <span className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Mac Buddy</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div>
              <div className="text-sm font-semibold text-slate-950">{footer.navTitle}</div>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                {navigation.map((item) => (
                  <a key={item.label} href={item.href} className="transition hover:text-slate-950">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-950">{footer.downloadTitle}</div>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <a href={downloadUrl} className="transition hover:text-slate-950">
                  {footer.downloadLabel}
                </a>
                <a href="https://macbuddy.app" className="transition hover:text-slate-950">
                  macbuddy.app
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200/70 pt-5 text-sm text-slate-500">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
