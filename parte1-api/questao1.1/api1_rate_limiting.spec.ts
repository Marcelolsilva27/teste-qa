import { test, expect } from '@playwright/test';

test('Headers - validar headers', async ({ request }) => {
  const response = await request.get(
    'https://api.github.com/users/github'
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.login).toBe('github');

  const limit = response.headers()['x-ratelimit-limit'];
  const remaining = response.headers()['x-ratelimit-remaining'];
  const reset = response.headers()['x-ratelimit-reset'];

  expect(limit).toBeDefined();
  expect(remaining).toBeDefined();
  expect(reset).toBeDefined();

  console.log('Rate Limit:', limit);
  console.log('Remaining:', remaining);
  console.log('Reset:', new Date(Number(reset) * 1000));
});


test('Rate Limiting - detectar limite atingido', async ({ request }) => {
  const response = await request.get(
    'https://api.github.com/users/github'
  );

  if (response.status() === 403) {
    const remaining = response.headers()['x-ratelimit-remaining'];

    expect(remaining).toBe('0');

    console.log('Rate Limit atingido.');
  } else {
    expect(response.status()).toBe(200);

    console.log('Rate Limit ainda não foi atingido.');
  }
});

