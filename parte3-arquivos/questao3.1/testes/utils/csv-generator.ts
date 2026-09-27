import * as fs from 'fs';
import * as path from 'path';

function gerarCSV(quantidadeLinhas: number): void {
  const linhas: string[] = ['nome,email,idade,cidade'];

  const cidades: string[] = [
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    'Joinville',
    'Florianópolis'
  ];

  for (let i = 1; i <= quantidadeLinhas; i++) {
    const nome: string = `Usuario ${i}`;
    const email: string = `usuario${i}@email.com`;
    const idade: number = 18 + (i % 50);
    const cidade: string = cidades[(i - 1) % cidades.length];

    linhas.push(`${nome},${email},${idade},${cidade}`);
  }

  const caminho: string = path.join(
    __dirname,
    '..',
    'fixtures',
    `usuarios-${quantidadeLinhas}.csv`
  );

  fs.writeFileSync(caminho, linhas.join('\n'), 'utf-8');

  console.log(`CSV criado: ${caminho}`);
}

gerarCSV(10);
gerarCSV(100);
gerarCSV(1000);