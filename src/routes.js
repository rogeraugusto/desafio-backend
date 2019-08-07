const express = require("express");
const validate = require("express-validation");
const handle = require("express-async-handler");

const routes = express.Router();

// const authMiddleare = require('./app/middlewares/auth')
const baseUrlConfig = require("./config/baseurl");

const controllers = require("./app/controllers");
const validators = require("./app/validators");

/*
routes.post(
  `${baseUrlConfig.url}/users`,
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  `${baseUrlConfig.url}/sessions`,
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleare)
*/

/**
 * Products
 */

routes.get(
  `${baseUrlConfig.url}/products`,
  handle(controllers.ProductController.index)
);
routes.get(
  `${baseUrlConfig.url}/products/:id`,
  handle(controllers.ProductController.show)
);

routes.post(
  `${baseUrlConfig.url}/product`,
  validate(validators.Product),
  handle(controllers.ProductController.store)
);

/**
 * Cart
 */

routes.post(
  `${baseUrlConfig.url}/add_to_cart`,
  validate(validators.Cart),
  handle(controllers.CartController.store)
);

/**
 * Transaction
 */

routes.post(
  `${baseUrlConfig.url}/buy`,
  validate(validators.Transaction),
  handle(controllers.TransactionController.store)
);

/**
 * History
 */

routes.get(
  `${baseUrlConfig.url}/history`,
  handle(controllers.HistoryController.index)
);
routes.get(
  `${baseUrlConfig.url}/history/:clientId`,
  handle(controllers.HistoryController.show)
);
routes.post(
  `${baseUrlConfig.url}/history`,
  handle(controllers.HistoryController.store)
);

module.exports = routes;
