import Entrada from "../io/entrada";

export default abstract class Editar<T> {
    protected entrada: Entrada;

    constructor() {
        this.entrada = new Entrada();
    }
    
    public abstract editar(entidade: T): void;

    protected receberEscolha(opcoes: string[]): number {
        console.log("\nO que deseja editar?");
        opcoes.forEach((opcao, index) => {
            console.log(`${index + 1}. ${opcao}`);
        });
        return this.entrada.receberNumero("Digite o número de sua escolha: ");
    }
}
