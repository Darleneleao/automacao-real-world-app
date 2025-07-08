# Plano de Teste - Cadastro de Usuário

## Pré-condições
- Acessar a página de Cadastro do sistema

---

## Cenário 1: Registro de novo usuário com sucesso

| Passos                                      | Resultado Esperado                                                           | Status | Resultado Encontrado |
|---------------------------------------------|------------------------------------------------------------------------------|--------|-----------------------|
| 1.1 Digitar o Primeiro Nome: Darlene        |                                                                              | Passou |                       |
| 1.2 Digitar o Sobrenome: Souza              |                                                                              | Passou |                       |
| 1.3 Digitar o Nome de Usuário: Dada         |                                                                              | Passou |                       |
| 1.4 Digitar a Senha: 123456                 |                                                                              | Passou |                       |
| 1.5 Confirmar a Senha: 123456               |                                                                              | Passou |                       |
| 1.6 Clicar no botão de Inscrever-se         | O usuário é registrado com sucesso / Redirecionado para página de login     | Passou |                       |

---

## Cenário 2: Registro com informações incompletas

| Passos                                      | Resultado Esperado                                         | Status | Resultado Encontrado |
|---------------------------------------------|------------------------------------------------------------|--------|-----------------------|
| 2.1 Digitar o Primeiro Nome: Darlene        |                                                            | Passou |                       |
| 2.2 Digitar o Sobrenome: Souza              |                                                            | Passou |                       |
| 2.3 Digitar o Nome de Usuário: Dada         |                                                            | Passou |                       |
| 2.4 Digitar a Senha: 123456                 |                                                            | Passou |                       |
| 2.5 Confirmar a Senha: 123                  |                                                            | Passou |                       |
| 2.6 Clicar no botão de Inscrever-se         | Aparece mensagem de erro: "A senha não corresponde"        | Passou |                       |
