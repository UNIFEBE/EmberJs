import { module, test } from 'qunit';
import { setupTest } from 'aplicacao-prog3/tests/helpers';

module('Unit | Route | clothes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes');
    assert.ok(route);
  });
});
