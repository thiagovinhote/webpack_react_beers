# Web App Beers

Aplicação para listagem de cervejas utilizando ReactJS, configurado com webpack.

Aplicação rodando em um servidor, disponível em https://webappreact.herokuapp.com `[Heroku]`

- Configuração do Eslint com padrão utilizado pela Airbnb.
- Axios para requisição http
- Redux, React-Redux, Redux-Saga e ReduxSauce para controle de estado da aplicação
- Styled-Components para componentes estilizados, junto com styles-inline
- Utilizando Jest, Enzyme, Redux-Mock-Store e Redux-Saga-Tester para realizar os testes.

## Setup

Run: `npm install`

## Server

Run: `npm start`

## Deploy

Run: `npm run build`

- Após executar o comando é criada uma pasta chamada `dist` com dois arquivos.
> Para executar a versão de produção: **npm run dist**
> Para executar *npm run dist* primeiro crie uma build com **npm run build**

## Test

Run: `npm test`

> Para verificar cobertura dos testes execute: **npm run coverage**
