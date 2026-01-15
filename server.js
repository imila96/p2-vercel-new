// Optional standalone Express.js backend
// Run with: node server.js
// This is an alternative to Next.js API routes

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// Signup endpoint
app.post('/api/signup', (req, res) => {
  const { email, storeName } = req.body;

  if (!email || !storeName) {
    return res.status(400).json({
      error: 'Email and store name are required',
    });
  }

  // Here you would integrate with your database or email service
  // For now, we'll just return a success response

  res.json({
    success: true,
    message: 'Signup successful! Check your email for next steps.',
    data: { email, storeName },
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  // Process contact form
  res.json({
    success: true,
    message: 'Message sent successfully!',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

module.exports = app;
