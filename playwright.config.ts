import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // loads .env from ROOT

const browser = process.env.BROWSER || 'chromium';

function getProjects() {
  switch (browser) {
    case 'chromium':
      return [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
      ];

    case 'firefox':
      return [
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
      ];

    case 'webkit':
      return [
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },
      ];

    default:
      throw new Error(
        `Invalid BROWSER value in .env: ${browser}. Use chromium | firefox | webkit`
      );
  }
}

export default defineConfig({
  testDir: './src/tests',
    globalTeardown: require.resolve('./src/tests/setup/global-teardown'),

  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
  {
    name: 'setup',
    testMatch: /.*\.setup\.ts/,
  },
  {
    name: 'tests',
    dependencies: ['setup'],
  },
],
// ✅ ALWAYS an array of objects
});
