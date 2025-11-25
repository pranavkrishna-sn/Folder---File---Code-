const express = require('express');
const router = express.Router();
const implement_commenting_functionalityController = require('../controllers/implement_commenting_functionalityController');

/**
 * Routes for Implement commenting functionality
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_commenting_functionalityController.getAll);

// GET single item by ID
router.get('/:id', implement_commenting_functionalityController.getById);

// POST create new item
router.post('/', implement_commenting_functionalityController.create);

// PUT update item
router.put('/:id', implement_commenting_functionalityController.update);

// DELETE item
router.delete('/:id', implement_commenting_functionalityController.delete);

module.exports = router;
