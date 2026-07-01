# React + Vite + Spring Boot

Projeto de portfólio com front-end em React/Vite e back-end em Spring Boot com PostgreSQL.

## Como executar no Windows

### 1. Preparar o PostgreSQL

Crie o banco de dados:

```sql
CREATE DATABASE portfolio_db;
```

Confirme as credenciais em [backend/src/main/resources/application.properties](backend/src/main/resources/application.properties).

### 2. Executar o back-end

Abra um terminal na pasta [backend](backend) e rode:

```powershell
mvn spring-boot:run
```

Se o Maven não estiver instalado, instale-o ou use uma IDE com suporte a Spring Boot/Maven.

### 3. Executar o front-end

Abra outro terminal na raiz do projeto e rode:

```powershell
npm install
npm run dev
```

### 4. URLs usadas na integração

- Front-end: `http://localhost:5173`
- Back-end: `http://localhost:8080`
- API base: `http://localhost:8080/api`

## Fluxo principal

- A tela de projetos consome `GET /api/projects`.
- O formulário de contato envia `POST /api/contact-messages`.
- O back-end persiste e lê os dados no PostgreSQL.

## Observação

Se quiser mudar a URL da API no front-end, defina `VITE_API_BASE_URL` no ambiente.
