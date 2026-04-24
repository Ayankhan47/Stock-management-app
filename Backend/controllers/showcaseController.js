const Product = require('../models/Product');

// @desc    Get Featured Products
// @route   GET /api/showcase/featured
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({}).limit(4);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getFeaturedProducts
};
