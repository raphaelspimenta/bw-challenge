
# Server Driven UI - Challenge

Teste de criação de uma solução Server Driven UI.
  
#### 1 - Solução criada
A solução criada é agnóstica de framework e foram utilizadas as seguintes ferramentas para auxílio do desenvolvimento:
* [Yarn](https://yarnpkg.com/) para gestão das dependências do projeto
* [Babel](https://babeljs.io/) para transpilação do código e utlização de novas features do Javascript
* [Webpack](https://webpack.js.org/) para criação do bundle de nossa aplicação e execução da aplicação no browser 

## Estrutura de pastas
* **public**: pasta para gerir assets públicos como `index.html`
* **src**: pasta do desenvolvimento de fato e que contém toda a lógica da solução
  * **actions**: contém o mapa de funções que são executadas em ações retornadas pelo JSON de dados.
  * **components**: pasta para organizar a criações dos componentes visuais
  * **core**: pasta para organizar assets, utils, constants e informações dessa natureza
  * **state**: pasta para gerir o estado da aplicações. A solução usada aqui é bem simples a fim de demonstração
  
#### 2 - Executando o projeto

1. Instalar as dependências do projeto
```
yarn
``` 
2. Executando o projeto
- Executar em modo desenvolvimento
```
yarn dev
```
- Criar bundle de produção
```
yarn start
```
