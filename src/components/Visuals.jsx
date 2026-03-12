import { useEffect, useState } from "react";
import iconImage from "../icon.png";
import criticalImage from "../Critical.png";
import excellentImage from "../Excellent.png";
import overheatingImage from "../Overheating.png";
import slightlyBusyImage from "../Slightly Busy.png";
import underStressImage from "../Under Stress.png";

function IconBase({ children, className = "" }) {
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,240,255,0.92))] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_20px_rgba(148,163,184,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}

export function FeatureIcon({ type }) {
  const common = "h-6 w-6 stroke-[1.8]";

  if (type === "monitor") {
    return (
      <IconBase>
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="11" rx="2.5" stroke="currentColor" />
          <path d="M8 19h8M10 16v3M14 16v3" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M7 12l2.2-2.2 2 2L14.5 8l2.5 2.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconBase>
    );
  }

  if (type === "mood") {
    return (
      <IconBase>
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 21c4.971 0 9-4.029 9-9 0-2.417-.952-4.611-2.504-6.231A8.966 8.966 0 0 0 12 3a8.967 8.967 0 0 0-6.496 2.769A8.971 8.971 0 0 0 3 12c0 4.971 4.029 9 9 9Z"
            stroke="currentColor"
          />
          <path d="M8.5 10h.01M15.5 10h.01" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M8 14.2c1 .9 2.3 1.3 4 1.3s3-.4 4-1.3"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </IconBase>
    );
  }

  if (type === "menu-bar") {
    return (
      <IconBase>
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" />
          <path d="M6.5 8h11M8 12.5h8M9.5 16h5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </IconBase>
    );
  }

  return (
    <IconBase>
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M7 7.5h10M7 12h10M7 16.5h6" stroke="currentColor" strokeLinecap="round" />
        <rect x="4" y="4.5" width="16" height="15" rx="4" stroke="currentColor" />
      </svg>
    </IconBase>
  );
}

export function BuddyBlobIcon({ className = "" }) {
  return (
    <img
      src={iconImage}
      alt="Mac Buddy app icon"
      className={`object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

function useTransparentImage(src, enabled) {
  const [processedSrc, setProcessedSrc] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setProcessedSrc(null);
      return;
    }

    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;

    image.onload = () => {
      if (cancelled) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");

      if (!context) {
        setProcessedSrc(null);
        return;
      }

      context.drawImage(image, 0, 0);
      const frame = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = frame;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const brightness = (r + g + b) / 3;
        const chroma = max - min;

        if (brightness > 236 && chroma < 18) {
          data[i + 3] = 0;
        }
      }

      context.putImageData(frame, 0, 0);
      setProcessedSrc(canvas.toDataURL("image/png"));
    };

    return () => {
      cancelled = true;
    };
  }, [enabled, src]);

  return processedSrc;
}

const moodImages = {
  excellent: excellentImage,
  "slightly-busy": slightlyBusyImage,
  "under-stress": underStressImage,
  critical: criticalImage,
  overheating: overheatingImage,
};

export function MoodImage({ mood, className = "" }) {
  const src = moodImages[mood] || excellentImage;
  const transparentSrc = useTransparentImage(src, mood === "overheating");

  return (
    <img
      src={transparentSrc || src}
      alt=""
      aria-hidden="true"
      className={`object-contain drop-shadow-[0_18px_36px_rgba(148,163,184,0.18)] ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
