// Initializes the `drinks` service on path `/drinks`
const createService = require('feathers-knex');
const createModel = require('../../models/drinks.model');
const hooks = require('./drinks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'drinks',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/drinks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('drinks');

  service.hooks(hooks);
};
