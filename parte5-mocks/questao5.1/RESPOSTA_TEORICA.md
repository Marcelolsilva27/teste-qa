

5.1.a) Como você testaria essas integrações sem afetar os ambientes reais dos marketplaces?

R - Eu nao faria testes automatizados em API reais desses Marketplace, pois corre o risco de criar produtos. alterar preços ou outra informação importante. Nesse caso criaria um ambiente  de teste usando API simulada ( MOCK), simulando resposta com sucesso e validando as integrações sem gerar impactos em ambiente de produção.


//****


5.1.b) Como implementaria uma estratégia de mock para simular respostas? Qual(is) ferramenta(s) você usaria (MSW, JSON Server, WireMock, etc.) e por quê?


R - A estratégia de Mock dependeria da complexidade das respostas, ou seja, poderia utilizar uma ferramenta de Mock para criar uma API simulada. Nesse caso para respostas mais robustas usaria o MSW e para testes mais básicos e de respostas simples usaria JSON Server. Indenpendente da opção a vantagem é permitir testar diferentes situações sem precisa depender do marktplace.


//****


5.1.c) Descreva como você simularia, em nível de mock, os seguintes cenários: erro 500, timeout e rate limiting (429). O que cada um desses testes deve validar no seu sistema?

R-  Utilizaria um Mock para simular as diferentes respostas da API externe verificando o comportamento do sistema.

ERRO 500: Eu faria o Mock propositalmente gerar o erro 500 internal server error, simulando falha no servidor do Marketplace. O fluxo desse teste é validar se o erro é identificado e registrado.
 
ERRO TIMEOUT: Nesse cenário eu faria o Mock demorar para responder ou até mesmo não reponder no tempo esperado. Nesse caso o fluxo de teste seria validar se o sistema possui um tempo limite identificando o timeout.

RATE LIMIING ( 429 ): Nessa situação faria o Mock simular o retorno onde o limite de requisições do marketplace fosse atingido. Nesse caso o fluxo de teste devera validar se o sistema identifica o rate limiting e faz novas tentativas de conexão. Nessa situação verifico se o sistema esta preparado para situações de falha e limitações da API externa.


//****

5.1.d) Como você validaria que o payload enviado/recebido está no formato esperado (schema validation)? Onde essa validação entraria no seu pipeline de testes?

R- Nessa situação posso usar validação via schema, ou seja, garantindo que os dados enviado e recebidos pela API realmente estão certos e no formato esperado. Na Pipilene de testes poderia montar o seguinte fluxo de testes:

1º Realizar a requisição 
2º Receber a resposta
3º Validar o Schema
4º Validar as regras de negócio
5º informar de falhou e passou
6º Geração de relatório

//****

5.1.e) Qual sua visão sobre a diferença entre testes com mock e testes de contrato (contract testing) nesse cenário de integração com marketplaces? Quando usar cada um?


R - Teste com Mock faz a simulação da API onde permite testar o comportamento do meu sistema , ou seja posso testar que o Mercado livre respondeu com sucesso seja erro 500, erro 429 para o meu sistema, é como se eu tivesse um mercadolivre Fake para testar como o sistema reage. Já no caso do teste de contato vertifica se demais sistemas envovidos seguem a mesma comunicação em relação aos dados enviados, ou seja, evita que os testes sejam quebrados quando integram com outros sistemas. De forma resumida o MOCK imita um sistema e o contract testing verifica o acordo entre os sistemas.