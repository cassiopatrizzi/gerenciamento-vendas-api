const { createSale, getSalesBySeller, getSalesByClient } = require('../services/saleService');

function registerSale(req, res) {
  const { clientId, products } = req.body;
  const sellerId = req.user.id;
  if (!clientId || !products || !Array.isArray(products)) {
    return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
  }
  const sale = createSale(sellerId, clientId, products);
  res.status(201).json(sale);
}

function listSalesBySeller(req, res) {
  const sellerId = req.user.id;
  res.json(getSalesBySeller(sellerId));
}

function listSalesByClient(req, res) {
  const clientId = req.user.id;
  res.json(getSalesByClient(clientId));
}

module.exports = { registerSale, listSalesBySeller, listSalesByClient };