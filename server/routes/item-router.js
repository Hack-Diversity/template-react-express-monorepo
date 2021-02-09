const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

router.get('/items', ItemController.getItems);
router.get('/item/:isbn', ItemController.getItemByIsbn);
router.post('/item', ItemController.createItem);
router.put('/item/:isbn', ItemController.updateItem);
router.delete('/item/:isbn', ItemController.deleteItem);

module.exports = router;
