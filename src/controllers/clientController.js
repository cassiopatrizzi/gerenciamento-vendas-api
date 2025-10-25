const { getClientProgress } = require('../services/clientProgressService');
const { findUserById } = require('../services/userService');

function getProgress(req, res) {
  const clientId = req.user.id;
  const progress = getClientProgress(clientId);
  if (!progress) return res.status(404).json({ error: 'Progresso não encontrado' });
  res.json(progress);
}


function getClientData(req, res) {
  const clientId = req.user.id;
  const user = findUserById(clientId);
  if (!user) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
}

function getClientDataById(req, res) {
  const { id } = req.params;
  const user = findUserById(Number(id));
  if (!user) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
}

module.exports = { getProgress, getClientData, getClientDataById };