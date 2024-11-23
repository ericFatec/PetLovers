import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastrar from "./cadastrar"

export default class CadastrarServico extends Cadastrar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do serviço`);
        
        let nomeServico = this.entrada.receberTexto('Insira o nome do serviço: ')
        let valorServico = this.entrada.receberNumero('Insira o valor do serviço: ')
        let servico = new Servico()

        servico.nome = nomeServico
        servico.valor = valorServico
        
        this.servicos.push(servico)
        
        console.log(`\nCadastro realizado com sucesso!\n`);
    }
}