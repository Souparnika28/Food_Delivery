const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
const JWT_SECRET = 'your_jwt_secret'; // Use environment variable in production

// Mock DB (replace with real DB later)
const users = [];
const orders = [];

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User created' });
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ accessToken });
});

// Create order (protected)
app.post('/api/orders', authenticateToken, (req, res) => {
  const order = {
    id: orders.length + 1,
    user: req.user.username,
    items: req.body.items,
    total: req.body.total,
    status: 'pending',
    createdAt: new Date(),
  };
  orders.push(order);
  res.status(201).json(order);
});

// Get orders for logged-in user (protected)
app.get('/api/orders', authenticateToken, (req, res) => {
  const userOrders = orders.filter(order => order.user === req.user.username);
  res.json(userOrders);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
