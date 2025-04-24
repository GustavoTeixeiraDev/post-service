# Dockerfile para o Post Service
FROM node:18-alpine3

# Diretório de trabalho
WORKDIR /app

# Copiar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código
COPY . .

# Expor a porta da aplicação
EXPOSE 8002

# Rodar o app
CMD ["node", "server.js"]
