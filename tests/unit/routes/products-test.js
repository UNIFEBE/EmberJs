import { module, test } from 'qunit';
import { setupTest } from 'aplicacao-prog3/tests/helpers';

module('Unit | Route | products', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:products');
    assert.ok(route);
  });
});
