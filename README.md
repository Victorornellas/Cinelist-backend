# 🎬 CineList — API

API REST do [CineList](https://cinelist-frontend-two.vercel.app/) para gerenciar filmes favoritos.

Front-end: [repositório do cinelist-frontend](https://github.com/Victorornellas/cinelist-frontend)

## 🛠️ Tecnologias

- Node.js
- Express
- MongoDB (Atlas) + Mongoose

## 📍 Rotas

| Método | Rota             | Descrição                  |
|--------|------------------|----------------------------|
| GET    | `/favorites`     | Lista todos os favoritos   |
| POST   | `/favorites`     | Adiciona um favorito       |
| DELETE | `/favorites/:id` | Remove um favorito pelo id |

## 🚀 Como rodar localmente

```bash
git clone https://github.com/Victorornellas/cinelist-backend.git
cd cinelist-backend
npm install
npm start
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```dotenv
MONGODB_URI=sua_string_de_conexao_do_mongodb
```