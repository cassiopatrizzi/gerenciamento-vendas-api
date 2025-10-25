const db = require('./database');
const Sale = require('../models/Sale');

function createSale(sellerId, clientId, products) {
  const id = db.sales.length + 1;
  const date = new Date();
  const sale = new Sale(id, sellerId, clientId, products, date);
  db.sales.push(sale);
  return sale;
}

function getSalesBySeller(sellerId) {
  return db.sales.filter(s => s.sellerId === sellerId);
}

function getSalesByClient(clientId) {
  return db.sales.filter(s => s.clientId === clientId);
}

module.exports = { createSale, getSalesBySeller, getSalesByClient };