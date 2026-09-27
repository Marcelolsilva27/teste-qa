import { test, expect } from '@playwright/test';

import { CheckoutPage } from './pages/checkout-page';

import { gerarDadosCheckout } from './fixtures/checkout-data';

test.afterEach(async ({ page, context }) => {

  // Limpar localStorage e sessionStorage
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  // Limpar cookies
  await context.clearCookies();

});

test('Fluxo completo de checkout no SauceDemo', async ({ page }) => {

  // Criar o Page Object
  const checkout = new CheckoutPage(page);

  // Gerar dados dinâmicos
  const dados = gerarDadosCheckout();

  // Acessar o site
  await checkout.acessarSite();
  await page.waitForTimeout(3000);

  // Efetua login
  await checkout.fazerLogin();
  await page.waitForTimeout(3000);

  // Adicionar os produtos
  await checkout.adicionarProdutos();
  await page.waitForTimeout(3000);

  // carrinho
  await checkout.acessarCarrinho();
  await page.waitForTimeout(3000);

  // checkout
  await checkout.iniciarCheckout();
  await page.waitForTimeout(3000);

 // faz o preenchimento dos daos gerados automaticamente
  await checkout.preencherDados(
    dados.firstName,
    dados.lastName,
    dados.postalCode
  );

  await page.waitForTimeout(3000);

  // Finalizar compra e validar confirmação
  await checkout.finalizarCompra();

  await page.waitForTimeout(3000);

});