import Editar from "./editar";
import Servico from "../modelo/servico";

export default class EditarServico extends Editar<Servico> {
    public editar(servico: Servico): void {
        console.log(`\nEdição das informações de serviço`);

        const opcoes = ["Nome", "Preço"];
        const escolha = this.receberEscolha(opcoes);

        switch (escolha) {
            case 1:
                const nome = this.entrada.receberTexto(`Insira o novo nome do serviço: `);
                servico.nome = nome;
                console.log(`\nServiço editado com sucesso!\n`);
                break;

            case 2:
                const valor = this.entrada.receberNumero(`Insira o novo preço do serviço: `);
                servico.valor = valor;
                console.log(`\nServiço editado com sucesso!\n`);
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    }
}
