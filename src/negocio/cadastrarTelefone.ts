import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";

export default function cadastrarTelefone(cliente: Cliente) {
    let entrada = new Entrada()

    let ddd = entrada.receberTexto(`Insira o DDD de seu telefone: `);
    let numeroTelefone = entrada.receberTexto(`Insira o número de seu telefone sem DDD: `);

    let telefone = new Telefone(ddd, numeroTelefone)
    cliente.adicionarTelefone(telefone)
}