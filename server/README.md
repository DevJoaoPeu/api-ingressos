# API de Venda de Ingressos

Bem-vindo à API de Venda de Ingressos! Esta API foi desenvolvida para gerenciar usuários, eventos, ingressos e vendas. O objetivo principal é fornecer uma api robusta e segura para a criação e gerenciamento de ingressos de eventos.

## Tecnologias Utilizadas

- **TypeScript**
- **Docker**
- **Husky**
- **Zod**
- **Prisma**
- **PostgreSQL**
- **bcrypt**
- **JSON Web Token (JWT)**

## Instalação

Para começar a usar a API, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/DevJoaoPeu/api-ingressos
    cd api-ingressos
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o Docker para iniciar os serviços necessários:
    ```bash
    docker-compose up -d
    ```

4. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.

5. Rode as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

6. Inicie o servidor:
    ```bash
    npm start
    ```

## Rotas da API

### Usuário

- **Criar Usuário**
  - **Rota**: `POST /user/register`
  - **Descrição**: Registra um novo usuário.

- **Atualizar Usuário**
  - **Rota**: `PATCH /user/update/:userId`
  - **Descrição**: Atualiza os dados de um usuário existente.

- **Fazer Login**
  - **Rota**: `POST /user/session`
  - **Descrição**: Realiza o login de um usuário.

- **Buscar Usuário por ID**
  - **Rota**: `GET /user/find/:userId`
  - **Descrição**: Busca um usuário pelo ID.

### Evento

- **Criar Evento**
  - **Rota**: `POST /event/create`
  - **Descrição**: Cria um novo evento.

- **Atualizar Evento**
  - **Rota**: `PATCH /event/update/:eventId`
  - **Descrição**: Atualiza um evento existente.

- **Buscar Todos os Eventos de um Usuário**
  - **Rota**: `GET /event/findAll/:userId`
  - **Descrição**: Busca todos os eventos de um usuário.

- **Buscar Evento por ID**
  - **Rota**: `GET /event/findOne/:eventId`
  - **Descrição**: Busca um evento pelo ID.

- **Deletar Evento**
  - **Rota**: `DELETE /event/delete/:eventId`
  - **Descrição**: Deleta um evento pelo ID.

### Ingresso (Ticket)

- **Criar Ingresso**
  - **Rota**: `POST /ticket/create`
  - **Descrição**: Cria um novo ingresso.

- **Buscar Todos os Ingressos de um Usuário**
  - **Rota**: `GET /ticket/findAll/:userId`
  - **Descrição**: Busca todos os ingressos de um usuário.

- **Deletar Ingresso pelo Tipo**
  - **Rota**: `DELETE /ticket/delete/:userId/:type`
  - **Descrição**: Deleta ingressos pelo tipo.

- **Buscar Ingressos pelo Tipo**
  - **Rota**: `GET /ticket/findAll/:userId/:type`
  - **Descrição**: Busca todos os ingressos de um usuário pelo tipo.

### Venda

- **Criar Venda**
  - **Rota**: `POST /sale/create`
  - **Descrição**: Cria uma nova venda.

- **Buscar Todas as Compras de um Usuário**
  - **Rota**: `GET /sale/findAll/:userId`
  - **Descrição**: Busca todas as compras de um usuário.

- **Buscar Compra por ID**
  - **Rota**: `GET /sale/findOne/:userId/:saleId`
  - **Descrição**: Busca uma compra pelo ID.

- **Deletar Compra**
  - **Rota**: `DELETE /sale/delete/:userId/:saleId`
  - **Descrição**: Deleta uma compra pelo ID.

### Controle de Ingressos

- **Criar Controle de Ingressos**
  - **Rota**: `POST /controllerTicket/create`
  - **Descrição**: Cria um controle de ingressos para um evento.

- **Buscar Ingressos pelo ID do Evento**
  - **Rota**: `GET /controllerTicket/:eventId`
  - **Descrição**: Busca ingressos pelo ID do evento.

- **Deletar Controle de Ingressos**
  - **Rota**: `DELETE /controllerTicket/:controllerTicketId/:userId`
  - **Descrição**: Deleta um controle de ingressos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para contribuir:

1. Fork o repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -am 'Adiciona nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [DevJoaoPeu](https://github.com/DevJoaoPeu)
