import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './testes',

  use: {
    ...devices['Desktop Chrome'],
  },
});