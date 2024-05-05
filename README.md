# developertest

# Está minimamente documentado, portanto você precisará de algum conhecimento técnico necessário para algumas atividades.
 
## Objetivo: utilizar .NET Core 8, Angular versão 17, NodeJS versão 20 e Java com Spring Boot. Criação de um projeto com gestão de usuários e permissões, além de demonstração de boas práticas de programação e arquitetura.
 
## Dois projetos separados:
 
### 1- Um projeto utilizando .NET Core 8, Angular 17 e NodeJS versão 20, com Entity Framework. (Intellij IDEA)
### 2- Um projeto similar utilizando Java 17 com Spring Boot, com Hibernate/JPA no Java Spring Boot. (Visual Studio 2022)
 
## Cada projeto tem:
### * Telas básicas com operações CRUD.
### * Gestão de usuários e permissões.
### * APIs para interface com o front-end e back-end.
### * Banco de dados MySQL
 
## Estrutura para a criação de containers Docker, incluindo imagens e Dockerfile.
 
## Documentação: principais decisões de design e arquitetura
### Instruções claras para executar e testar a aplicação.
 
## Critérios:
### * Qualidade e organização do código fonte.
### * Adesão aos princípios SOLID e boas práticas de programação.
### * Utilização adequada das tecnologias especificadas, incluindo o uso de frameworks e ferramentas.
### * Eficiência e desempenho da aplicação.
### * Utilização adequada de bancos de dados relacionais, incluindo modelagem de dados, consultas SQL e otimização de desempenho.
### * Clareza e qualidade da documentação fornecida.
### * Requisitos e funcionalidades.
 



# NodeJS 

## Se você está com outra versão que não a 20 (verifique com o comando node --version), baixe o mvn, é bem conhecido tem nos repositórios: github e microsoft, procure um que você confie e digite os comandos.
### nvm install 20.0.0
### nvm use 20.0.0
### node --version
#### Terá a versão

# Docker (nome e porta que quiser

### docker build -t testangular-app .
#### Substitua testangular-app pelo nome que você deseja dar à sua imagem
### docker run -d -p 8080:80 testangular-app
#### iniciará um container Docker executando sua aplicação Angular, acessível através da porta 8080 do seu host.