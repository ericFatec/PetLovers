import Cliente from "../modelo/cliente";

export default class PegarCliente {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public selecionar(numeroCpf: string): Cliente | null {
        const clienteAlvo = this.clientes.find(cliente => numeroCpf === cliente.getCpf.getValor);
        return clienteAlvo || null;
    }
}