import { module, test } from 'qunit';
import { setupTest } from 'aplicacao-prog3/tests/helpers';

module('Unit | Route | vendas', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:vendas');
    assert.ok(route);
  });
});
