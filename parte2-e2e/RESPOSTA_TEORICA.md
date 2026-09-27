2.1.a) Como você garantiria que cada execução de teste use um cupom válido diferente?

R- Utilizo um gerador de cupom, assim como temos gerador de cpf, gerador de cnpj, gerado de email, usaria essa fonte controladora para gerar cupons aleatórios e mantendo um controle para evitar a reutilização desses cupons que ja foram gerados anteriormente.


//****


2.1.b) Como você validaria a confirmação do pedido sem depender de email real?

R - Eu validaria diretamente em tela após a conclusão da compra, ou seja, ao abrir o modal de confirmação validaria informações como Pedido realizado , ID do pedido. Nesse cenários meu teste não dependeria do envio ou recebimneto de e-mail real.