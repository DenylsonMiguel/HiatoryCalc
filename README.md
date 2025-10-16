# HiatoryCalc

## ! IMPORTANTE !

**A api já está publica e podendo ser utilizada, para acessá-la vá em:**
https://historycalc.onrender.com

---

API de uma calculadora que salva o histórico de cálculos usando Node.js, TypeScript e MongoDB Atlas.


---

## Tecnologias

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)


---

## Estrutura do Projeto

```
.
├── controllers
│   └── calcController.ts
├── db.ts
├── models
│   └── calcModels.ts
├── routes
│   └── calc.ts
├── server.ts
└── services
    └── calcService.ts
```


---

## Funcionalidades

Criar um cálculo (POST /calc)

Listar histórico de cálculos (GET /calc)

Buscar cálculo específico pelo ID (GET /calc/:id)

Remover um cálculo especifico pelo ID (REMOVE /calc/:id)



---

## Setup

- Clone o repositório:


```bash
git clone https://github.com/DenylsonMiguel/HistoryCalc.git
```

- Instale dependências:


```bash
npm install
```

- Crie o arquivo .env na raiz do projeto com:


```
MONGO_URI=your_mongodb_uri
PORT=3000
```

- Rode em desenvolvimento:


```bash
npm run dev
```

[WARN] Não está funcionando!

- Build para produção:


```bash
npm run build
npm start
```


---

## Endpoints

Método	Endpoint	Descrição

GET	/calc	Retorna todos os cálculos
GET	/calc/:id	Retorna cálculo pelo ID
POST	/calc	Cria um novo cálculo
DELETE /calc/:id Deleta um cálculo pelo ID


### Exemplo POST /calc:

```json
{
  "operation": "2 + 2",
  "result": 4
}
```


---

## Variáveis de Ambiente

MONGO_URI → String de conexão do MongoDB Atlas

PORT → Porta do servidor (default 3000)
