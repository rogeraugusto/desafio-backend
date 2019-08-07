const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const filters = {};

    if (req.query.price_min || req.query.price_max) {
      filters.price = {};

      if (req.query.price_min) {
        filters.price.$gte = req.query.price_min;
      }

      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max;
      }
    }

    if (req.query.store) {
      filters.store = new RegExp(req.query.store, "i");
    }

    const products = await Product.paginate(filters, {
      page: req.query.page || 1,
      limit: 20
    });

    return res.json(products);
  }

  async show(req, res) {
    const product = await Product.find({ product_id: req.params.id });

    return res.json(product);
  }

  async store(req, res) {
    const { product_id } = req.body;

    if (await Product.findOne({ product_id })) {
      return res.status(400).json({ error: "Product already exists" });
    }

    const product = await Product.create({ ...req.body });

    return res.json(product);
  }
}

module.exports = new ProductController();
