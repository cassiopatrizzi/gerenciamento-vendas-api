const db = require('./database');
const User = require('../models/User');

function createUser(name, email, password, role) {
  const id = db.users.length + 1;
  const user = new User(id, name, email, password, role);
  db.users.push(user);
  return user;
}

function findUserByEmail(email) {
  return db.users.find(u => u.email === email);
}


function findUserById(id) {
  return db.users.find(u => u.id === id);
}

function deleteUserById(id) {
  const index = db.users.findIndex(u => u.id === id);
  if (index !== -1) {
    db.users.splice(index, 1);
    return true;
  }
  return false;
}

function getAllClients() {
  return db.users;
}

module.exports = { createUser, findUserByEmail, findUserById, deleteUserById, getAllClients };