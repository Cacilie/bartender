// Initializes the `user_roles` service on path `/user_roles`
const createService = require('feathers-knex');
const createModel = require('../../models/user-roles.model');
const hooks = require('./user-roles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user_roles',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user_roles', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user_roles');

  service.hooks(hooks);
};
