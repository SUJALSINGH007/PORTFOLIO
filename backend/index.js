const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// mongoose.connect('mongodb+srv://singhsujal52938:<db_password>@sujal.tjf4q3f.mongodb.net/?retryWrites=true&w=majority&appName=sUJAL')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const contactRoutes = require('./routes/contact');
const portfolioRoutes = require('./routes/portfolio');

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio backend is running!',
    endpoints: {
      contact: '/api/contact',
      portfolio: '/api/portfolio'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});