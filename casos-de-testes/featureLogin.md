# Plano de Teste - Login do Sistema

## Pré-condições
- Acessar a página de Login do sistema

---

## Cenário 1: Login com sucesso

| Passos                          | Resultado Esperado                                     | Status | Resultado Encontrado |
|---------------------------------|--------------------------------------------------------|--------|-----------------------|
| 1.1 Digitar o Nome de Usuário: Dada |                                                    | Passou |                       |
| 1.2 Digitar a Senha: 123456         |                                                    | Passou |                       |
| 1.3 Clicar no botão de Entrar       | O usuário é logado com sucesso / Redirecionado para página Home | Passou |                       |

---

## Cenário 2: Login com credenciais inválidas

| Passos                          | Resultado Esperado                                     | Status | Resultado Encontrado |
|---------------------------------|--------------------------------------------------------|--------|-----------------------|
| 1.1 Digitar o Nome de Usuário: Dada |                                                    | Passou |                       |
| 1.2 Digitar a Senha: test123        |                                                    | Passou |                       |
| 1.3 Clicar no botão de Entrar       | Aparece mensagem de erro: "Nome de usuário ou senha inválidos" | Passou |                       |
