const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// GET - Get all portfolio data by type
router.get('/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const portfolioData = await Portfolio.find({ type }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    console.error('Get portfolio data error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio data'
    });
  }
});

// POST - Add new portfolio data
router.post('/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({
        success: false,
        message: 'Data is required'
      });
    }

    const portfolioItem = new Portfolio({
      type,
      data
    });

    await portfolioItem.save();

    res.status(201).json({
      success: true,
      message: 'Portfolio data added successfully!',
      data: portfolioItem
    });

  } catch (error) {
    console.error('Add portfolio data error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add portfolio data'
    });
  }
});

// PUT - Update portfolio data
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const updatedItem = await Portfolio.findByIdAndUpdate(
      id,
      {
        data,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.json({
      success: true,
      message: 'Portfolio data updated successfully!',
      data: updatedItem
    });

  } catch (error) {
    console.error('Update portfolio data error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update portfolio data'
    });
  }
});

// DELETE - Delete portfolio data
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Portfolio.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.json({
      success: true,
      message: 'Portfolio data deleted successfully!'
    });

  } catch (error) {
    console.error('Delete portfolio data error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete portfolio data'
    });
  }
});

module.exports = router;