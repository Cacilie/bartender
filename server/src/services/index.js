const drinks = require('./drinks/drinks.service.js');
const orders = require('./orders/orders.service.js');
const roles = require('./roles/roles.service.js');
const userCredentials = require('./user-credentials/user-credentials.service.js');
const userInfo = require('./user-info/user-info.service.js');
const userRoles = require('./user-roles/user-roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(drinks);
  app.configure(orders);
  app.configure(roles);
  app.configure(userCredentials);
  app.configure(userInfo);
  app.configure(userRoles);
};
