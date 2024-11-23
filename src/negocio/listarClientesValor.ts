import Cliente from "../modelo/cliente";
import Listar from "./listar";

export default class ListarClientesValor extends Listar {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log('\nOs 5 clientes que mais consumiram em valor:\n');

        const clientesOrdenados = [...this.clientes].sort((a, b) => b.valorGasto - a.valorGasto);

        const clientes5 = clientesOrdenados.slice(0, 5);

        clientes5.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: R$ ${cliente.valorGasto.toFixed(2)} gastos com produtos / serviços.\n`);
        });
    }
}
