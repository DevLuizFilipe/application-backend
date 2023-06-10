# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do aplicativo para o diretório de trabalho
COPY . .

# Instale as dependências
RUN npm install

# Expõe a porta 80
EXPOSE 80

# Inicie o aplicativo
CMD [ "node", "server.js" ]
