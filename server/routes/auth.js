import express from 'express';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
import db from '../config/database.js';
import { generateToken } from '../middleware/auth.js';

const router = express.Router();

// Register
router.post('/register', [
  body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('full_name').optional().trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, full_name } = req.body;

  try {
    // Check if user already exists
    const existingUser = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?')
      .get(username, email);

    if (existingUser) {
      return res.status(400).json({ 
        error: 'User already exists with this username or email' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const result = db.prepare(`
      INSERT INTO users (username, email, password, full_name)
      VALUES (?, ?, ?, ?)
    `).run(username, email, hashedPassword, full_name || null);

    const user = {
      id: result.lastInsertRowid,
      username,
      email,
      full_name
    };

    const token = generateToken(user);

    res.status(201).json({
      message: 'User registered successfully',
      user,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login
router.post('/login', [
  body('username').trim().notEmpty(),
  body('password').notEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // Find user
    const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?')
      .get(username, username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const userResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
      full_name: user.full_name
    };

    const token = generateToken(userResponse);

    res.json({
      message: 'Login successful',
      user: userResponse,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

export default router;
