import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { playwright } from "@vitest/browser-playwright";

// Adjust to match your display resolution
const SCREEN_WIDTH = 3440; // window.screen.width
const SCREEN_HEIGHT = 1440; // window.screen.height
const WINDOW_WIDTH = Math.floor(SCREEN_WIDTH / 2);

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  test: {
    coverage: { include: ["src/**/*.{js,jsx,ts,tsx}"] },
    projects: [
      {
        test: {
          include: ["src/__tests__/node/**/*.test.{js,jsx,ts,tsx}"],
          name: "happy-dom",
          environment: "happy-dom",
        },
      },
      {
        test: {
          include: ["src/__tests__/browser/**/*.test.{js,jsx,ts,tsx}"],
          name: "browser",
          browser: {
            enabled: true,
            provider: playwright({
              launchOptions: {
                args: [
                  `--window-position=${SCREEN_WIDTH - WINDOW_WIDTH},0`,
                  `--window-size=${WINDOW_WIDTH},${SCREEN_HEIGHT}`,
                ],
              },
            }),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
