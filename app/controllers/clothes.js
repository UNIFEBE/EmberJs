import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @tracked meuTexto = "";

    @action
    atualizarTexto(novoValor) {
        this.meuTexto = novoValor;
    }
}