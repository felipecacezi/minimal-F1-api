FROM node:20-alpine

WORKDIR /app

# Não copiamos nada aqui, pois todo o diretório será montado como volume

# Configuramos o comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:watch"]