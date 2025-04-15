// @ts-check
import { defineConfig, devices } from '@playwright/test';

const browsers = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
  {
    name: 'msedge',
    use: { ...devices['Desktop Edge'], channel: 'msedge' },
  },
  {
    name: 'chrome',
    use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  },
];

const pods = [
  'Pod-1',
  'Pod-2',
  'Pod-3',
  'Pod-4',
  'Pod-5',
  'Pod-6',
  'Pod-7',
  'Pod-8',
  'Pod-9',
  'Pod-10',
  'Pod-11',
];

const projects = [];

for (const pod of pods) {
  for (const browser of browsers) {
    projects.push({
      name: `${pod} - ${browser.name}`,
      testDir: `./${pod}`,
      use: browser.use,
    });
  }
}

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects,
});
