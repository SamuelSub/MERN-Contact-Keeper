const express = require('express');
const router = express.Router();

// @route GET api/products
// @desc Get all the products
// @access Public
router.get('/', (req, res) => {
  res.send('Get all products');
});

// @route GET api/products/:id
// @desc Get elements by id
// @access Private
router.get('/:id', (req, res) => {
  res.send('Get product by id');
});

// @route POST api/products
// @desc creates new product
// @access Private
router.post('/', (req, res) => {
  res.send('Create new product');
});

// @route PUT api/products/
// @desc updates a product
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update product');
});

// @route DELETE api/products/:id
// @desc deletes a product
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a product');
});


module.exports = router;