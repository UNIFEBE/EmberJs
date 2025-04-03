import EmberRouter from '@ember/routing/router';
import config from 'aplicacao-prog3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes');
  this.route('not-found', { path: '/*path' });
  this.route('products');
  this.route('vendas');
});
