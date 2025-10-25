const db = require('./database');
const ClientProgress = require('../models/ClientProgress');

function getClientProgress(clientId) {
  return db.clientProgress.find(cp => cp.clientId === clientId);
}

function updateClientProgress(clientId, orders, purchases) {
  let progress = getClientProgress(clientId);
  if (!progress) {
    progress = new ClientProgress(clientId, orders, purchases);
    db.clientProgress.push(progress);
  } else {
    progress.orders = orders;
    progress.purchases = purchases;
  }
  return progress;
}

module.exports = { getClientProgress, updateClientProgress };