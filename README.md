# 📦 Post Service

Este microsserviço é responsável pela gestão de posts e comentários em um sistema de blog.

## 🚀 Tecnologias Utilizadas

- Node.js + Express
- MongoDB + Mongoose
- Jest + Supertest (testes)
- Docker

## 📁 Estrutura de Pastas

```
post-service/
├── controllers/         # Controladores com lógica de negócio
├── models/              # Modelos Mongoose
├── routes/              # Definição das rotas Express
├── tests/               # Testes unitários e de integração
├── .github/workflows/   # Workflows de CI (GitHub Actions)
├── server.js            # Ponto de entrada da aplicação
├── Dockerfile           # Dockerização do serviço
├── .env                 # Variáveis de ambiente
└── package.json         # Dependências e scripts
```

## 🔧 Endpoints

- `GET /api/posts` - Lista todos os posts
- `GET /api/posts/:id` - Retorna um post por ID
- `POST /api/posts` - Cria um novo post
- `PUT /api/posts/:id` - Atualiza um post
- `DELETE /api/posts/:id` - Remove um post
- `GET /api/posts/:id/comments` - Lista comentários de um post
- `POST /api/posts/:id/comments` - Adiciona comentário
- `GET /api/posts/search?q=termo` - Busca por título ou conteúdo

## ▶️ Como rodar localmente

### 1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/post-service.git
cd post-service
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Configure o `.env` (exemplo):
```
MONGO_URI=mongodb://localhost:27017/post-service
PORT=8002
```

### 4. Rode o servidor:
```bash
npm start
```

A aplicação estará acessível em: `http://localhost:8002`

## 🧪 Rodando Testes
```bash
$env:NODE_ENV="test"
npm test
```

## 🐳 Docker

### Build da imagem:
```bash
docker build -t post-service .
```

### Rodar container:
```bash
docker run -p 8002:8002 --env-file .env post-service
```

## 🛠️ CI com GitHub Actions
O projeto inclui workflow de integração contínua com:
- Instalação de dependências
- Execução de testes automáticos

Local: `.github/workflows/ci.yml`

## 📄 Licença
MIT

