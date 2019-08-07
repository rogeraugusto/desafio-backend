const Joi = require("joi");

module.exports = {
  body: {
    cart_id: Joi.string().required(),
    client_id: Joi.string().required(),
    product_id: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required()
  }
};
