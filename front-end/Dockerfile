# Estágio 1: Construir o aplicativo
FROM node:16-alpine as build

WORKDIR /app

# Copiar os arquivos de configuração do projeto
COPY package.json package-lock.json ./

# Instalar todas as dependências
RUN npm install

# Copiar os arquivos do projeto
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Estágio 2: Preparar a imagem de produção
FROM nginx:alpine

# Copiar os arquivos estáticos gerados para o diretório do nginx
COPY --from=build /app/dist/front-end /usr/share/nginx/html

# Expõe a porta 80 para o container
EXPOSE 80

# Iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
