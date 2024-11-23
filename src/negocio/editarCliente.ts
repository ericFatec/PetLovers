import Editar from "./editar";
import Cliente from "../modelo/cliente";

export default class EditarCliente extends Editar<Cliente> {
    public editar(cliente: Cliente): void {
        console.log("\nEditar informações do cliente");

        const opcoes = ["Nome", "Nome social"];
        const escolha = this.receberEscolha(opcoes);

        switch (escolha) {
            case 1:
                const nome = this.entrada.receberTexto("Insira o novo nome do cliente: ");
                cliente.nome = nome;
                console.log("\nEdição realizada com sucesso! :)\n");
                break;

            case 2:
                const nomeSocial = this.entrada.receberTexto("Insira o novo nome social do cliente: ");
                cliente.nomeSocial = nomeSocial;
                console.log("\nEdição realizada com sucesso! :)\n");
                break;

            default:
                console.log("Desculpe, não consegui identificar a opção inserida");
                break;
        }
    }
}
