const assert = require('assert');
const app = require('../../src/app');

describe('\'user_credentials\' service', () => {
  it('registered the service', () => {
    const service = app.service('user_credentials');

    assert.ok(service, 'Registered the service');
  });
});
