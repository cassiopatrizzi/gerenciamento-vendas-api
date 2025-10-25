const db = require('./database');
const Product = require('../models/Product');

function createProduct(name, price, stock) {
  const id = db.products.length + 1;
  const product = new Product(id, name, price, stock);
  db.products.push(product);
  return product;
}

function getAllProducts() {
  return db.products;
}


function findProductById(id) {
  return db.products.find(p => p.id === id);
}

function deleteProductById(id) {
  const index = db.products.findIndex(p => p.id === id);
  if (index !== -1) {
    db.products.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = { createProduct, getAllProducts, findProductById, deleteProductById };