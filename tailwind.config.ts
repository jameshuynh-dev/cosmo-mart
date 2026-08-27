import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        bg: "#1a1a1a",
        coral: "#F4623A",
        lavender: "#9B8AFB",
        mint: "#7ED957",
        sky: "#7EC8E3",
        pink: "#FDA4CB",
        yellow: "#F4C430",
        ink: "#111111",
      },
      borderWidth: {
        "3": "3px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        hard: "4px 4px 0px 0px #111111",
      },
    },
  },
} satisfies Config;
