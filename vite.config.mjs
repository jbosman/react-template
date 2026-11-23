import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import babel from "@rolldown/plugin-babel";
import { playwright } from "@vitest/browser-playwright";

// Adjust to match your display resolution
const SCREEN_WIDTH = 3440; // Look for window.screen.width in your browser
const SCREEN_HEIGHT = 1440; // Look for window.screen.height in your browser
const WINDOW_WIDTH = Math.floor(SCREEN_WIDTH / 2);

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
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
