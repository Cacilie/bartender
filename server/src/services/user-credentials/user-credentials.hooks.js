var jwt = require('jsonwebtoken');
var jconfig = require('../../JwtConfig');

module.exports = {
  before: {
    all: [],
    find: [context => {
      return context;
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [context => {
      if(context.result.total == 0){
        context.result.token = 0
        return context
      }
      let date =  new Date();
      let token = jwt.sign({
        userid: context.result.data[0].id,
      }, '2H8mO]Lk,MrF7w{')
      delete context.result.data[0].password
      context.result.token = token
      return context

    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
