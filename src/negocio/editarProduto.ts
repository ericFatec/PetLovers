import Editar from "./editar";
import Produto from "../modelo/produto";

export default class EditarProduto extends Editar<Produto> {
    public editar(produto: Produto): void {
        console.log(`\nEdição das informações de produto`);

        const opcoes = ["Nome", "Valor"];
        const escolha = this.receberEscolha(opcoes);

        switch (escolha) {
            case 1:
                const nome = this.entrada.receberTexto(`Insira o novo nome do produto: `);
                produto.nome = nome;
                console.log(`\nEdição realizada com sucesso!\n`);
                break;

            case 2:
                const valor = this.entrada.receberNumero(`Insira o novo valor do produto: `);
                produto.valor = valor;
                console.log(`\nEdição realizada com sucesso!\n`);
                break;

            default:
                console.log("Desculpe, não consegui identificar a opção inserida");
                break;
        }
    }
}
