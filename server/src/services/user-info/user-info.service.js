// Initializes the `user_info` service on path `/user_info`
const createService = require('feathers-knex');
const createModel = require('../../models/user-info.model');
const hooks = require('./user-info.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user_info',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user_info', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user_info');

  service.hooks(hooks);
};
