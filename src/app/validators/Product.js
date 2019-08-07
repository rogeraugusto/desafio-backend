const Joi = require('joi')

module.exports = {
  body: {
    product_id: Joi.string().required(),
    artist: Joi.string().required(),
    year: Joi.number().required(),
    album: Joi.string().required(),
    price: Joi.number().required(),
    store: Joi.string().required(),
    thumb: Joi.string().required(),
    date: Joi.string().required()
  }
}
