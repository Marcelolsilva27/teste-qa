export function gerarDadosCheckout() {
  const numero = Date.now();

  return {
    firstName: `Marcelo${numero}`,
    lastName: `Teste${numero}`,
    postalCode: `${Math.floor(10000000 + Math.random() * 90000000)}`
  };
}