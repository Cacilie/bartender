const fs = require('fs');
const base64ToImage = require('base64-to-image');


const imageAfterHook = () => {
  return async context => {
    if (context.filetosend) {
      let path = 'public/images/';

      if (!fs.existsSync('public/images')) {
        fs.mkdirSync('public/images');
      }

      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }

      let imageInfo = base64ToImage(context.filetosend, path, {
        fileName: context.result._id
      });

      context.result = await context.app.service('drinks').patch(context.result.id, {
        file: `images/${imageInfo.fileName}`
      });

      return context;
    }
  };
};


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [async context => {
    
      context.filetosend = await context.data.filetosend;
      delete context.data.filetosend
      return context;
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [imageAfterHook()],
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
