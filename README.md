# Calculadora API

API de uma calculadora que salva o histórico de cálculos usando Node.js, TypeScript e MongoDB Atlas.


---

Tecnologias

Node.js

Express

TypeScript

Mongoose (MongoDB)

Nodemon (desenvolvimento)

dotenv (variáveis de ambiente)



---

Estrutura do Projeto

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

Funcionalidades

Criar um cálculo (POST /calc)

Listar histórico de cálculos (GET /calc)

Buscar cálculo específico pelo ID (GET /calc/:id)



---

Setup

1. Clone o repositório:

```bash
git clone https://github.com/DenylsonMiguel/HiatoryCalc.git
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

- Build para produção:

```
npm run build
npm start
```

---

Endpoints

Método	Endpoint	Descrição

GET	/calc	Retorna todos os cálculos
GET	/calc/:id	Retorna cálculo pelo ID
POST	/calc	Cria um novo cálculo


Exemplo POST /calc:

```json
{
  "operation": "2 + 2",
  "result": 4
}
```


---

Variáveis de Ambiente

MONGO_URI → String de conexão do MongoDB Atlas

PORT → Porta do servidor (default 3000)
