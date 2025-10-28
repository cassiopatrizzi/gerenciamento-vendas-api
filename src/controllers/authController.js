const { createUser, findUserByEmail, deleteUserById } = require('../services/userService');
const { generateToken } = require('../services/authService');

function register(req, res) {
  if (!req.user || req.user.role !== 'administrador') {
    return res.status(403).json({ error: 'Apenas administradores podem cadastrar novos usuários' });
  }
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
  }
  const allowedRoles = ['admin', 'vendedor', 'cliente'];
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ error: 'Regra inválida. Use: admin, vendedor ou cliente.' });
  }
  if (findUserByEmail(email)) {
    return res.status(409).json({ error: 'Email já cadastrado' });
  }
  const user = createUser(name, email, password, role);
  const token = generateToken(user);
  res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
}

function login(req, res) {
  const { email, password } = req.body;
  const user = findUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = generateToken(user);
  res.json({ token });
}

function deleteUser(req, res) {
  const { id } = req.params;
  const deleted = deleteUserById(Number(id));
  if (!deleted) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.status(204).send();
}

module.exports = { register, login, deleteUser };