3.1.a) Como validaria que todas as 1000 linhas foram processadas corretamente?

R - Eu verificaria a quantidade de registros do arquivo original e compararia com a quantidade de registros que foram processados pelo sistema. Como ferramenta auxiliar, usaria o Beyond Compare para fazer a comparação entre os arquivos e assim identificar as possíveis diferença em dados.

//*****

3.1.b) Como testaria cenários de erro (arquivo corrompido, dados inválidos)?

R - Eu testaria enviando um arquivo inválido e verificaria se o sistema identifica o erro e impede a importação do arquivo, e ao final desse teste com erro apresentaria uma mensagem de erro em tela.