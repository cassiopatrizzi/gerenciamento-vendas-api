const User = require('../models/User');

const adminUser = new User(1, 'Admin', 'seller@admin.com', 'admin123', 'administrador');

module.exports = {
  users: [adminUser],
  products: [],
  sales: [],
  clientProgress: []
};