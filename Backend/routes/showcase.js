const express = require('express');
const router = express.Router();
const { getFeaturedProducts } = require('../controllers/showcaseController');

// @route   GET /api/showcase/featured
// @access  Public
router.get('/featured', getFeaturedProducts);

module.exports = router;
