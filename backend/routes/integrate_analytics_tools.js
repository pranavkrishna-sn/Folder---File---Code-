const express = require('express');
const router = express.Router();
const integrate_analytics_toolsController = require('../controllers/integrate_analytics_toolsController');

/**
 * Routes for Integrate analytics tools
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', integrate_analytics_toolsController.getAll);

// GET single item by ID
router.get('/:id', integrate_analytics_toolsController.getById);

// POST create new item
router.post('/', integrate_analytics_toolsController.create);

// PUT update item
router.put('/:id', integrate_analytics_toolsController.update);

// DELETE item
router.delete('/:id', integrate_analytics_toolsController.delete);

module.exports = router;
