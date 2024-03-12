import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "../../packages/**/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

// import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

// const config: Pick<Config, "content" | "presets"> = {
//   content: ["./src/app/**/*.tsx"],
//   presets: [sharedConfig],
// };

// export default config;
