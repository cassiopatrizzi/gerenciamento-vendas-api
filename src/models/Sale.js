class Sale {
  constructor(id, sellerId, clientId, products, date) {
    this.id = id;
    this.sellerId = sellerId;
    this.clientId = clientId;
    this.products = products; // [{ productId, quantity }]
    this.date = date;
  }
}

module.exports = Sale;