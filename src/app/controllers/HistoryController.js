const History = require("../models/History");

class HistoryController {
  async index(req, res) {
    const filters = {};

    if (req.query.value_min || req.query.value_max) {
      filters.value = {};

      if (req.query.value_min) {
        filters.value.$gte = req.query.value_min;
      }

      if (req.query.value_max) {
        filters.value.$lte = req.query.value_max;
      }
    }

    const histories = await History.paginate(filters, {
      page: req.query.page || 1,
      limit: 20
    });

    return res.json(histories);
  }

  async show(req, res) {
    const history = await History.find({ client_id: req.params.clientId });

    return res.json(history);
  }

  async store(req, res) {
    const history = await History.create({ ...req.body });

    return res.json(history);
  }
}

module.exports = new HistoryController();
