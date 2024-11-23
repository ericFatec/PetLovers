import Editar from "./editar";
import Pet from "../modelo/pet";

export default class EditarPet extends Editar<Pet> {
  public editar(pet: Pet): void {
    console.log("O que deseja editar?");
    const opcoes = ["Nome", "Espécie", "Raça", "Gênero"];
    const escolha = this.receberEscolha(opcoes);

    switch (escolha) {
      case 1:
        const nome = this.entrada.receberTexto(`Insira o novo nome do pet: `);
        pet.setNome(nome);
        console.log("\nEdição realizada com sucesso!\n");
        break;

      case 2:
        const especie = this.entrada.receberTexto(`Insira a nova espécie do pet: `);
        pet.setEspecie(especie);
        console.log("\nEdição realizada com sucesso!\n");
        break;

      case 3:
        const raca = this.entrada.receberTexto(`Insira a nova raça do pet: `);
        pet.setRaca(raca);
        console.log("\nEdição realizada com sucesso!\n");
        break;

      case 4:
        const sexo = this.entrada.receberTexto(`Insira o novo sexo do pet: `);
        pet.setSexo(sexo);
        console.log("\nEdição realizada com sucesso!\n");
        break;

      default:
        console.log("Desculpe, não consegui identificar a opção inserida");
    }
  }
}
