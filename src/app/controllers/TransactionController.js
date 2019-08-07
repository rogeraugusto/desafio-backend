const Transaction = require("../models/Transaction");
const Cart = require("../models/Cart");

class TransactionController {
  async store(req, res) {
    const { cart_id } = req.body;

    if (await Transaction.findOne({ cart_id })) {
      return res.status(400).json({ error: "Purchase already made" });
    }

    if (!(await Cart.findOne({ cart_id }))) {
      return res.status(400).json({ error: "Cart not available" });
    }

    const transaction = await Transaction.create(req.body);

    return res.json(transaction);
  }
}

module.exports = new TransactionController();
