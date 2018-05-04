// Initializes the `user_credentials` service on path `/user_credentials`
const createService = require('feathers-knex');
const createModel = require('../../models/user-credentials.model');
const hooks = require('./user-credentials.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user_credentials',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user_credentials', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user_credentials');

  service.hooks(hooks);
};
