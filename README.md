# 🏫 Sistema Poliedro

Sistema web para gerenciar as atividades dos alunos, voltado para uso interno da equipe pedagógica e administrativa da escola.

## 🎯 Objetivo

O Sistema Poliedro tem como objetivo gamificar o controle e a organização de dados acadêmicos (atividades, comportamento em sala, etc), permitindo que coordenação, professores e alunos interajam com o sistema de forma personalizada, conforme seu tipo de acesso.

## 👨‍💻 Desenvolvedores: 

| Nome          | GitHub                                                        |
| ------------- | --------------------------------------------------------------|
| \Caio Onha | [@Caio1918](https://github.com/Caio1918)                         |
| \Gustavo Bomfim | [@gugsgod](https://github.com/gugsgod)                      |
| \Gustavo Versolatto | [@GVersolatto](https://github.com/GVersolatto)          |
| \Nicole Mascaretti | [@NicoleMascaretti](https://github.com/NicoleMascaretti) |
| \Nicholas Carmona | [@nicholascarmona](https://github.com/seunome4)           |
| \Pietro Maffessoni | [PietroMaffessoni](https://github.com/PietroMaffessoni)  |


## 🚀 Funcionalidades

- Login com validação por tipo de usuário (aluno, professor ou coordenação)
- Cadastro de pessoas (alunos, professores, etc.)
- Gerenciamento de turmas
- Gerenciamento de atividades
- Visualização de dados

## ⚙️ Tecnologias Utilizadas

### Front-end
- [React](https://reactjs.org/)
- React Router DOM
- CSS Modules
- [Vitest](https://vitest.dev/) (testes automatizados)
- [Testing Library](https://testing-library.com/) (testes de interface)

### Back-end
- [Go (Golang)](https://golang.org/)
- MySQL

## 💡 Testes Automatizados

Aplicamos os princípios de **TDD (Test-Driven Development)** nas funcionalidades de login e cadastro.

### Funcionalidades testadas:

- Cadastro com dados válidos
- Impedimento de cadastro com e-mail já existente
- Login com credenciais válidas
- Falha de login com dados inválidos
- Validação de campos obrigatórios

### Como rodar os testes

```bash
npm install
npx vitest

### As funcionalidades testadas estão localizadas na pasta
src/tests/
├── AdicionarPessoas.test.jsx
├── Login.test.jsx

```

### Como rodar o projeto

```bash
git clone https://github.com/gugsgod/PII-3semestre.git
cd gamificacao-app ##o nome da pasta que você clonou o projeto
npm install
npm run dev
```




