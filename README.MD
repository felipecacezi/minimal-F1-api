# 🏎️ API de Equipes e Motoristas de F1 com Node.js, TypeScript e Fastify

Este projeto é uma API mínima desenvolvida com **Node.js**, **TypeScript** e **Fastify**, proposta como exercício no curso da **DIO**. A API permite listar **equipes de F1**, **motoristas** e filtrar motoristas pelo **ID**.  

O objetivo do exercício é praticar conceitos básicos de Node.js e TypeScript, evitando **over-engineering**. Além do proposto, o projeto foi **dockerizado** para facilitar a execução.

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Docker**
- **Tsup** (para empacotamento)
- **Tsx** (para execução em desenvolvimento)

---

## 📋 Endpoints da API

- **`GET /teams`**  
  Lista todas as equipes de F1.

- **`GET /drivers`**  
  Lista todos os motoristas.

- **`GET /drivers/:id`**  
  Retorna os dados de um motorista específico com base no **ID**.

---

## 🚀 Scripts Disponíveis

- **`npm run dist`**  
  Transpila o código TypeScript para JavaScript utilizando o **Tsup**.

- **`npm run start:dev`**  
  Executa a API em modo desenvolvimento com o **Tsx**, utilizando as variáveis de ambiente do arquivo `.env`.

- **`npm run start:watch`**  
  Executa a API em modo desenvolvimento com hot-reload.

- **`npm run start:dist`**  
  Transpila o código e executa a versão compilada.

---

## 🐳 Executando com Docker

Para rodar a API utilizando Docker, siga os passos abaixo:

1. **Build da imagem Docker:**
   ```bash
   docker build -t api-f1-fastify .
