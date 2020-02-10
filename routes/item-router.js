const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

router.get('/items', ItemController.getItem);
router.get('/item/:id', ItemController.getItemById);
router.post('/item', ItemController.createItem);
router.put('/item/:id', ItemController.updateItem);
router.delete('/item/:id', ItemController.deleteeItem);

module.exports = router;