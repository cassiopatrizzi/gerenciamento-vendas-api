class ClientProgress {
  constructor(clientId, orders, purchases) {
    this.clientId = clientId;
    this.orders = orders; // [{ productId, quantity }]
    this.purchases = purchases; // [{ saleId, productId, quantity }]
  }
}

module.exports = ClientProgress;