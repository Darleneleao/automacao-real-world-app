# Real World App

O Real World App é uma plataforma simulada criada para demonstrar o uso real de padrões e estratégias de testes com Cypress. Ele é uma ferramenta poderosa para aprendizado em cenários reais de desenvolvimento. Uma aplicação web que simula funcionalidades bancárias, como transferências, pagamentos e gerenciamento de contas. 

## Objetivo

Este projeto tem como principal objetivo aplicar na prática os conhecimentos adquiridos no curso Guardião da Qualidade, promovido pela LumeStack, por meio da automação de testes end-to-end utilizando o framework Cypress.


## Casos de teste

- Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"


## Automação dos casos de testes

- Login com sucesso e falha com credenciais inválidas
- Registro de novo usuário com dados válidos e inválidos


## Tecnologias Utilizadas

- **Linguagem:** JavaScript
- **Framework de Testes:** Cypress

## Como Executar

É necessário que o projeto "Real World App" esteja configurado corretamente no ambiente de desenvolvimento. Onde se encontra no repositório oficial do projeto: https://github.com/cypress-io/cypress-realworld-app.git.

1. Clone o repositório
2. Instale as dependências com `npm init` e `npm install cypress --save-dev`
3. Execute os testes com `npx cypress open`

## Estrutura do Projeto

- `/e2e`: Scripts de automação
- `/pages`: Page Objects para facilitar a manutenção
- `/fixtures`: Dados de teste
- `/cypress.config`:  baseUrl do site automatizado

