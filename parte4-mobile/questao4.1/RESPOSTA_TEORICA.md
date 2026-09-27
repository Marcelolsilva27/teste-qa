
4.1.a) Qual ferramenta você escolheria para automação mobile (Appium, Detox, Maestro, etc.) e por quê? Compare pelo menos 2 opções considerando o contexto descrito.

R - Escolheria a Appium por permite automatizar aplicações tanto em Android como iOS, possuindo também suporte em diferentes linguagens Java Script, Type Script, Ruby, Python, C#, vantagem também que é uma ferramenta de codigo aberto de teste de ponta a ponta ( E2E ), o que facilita as integrações e nesse caso em espefico desse projeto fica mais coerente nessa  stack a utilização do TypeScript. 
Ja o Detox seria um segunda opção, também utilizado para aplicações Android e iOS porem limitada para testar aplicatico especificamente React Native.

//****

4.1.b) Como você mockaria geolocalização, câmera e notificações push em testes automatizados? Descreva a abordagem para cada um.


GEOLOCALIZAÇÃO:Nesse caso eu passaria as coordenadas simulando a longitude e latitude  e assim o aplicativo recebendo a localização continuaria com as validações, ou seja, como exemplo localizaria serviços ou estabelecimentos nas proximidades dessa coordenadas que foram fornecidas fazendo toda a interface com o usuário.

CÂMERA: Eu poderia fornecer uma foto simulando a imagem capturada pela câmera na tela do dispositivo validando se o aplicativo processa essa informação corretmanete ou seja, se ele faz os proximos requisitos funcionais, como exemplo se o aplicaitvo grava na galeria do Dispositivo ess foto, se e possével editar a foto, se e possívem encaminhar. 

NOTIFICAÇÃO PUSH :Eu simularia o recebimento de uma notificação. Como exemplo em rede social " Você tem uma nova solitação de Conexão", e verificaria se o aplicativo apresenta a notificação de forma correta . E ao clicar nessa notificação valida se é realizado o redirecionamento desse usuário para tela correta que nesse exemplo seria o perfil do usuário no Linkedin.

//****

4.1.c) Qual estratégia você usaria para executar os mesmos testes em iOS e Android, minimizando duplicação de código?

R-Eu criaria uma estrutura de testes compartilhados entre as plataformas Android e iOS. Dessa maneira, evitaria a duplicidade dos cenários. Esses testes conteriam as regras e validações comuns, enquanto as particularidades de cada plataforma ficariam isoladas em uma camada específica. Isso também facilitaria a manutenção dos cenários, pois as regras e validações ficariam centralizadas, evitando a necessidade de realizar a mesma alteração em dois pontos diferentes.

//****

4.1.d) Descreva, em alto nível, como seria o setup de ambiente para rodar esses testes localmente e em CI/CD (passos principais, sem precisar executar).

R-Para executar o teste local, inicialmente eu prepararia o ambiente instalando e configutando o Appium com emuladores para o Android e Ios e também o aplicativo que será testado. No CI/CD faria uma configuração de pipeline que prepara o ambiente automaticamente e instala o aplicativo e executa os testes e ao finalizar efetua a geração de relatório.

//****

4.1.e) Como você validaria sincronização de dados e comportamento offline sem depender de um backend real?

R-  Poderia simular a falta de internet no momento de uma publicação em rede social, verificando se a publicaçao fica salva localmente no APP e quando a conexão fosse reestabelecida a sincronização iria ocorrer. Utilizaria um backend simulado para controlar as respostas.