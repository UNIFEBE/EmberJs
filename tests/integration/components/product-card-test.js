import { module, test } from 'qunit';
import { setupRenderingTest } from 'aplicacao-prog3/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProductCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProductCard>
        template block text
      </ProductCard>
    `);

    assert.dom().hasText('template block text');
  });
});
