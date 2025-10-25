# API Gerenciamento de Vendas

## Descrição
API RESTful para gerenciamento de vendas, clientes, produtos e progresso de compras. Desenvolvida em Node.js com Express, autenticação JWT e documentação Swagger.

## Funcionalidades
- Login de vendedores e clientes
- Registro de produtos
- Registro de clientes e vendedores
- Busca de produtos
- Busca de dados do cliente
- Registro de vendas realizadas pelo vendedor
- Consulta de compras do cliente
- Consulta de progresso do cliente
- Autenticação JWT via middleware

## Estrutura do Projeto
```
resources/
  └── swagger.yaml
src/
  controllers/
    ├── authController.js
    ├── clientController.js
    ├── productController.js
    └── saleController.js
  middleware/
    └── authMiddleware.js
  models/
    ├── ClientProgress.js
    ├── Product.js
    ├── Sale.js
    └── User.js
  routes/
    ├── authRoutes.js
    ├── clientRoutes.js
    ├── productRoutes.js
    └── saleRoutes.js
  services/
    ├── authService.js
    ├── clientProgressService.js
    ├── database.js
    ├── productService.js
    ├── saleService.js
    └── userService.js
  app.js
.gitignore
package-lock.json
package.json
README.md
```

## Como executar
1. Instale as dependências:
   ```bash
   npm install express body-parser jsonwebtoken swagger-ui-express yamljs
   ```
2. Inicie a API:
   ```bash
   npm start
   ```
3. Acesse a documentação Swagger em: [http://localhost:3000/api-docs]

## Autenticação
- Utilize o endpoint `/auth/register` para criar usuários (cliente ou vendedor). O token JWT é retornado na resposta.
- Para acessar endpoints protegidos, envie o token no header:
  ```
  Authorization: Bearer <token>
  ```
- Vendedores têm acesso total. Clientes apenas consultam progresso e dados próprios.

## Observações
- Banco de dados em memória (os dados são perdidos ao reiniciar a aplicação).
- Não há dados pré-existentes.