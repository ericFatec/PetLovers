import Cliente from "../modelo/cliente";
import Listar from "./listar";

export default class ListarClientes extends Listar {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(`\nLista de todos os clientes:\n`);

    this.clientes.forEach((cliente) => {
      console.log(`Nome: ${cliente.nome}`);
      console.log(`Nome social: ${cliente.nomeSocial}`);
      console.log(`CPF: ${cliente.getCpf.getValor}`);

      const listaRgs = cliente.getRgs.map((rg) => rg.getValor);

      const listaTelefones = cliente.getTelefones.map(
        (telefone) => `(${telefone.getDDD}) ${telefone.getNumero}`
      );

      const listaPets = cliente.getPets.map((pet) => {
        const produtosConsumidos = this.contarItens(pet.getProdutosConsumidos);
        const servicosConsumidos = this.contarItens(pet.getServicosConsumidos);

        return {
          nome: pet.getNome,
          produtosConsumidos,
          servicosConsumidos,
        };
      });

      const listaServicosAtribuidos = this.contarItens(cliente.getServicosConsumidos);
      const listaProdutosConsumidos = this.contarItens(cliente.getProdutosConsumidos);

      console.log(`RGs: ${listaRgs.join(", ")}`);
      console.log(`Telefones: ${listaTelefones.join(", ")}`);
      console.log(`Pets:`);
      if (listaPets.length > 0) {
        listaPets.forEach((pet) => {
          console.log(`  Nome: ${pet.nome}`);
          console.log(`  Produtos consumidos: ${this.formatarContagemItens(pet.produtosConsumidos) || "Nenhum"}`);
          console.log(`  Serviços consumidos: ${this.formatarContagemItens(pet.servicosConsumidos) || "Nenhum"}`);
        });
      } else {
        console.log("  Nenhum pet cadastrado.");
      }
      console.log(`Produtos consumidos: ${this.formatarContagemItens(listaProdutosConsumidos) || "Nenhum"}`);
      console.log(`Serviços atribuídos: ${this.formatarContagemItens(listaServicosAtribuidos) || "Nenhum"}`);
      console.log(`Valor gasto: R$ ${cliente.valorGasto.toFixed(2)}\n`);
    });
  }

  private contarItens(itens: Array<any>): Array<string> {
    const contador: { [key: string]: number } = {};

    itens.forEach((item) => {
      const nomeItem = item.nome;
      contador[nomeItem] = (contador[nomeItem] || 0) + 1;
    });

    return Object.entries(contador).map(([nome, count]) => `${nome}: ${count}`);
  }

  private formatarContagemItens(itens: Array<string>): string {
    return itens.join(", ");
  }
}
