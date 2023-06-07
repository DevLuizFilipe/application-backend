# Usa a imagem oficial do Node.js como base
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Instala as dependências do projeto
RUN npm install

# Expõe a porta em que a aplicação está rodando
EXPOSE 3000

# Comando para executar a aplicação quando o contêiner for iniciado
CMD [ "node", "server.js" ]
