import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getServicos(){
        return this.servicos
    }
    public get getProdutos(){
        return this.produtos
    }

    public removerCliente(cliente: Cliente): boolean {
        const index = this.clientes.indexOf(cliente);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente '${cliente.nome}' removido com sucesso!`);
            return true;
        } else {
            console.log(`Erro: Cliente não encontrado.`);
            return false;
        }
    }
    public removerServico(servico: Servico): boolean {
        const index = this.servicos.indexOf(servico);
        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Serviço '${servico.nome}' removido com sucesso!`);
            return true;
        } else {
            console.log(`Erro: Serviço não encontrado.`);
            return false;
        }
    }
    public removerProduto(produto: Produto): boolean {
        const index = this.produtos.indexOf(produto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto '${produto.nome}' removido com sucesso!`);
            return true;
        } else {
            console.log(`Erro: Produto não encontrado.`);
            return false;
        }
    }
}