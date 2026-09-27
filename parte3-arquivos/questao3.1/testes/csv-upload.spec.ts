import { test, expect } from '@playwright/test';
import path from 'path';

// UPLOAD DE CSC VÁLIDO

test('Upload de CSV válido', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const arquivo = path.join(
    __dirname,
    'fixtures',
    'usuarios-10.csv'
  );

  await page.locator('#file-upload').setInputFiles(arquivo);

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
});

// Abre a página de upload.
// Localiza usuarios-10.csv.
// Faz o upload com Playwright.
// Clica em Upload.
// Verifica se aparece File Uploaded!.

//UPLOAD DE CSV VAZIO

test('Upload de CSV vazio', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const arquivo = path.join(
    __dirname,
    'fixtures',
    'csv-vazio.csv'
  );

  await page.locator('#file-upload').setInputFiles(arquivo);

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
});

//UPLOAD DE ARQUIVO COM FORMATO INCORRETO

test('Upload de arquivo com formato incorreto', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const arquivo = path.join(
    __dirname,
    'fixtures',
    'arquivo-formato-errado.txt'
  );

  await page.locator('#file-upload').setInputFiles(arquivo);

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
});

 // IPLOAD DE CSV MALFORMATADO
 
test('Upload de CSV malformado', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const arquivo = path.join(
    __dirname,
    'fixtures',
    'csv-malformado.csv'
  );

  await page.locator('#file-upload').setInputFiles(arquivo);

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
});