const Joi = require("joi");

module.exports = {
  body: {
    client_id: Joi.string().required(),
    cart_id: Joi.string().required(),
    client_name: Joi.string().required(),
    value_to_pay: Joi.number().required(),
    credit_card: Joi.object({
      card_number: Joi.string().required(),
      card_holder_name: Joi.string().required(),
      cvv: Joi.number().required(),
      exp_date: Joi.string().required()
    }).required()
  }
};
