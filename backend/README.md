# Portfolio Backend

Back-end Spring Boot do portfólio, com PostgreSQL e API REST para projetos e mensagens de contato.

## Como executar

1. Crie o banco no PostgreSQL:
   - `portfolio_db`
2. Ajuste as credenciais em `src/main/resources/application.properties`.
3. Execute a aplicação com Maven:
   - `mvn spring-boot:run`

## Porta da API

- `http://localhost:8080`

## Endpoints principais

### Projects
- `GET /api/projects`
- `GET /api/projects/{id}`
- `POST /api/projects`
- `PUT /api/projects/{id}`
- `DELETE /api/projects/{id}`

### Contact messages
- `GET /api/contact-messages`
- `POST /api/contact-messages`

## Front-end

O front-end consome a API em `http://localhost:8080/api`.
Se quiser mudar a URL, defina `VITE_API_BASE_URL` no ambiente do front-end.

## Estrutura

- `controller` - recebe as requisições HTTP
- `service` - aplica as regras de negócio
- `repository` - acessa o banco com Spring Data JPA
- `entity` - mapeia as tabelas do banco
- `dto` - transporta dados entre front-end e back-end
- `mapper` - converte entity em DTO e vice-versa
- `exception` - tratamento de erros da API
- `config` - configurações globais, como CORS
- `seed` - dados iniciais para demonstração
