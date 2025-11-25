const express = require('express');
const router = express.Router();
const establish_deployment_strategyController = require('../controllers/establish_deployment_strategyController');

/**
 * Routes for Establish deployment strategy
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', establish_deployment_strategyController.getAll);

// GET single item by ID
router.get('/:id', establish_deployment_strategyController.getById);

// POST create new item
router.post('/', establish_deployment_strategyController.create);

// PUT update item
router.put('/:id', establish_deployment_strategyController.update);

// DELETE item
router.delete('/:id', establish_deployment_strategyController.delete);

module.exports = router;
