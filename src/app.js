const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

// Rotas da API
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);
app.use('/user', userRoutes);

// Swagger
const swaggerFile = path.join(__dirname, '../resources/swagger.yaml');
const swaggerDocument = fs.existsSync(swaggerFile) ? require('yamljs').load(swaggerFile) : {};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send('API Gerenciamento de Vendas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = app;