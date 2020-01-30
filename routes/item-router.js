const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

router.post('/item', ItemController.createItem);
router.put('/item/:id', ItemController.updateItem);
router.delete('/item/:id', ItemController.deleteeItem);
router.get('/items/:id', ItemController.getItemById);
router.get('/items', ItemController.getItem);

module.exports = router;