const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['skills', 'projects', 'experience', 'education', 'achievements']
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);