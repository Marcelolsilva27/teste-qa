import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './testes',

  fullyParallel: true,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});