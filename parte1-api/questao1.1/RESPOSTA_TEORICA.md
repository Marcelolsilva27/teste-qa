Perguntas Teóricas

1.1.a) Como você estruturaria seus testes automatizados para validar que o rate limiting está funcionando corretamente, e como testaria o comportamento quando o limite é excedido?

R- Estruturaria testes que realize várias requisições em sequência validando o comportamento dentro da API. Inicialmente verificaria se as requisições foram todas processadas e retonaram com sucesso ( 200)  e posteiormente continuária enviado as requisições até ultrapassar  o limite

//****

1.1.b) Como você implementaria um mecanismo simples para obter e reutilizar um token de autenticação entre os testes, evitando fazer login a cada teste?

R- Poderia colocar dentro da fixture um função responsável por realizar o login e obter o token de autenticação, e assim que obtido esse token armazena-lo e reutilizado para os demais testes evitando assim um novo login para cada exeução e também gerando mas rápidez na execução dos cenários 

//****

1.1.c) Como você detectaria que um token expirou e trataria esse cenário no seu teste?

R- Verificando a resposda da API que vai retornar 401- nao autorizado e mediante a isso obteria um novo tokem através do processo de autenticação.