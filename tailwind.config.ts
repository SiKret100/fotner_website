import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'integral': ["'Integral CF'", "sans-serif"],
        'integral-bold': ["'Integral CF'", "sans-serif"], // Handles bold style via CSS
        'integral-medium': ["'Integral CF'", "sans-serif"], // Handles medium style via CSS
        'integral-heavy': ["'Integral CF Heavy'", "sans-serif"],
        'integral-extra': ["'Integral CF Extra'", "sans-serif"],
        'integral-oblique': ["'Integral CF Oblique'", "sans-serif"],
        'integral-medium-oblique': ["'Integral CF Medium Oblique'", "sans-serif"],
        'integral-heavy-oblique': ["'Integral CF Heavy Oblique'", "sans-serif"],
        'integral-extra-oblique': ["'Integral CF Extra Bold Oblique'", "sans-serif"],
        'integral-bold-oblique': ["'Integral CF Bold Oblique'", "sans-serif"],
        'integral-demi-bold': ["'Integral CF Demi'", "sans-serif"],
        'integral-demi-oblique': ["'Integral CF Demi Bold Oblique'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
