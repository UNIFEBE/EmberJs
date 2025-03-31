import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductsController extends Controller {
    @tracked produtos = [
        { id: 1, nome: "Bola", descricao: "Bola de Futebol", preco: 20.00 },
        { id: 2, nome: "Carrinho", descricao: "Carrinho Hot Wheels", preco: 30.00 }
    ];

    @tracked novoProduto = { nome: "", descricao: "", preco: "" };
    @tracked editandoProduto = null;

    @action
    atualizarCampoNovoProduto(campo, event) {
        this.novoProduto = { ...this.novoProduto, [campo]: event.target.value };
    }

    @action
    adicionarProduto() {
        let { nome, descricao, preco } = this.novoProduto;

        if (!nome.trim()) {
            this.toast("O campo Nome é obrigatório!", "error");
            return;
        }
        if (!preco || isNaN(preco) || parseFloat(preco) <= 0) {
            this.toast("O preço deve ser um número válido maior que zero!", "error");
            return;
        }

        let novoId = this.produtos.length ? Math.max(...this.produtos.map(p => p.id)) + 1 : 1;

        this.produtos = [
            ...this.produtos,
            { id: novoId, nome, descricao, preco: parseFloat(preco) }
        ];

        this.novoProduto = { nome: "", descricao: "", preco: "" };
        this.toast("Produto adicionado com sucesso!", "success");
    }

    @action
    removerProduto(produtoId) {
        this.produtos = this.produtos.filter(produto => produto.id !== produtoId);
        this.toast("Produto removido com sucesso!", "success");
    }

    @action
    editarProduto(produto) {
        this.editandoProduto = { ...produto };
    }

    @action
    atualizarCampoEdicao(campo, event) {
        this.editandoProduto = { ...this.editandoProduto, [campo]: event.target.value };
    }

    @action
    salvarEdicao() {
        let { id, nome, descricao, preco } = this.editandoProduto;

        if (!nome.trim()) {
            this.toast("O campo Nome é obrigatório!", "error");
            return;
        }
        if (!preco || isNaN(preco) || parseFloat(preco) <= 0) {
            this.toast("O preço deve ser um número válido maior que zero!", "error");
            return;
        }

        let produtoOriginal = this.produtos.find(p => p.id === id);
        if (JSON.stringify(produtoOriginal) === JSON.stringify(this.editandoProduto)) {
            this.toast("Nenhuma alteração foi feita!", "info");
            return;
        }

        this.produtos = this.produtos.map(produto =>
            produto.id === id ? { ...this.editandoProduto } : produto
        );
        this.editandoProduto = null;
        this.toast("Produto editado com sucesso!", "success");
    }

    @action
    cancelarEdicao() {
        this.editandoProduto = null;
        this.toast("Edição cancelada!", "info");
    }

    toast(message, type) {
        let colors = {
            success: "#28a745",
            error: "#dc3545",
            info: "#007bff"
        };

        Toastify({
            text: message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: colors[type] || "#333",
                color: "#fff",
            },
        }).showToast();
    }
}
