import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          950: "#05060A",
          900: "#0A0B11",
          800: "#0F1118",
          700: "#161922",
          600: "#1E2230",
          500: "#2A2F40",
        },
        mist: {
          50: "#F5F7FB",
          100: "#E6E9F2",
          200: "#C7CDDC",
          300: "#9AA3B8",
          400: "#6B7388",
          500: "#4A5063",
        },
        mint: {
          50: "#E6FFF7",
          100: "#B8FFE6",
          200: "#7AF4CC",
          300: "#3EE6B0",
          400: "#1FD699",
          500: "#13B582",
          600: "#0E8C66",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-display)", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(62,230,176,0.18), transparent)",
        "radial-glow-blue":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.18), transparent)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "gradient": "gradient 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
