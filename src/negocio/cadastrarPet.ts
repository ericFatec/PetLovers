import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default function cadastrarPet(cliente: Cliente) {
  let entrada = new Entrada();
  let nomePet = entrada.receberTexto("Insira o nome de seu pet: ");
  let especiePet = entrada.receberTexto("Insira a espécie de seu pet: ");
  let racaPet = entrada.receberTexto("Insira a raça de seu pet: ");

  let sexoPet = "";
  while (true) {
    sexoPet = entrada.receberTexto("Insira o gênero de seu pet (M/F): ").toLowerCase();
    if (sexoPet === "m" || sexoPet === "f") {
      break;
    } else {
      console.log("Gênero inválido.");
    }
  }

  let novoPet = new Pet(nomePet, racaPet, sexoPet === 'm' ? 'macho' : 'fêmea', especiePet);
  cliente.adicionarPet(novoPet);
}