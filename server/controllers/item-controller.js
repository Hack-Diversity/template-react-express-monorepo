/* eslint-disable no-undef, arrow-body-style */
const Item = require('../models/item-model');

getItems = async (req, res) => {
  await Item.find({}, (err, items) => {
    if (err) {
      return res
        .status(400)
        .json({
          success: false,
          error: err,
        });
    }
    if (!items.length) {
      return res
        .status(404)
        .json({
          success: false,
          error: 'Item not found',
        });
    }
    return res
      .status(200)
      .json({
        success: true,
        data: items,
      });
  }).catch(err => console.error(err));
};

getItemById = async (req, res) => {
  await Item.find({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res
        .status(400)
        .json({
          success: false,
          error: err,
        });
    }
    if (!items.length) {
      return res
        .status(404)
        .json({
          success: false,
          error: 'Item not found',
        });
    }
    return res
      .status(200)
      .json({
        success: true,
        data: item,
      });
  }).catch(err => console.error(err));
};

createItem = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item.',
    });
  }

  const item = new Item(body);

  if (!item) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Item not created!',
      });
    });
};

updateItem = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item to update.',
    });
  }

  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Item not found!',
      });
    }
    item.name = body.name;
    item.timeFrame = body.timeFrame;
    item.priority = body.priority;
    item.content = body.content;
    item
      .save()
      .then(() => {
        return res.status(200)
          .json({
            success: true,
            id: item._id,
            message: 'Item updated!',
          });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Item not updated!',
        });
      });
  });
};

deleteItem = async (req, res) => {
  await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res
        .status(400)
        .json({
          succes: false,
          error: err,
        });
    }

    if (!item) {
      return res
        .status(400)
        .json({
          success: false,
          error: 'Item not found!',
        });
    }

    return res
      .status(200)
      .json({
        success: true,
        data: item,
      });
  }).catch(err => console.error(err));
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};