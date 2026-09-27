## Teste QA Sênior - Marcelo luiz da Silva

## Tecnologias Utilizadas

Node.js 18+
Playwright
TypeScript
Testes E2E
Testes de arquivos
Git

## Instalação

Na raiz do projeto, execute:

npm install
Execução dos Testes
Todos os testes
npm test

## Parte 1 - Testes de API

A Parte 1 possui testes de API utilizando Playwright e TypeScript.

Para executar os testes da Questão 1.1:

cd parte1-api/questao1.1
npx playwright test


## Parte 2 - Testes E2E

A Parte 2 possui testes E2E utilizando Playwright e TypeScript.

Para executar os testes da Questão 2.1:

cd parte2-e2e/questao2.1
npx playwright test

Para executar visualizando no navegador:

npx playwright test --headed


## Parte 3 - Testes com Arquivos

A Parte 3 possui testes relacionados à importação e validação de arquivos CSV.

cd parte3-arquivos/questao3.1
npx playwright test


## Partes 4 e 5

As Partes 4 e 5 possuem questões teóricas relacionadas a testes mobile, mocks e integrações.

## Estrutura do Projeto

Teste/
│
├── parte1-api/
│   └── questao1.1/
│       ├── testes de API
│       └── RESPOSTA_TEORICA.md
│
├── parte2-e2e/
│   └── questao2.1/
│       ├── testes/
│       │   ├── checkout-flow.spec.ts
│       │   ├── fixtures/
│       │   │   └── checkout-data.ts
│       │   └── pages/
│       │       └── checkout-page.ts
│       └── RESPOSTA_TEORICA.md
│
├── parte3-arquivos/
│   └── questao3.1/
│       ├── testes/
│       └── RESPOSTA_TEORICA.md
│
├── parte4-mobile/
│
├── parte5-mocks/
│
├── tests/
│
├── playwright.config.ts
├── package.json
└── README.md

 
## Observações

Durante o desenvolvimento foram encontradas algumas diferenças entre a estrutura inicial do projeto e a organização necessária para executar as diferentes partes do teste.

Foi utilizada uma configuração específica de Playwright na Questão 2.1 para manter o isolamento dos testes e evitar conflitos entre diferentes instalações do Playwright existentes nas partes do projeto.

Os testes foram desenvolvidos utilizando TypeScript, mantendo a estrutura criada durante a implementação.



