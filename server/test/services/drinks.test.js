const assert = require('assert');
const app = require('../../src/app');

describe('\'drinks\' service', () => {
  it('registered the service', () => {
    const service = app.service('drinks');

    assert.ok(service, 'Registered the service');
  });
});
