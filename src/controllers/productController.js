const { createProduct, getAllProducts, findProductById, deleteProductById } = require('../services/productService');

function registerProduct(req, res) {
  const { name, price, stock } = req.body;
  if (!name || !price || !stock) {
    return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
  }
  const product = createProduct(name, price, stock);
  res.status(201).json(product);
}

function listProducts(req, res) {
  res.json(getAllProducts());
}

function getProduct(req, res) {
  const { id } = req.params;
  const product = findProductById(Number(id));
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(product);
}


function deleteProduct(req, res) {
  const { id } = req.params;
  const deleted = deleteProductById(Number(id));
  if (!deleted) return res.status(404).json({ error: 'Produto não encontrado' });
  res.status(204).send();
}

module.exports = { registerProduct, listProducts, getProduct, deleteProduct };