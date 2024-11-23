import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastrar from "./cadastrar"

export default class CadastrarProduto extends Cadastrar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do produto`);
        
        let nomeProduto = this.entrada.receberTexto('Insira o nome do produto: ')
        let valorProduto = this.entrada.receberNumero('Insira o valor do produto: ')
        let produto = new Produto()

        produto.nome = nomeProduto
        produto.valor = valorProduto
        
        this.produtos.push(produto)
        
        console.log(`\nCadastro realizado com sucesso!\n`);
    }
}