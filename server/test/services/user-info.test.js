const assert = require('assert');
const app = require('../../src/app');

describe('\'user_info\' service', () => {
  it('registered the service', () => {
    const service = app.service('user_info');

    assert.ok(service, 'Registered the service');
  });
});
