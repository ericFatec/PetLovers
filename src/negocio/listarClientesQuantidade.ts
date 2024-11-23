import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listar from "./listar";

export default class ListarClientesQuantidade extends Listar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('\nOs 10 clientes que mais consumiram em quantidade:\n');

        this.clientes.forEach(cliente => {
            const quantidadeProdutosConsumidos = cliente.getProdutosConsumidos.length;
            const quantidadeServicosConsumidos = cliente.getServicosConsumidos.length;
            const quantidadeTotalConsumida = quantidadeProdutosConsumidos + quantidadeServicosConsumidos;

            cliente.quantidadeTotalConsumida = quantidadeTotalConsumida;
        });

        const clientesOrdenados = [...this.clientes].sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida);

        const clientes10 = clientesOrdenados.slice(0, 10);

        clientes10.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: ${cliente.quantidadeTotalConsumida} produtos ou serviços consumidos.\n`);
        });
    }
}