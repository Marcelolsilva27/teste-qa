import { test, expect } from '@playwright/test';

test('Login e reutilização do token', async ({ request }) => {

  const loginResponse = await request.post(
    'https://reqres.in/api/login',
    {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginData = await loginResponse.json();

  const token = loginData.token;

  expect(token).toBeDefined();

  const response = await request.get(
    'https://reqres.in/api/users/2',
    {
      headers: {
        'Authorization': token
      }
    }
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.data.id).toBe(2);
});