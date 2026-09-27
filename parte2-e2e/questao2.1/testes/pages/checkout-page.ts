import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async acessarSite() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async fazerLogin() {
    await this.page.locator('[data-test="username"]').fill('standard_user');

    await this.page.locator('[data-test="password"]').fill('secret_sauce');

    await this.page.locator('[data-test="login-button"]').click();

    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async adicionarProdutos() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    await this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  }

  async acessarCarrinho() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();

    await expect(
      this.page.locator('[data-test="cart-list"] .cart_item')
    ).toHaveCount(3);
  }

  async iniciarCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async preencherDados(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);

    await this.page.locator('[data-test="lastName"]').fill(lastName);

    await this.page.locator('[data-test="postalCode"]').fill(postalCode);

    await this.page.locator('[data-test="continue"]').click();
  }

async finalizarCompra() {

  // Validar que chegou na tela de resumo
  await expect(
    this.page.locator('.title')
  ).toHaveText('Checkout: Overview');

  // Finalizar compra
  await this.page.locator('[data-test="finish"]').click();

  // Validar confirmação do pedido
  await expect(
    this.page.locator('[data-test="complete-header"]')
  ).toHaveText('Thank you for your order!');
}
}

