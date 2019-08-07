const Cart = require("../models/Cart");
const Product = require("../models/Product");

class CartController {
  async store(req, res) {
    const { product_id } = req.body;

    if (!(await Product.findOne({ product_id }))) {
      return res.status(400).json({ error: "Product not available" });
    }

    if (await Cart.findOne({ product_id })) {
      return res.status(400).json({ error: "Product is already in cart" });
    }

    const cart = await Cart.create(req.body);

    return res.json(cart);
  }
}

module.exports = new CartController();
