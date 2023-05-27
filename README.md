<h1 align='center'>API Creation - Project TrybSmith</h1>
<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> • 
  <a href="#como-executar-o-projeto">Como Executar o Projeto</a> • 
  <a href="#endpoints">Endpoints</a> • 
  <a href="#autenticação-e-autorização">Autenticação e Autorização</a> •
  <a href="#contribuição">Contribuição</a> •
</p>
<h1 align='center'>
  <img src='https://avatars.githubusercontent.com/u/3591786?s=280&v=4' width="250" height="250"/>
  <img src='https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s1600/node-js-logo.png' width="250" height="250"/>
  <img src='https://ies.solutions/wordpress/wp-content/uploads/jwt.png' width="350" height="250"/>
</h1>
<h1 align='center'>Sobre o projeto</h1>
O projeto Trybesmith se trata de uma API RESTful que implementa métodos para gerenciar uma loja de itens medievais! Você poderá forjar cadastrar itens e, após fazer login/cadastro, registrar pedidos no banco de dados. Tudo isso com as boas práticas de POO!.

<br>
<h1 align='center'>Tecnologias utilizadas</h1>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MySQL</li>
  <li>Sequelize ORM</li>
  <li>JWT (JSON Web Token)</li>
  <li>bcryptjs</li>
</ul>
<h1 align='center'>Como executar o projeto</h1>

<p align='center'>Antes de começar a utilizar o Project TrybeSmith, é necessário seguir as etapas de instalação e configuração:</p>

``` bash

Clone o repositório
$ git clone https://github.com/<project-name>/...

# Acesse a pasta do projeto
$ cd project-trybesmit-api

# Instale as dependências do projeto
$ npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto
# Copie o conteúdo do arquivo .env.example para o arquivo .env
# Preencha as variáveis de ambiente no arquivo .env conforme necessário

# Inicie o servidor de desenvolvimento
$ npm start
# O servidor será executado na porta definida pela variável de ambiente PORT ou na porta 3000 por padrão.

```

<h1 align='center'>Endpoints</h1>

O servidor será executado na porta definida pela variável de ambiente `PORT` ou na porta 3001 por padrão.

## Endpoints Disponíveis

### Login

- `POST /login`: Retorna Um novo token.

### Orders

- `GET /orders`: Retorna uma lista de todas as ordens.
- `POST /orders`: Cria uma nova ordem.

### Usuários

- `GET /products`: Retorna uma lista de todos os produtos.
- `POST /products`: Cria um novo produto.

## Contato

<h1 align='center'>Autenticação e Autorização</h1>
O Project TrybeSmith utiliza autenticação baseada em token para proteger os endpoints e garantir que apenas usuários autorizados possam acessá-los. Para acessar os endpoints protegidos, é necessário incluir o token de acesso no cabeçalho da solicitação.

Para obter um token de acesso, você precisa se registrar e autenticar com suas credenciais de usuário. O token de acesso será retornado como resposta à solicitação de autenticação bem-sucedida.

Certifique-se de incluir o token de acesso no cabeçalho Authorization da seguinte maneira:

makefile
Copy code
Authorization: Bearer <token>
Substitua <token> pelo token de acesso recebido.

<h1 align='center'>Contribuição</h1>
Se você deseja contribuir com o Project Blogs API, fique à vontade para abrir um pull request no repositório oficial. Certifique-se de seguir as diretrizes de contribuição e fornecer uma descrição clara das alterações propostas.

<h1 align='center'>Contato</h1>

<p align='center'>Para mais informações sobre o projeto, entre em contato comigo por meio das seguintes redes sociais:Para mais informações sobre o projeto, entre em contato comigo por meio das seguintes redes sociais:</p>

<ul>
  <li>E-mail: josegalvesg@gmail.com</li>
  <li>LinkedIn: https://www.linkedin.com/in/joseg-alves/</li>
  <li>https://joseg-alvesg-portfolio.vercel.app</li>
</ul>
