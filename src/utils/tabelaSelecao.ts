import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class TabelaDeSelecao {
  public static selecionarProduto(produtos: Produto[]): Produto | null {
    if (produtos.length === 0) {
      console.log("Nenhum produto disponível.");
      return null;
    }

    console.log("\nProdutos disponíveis:");
    produtos.forEach((produto, index) => {
      console.log(`${index + 1} - ${produto.nome} (R$${produto.valor.toFixed(2)})`);
    });

    const entrada = require("prompt-sync")();
    const escolha = Number(entrada("Escolha o número do produto desejado: "));

    if (escolha >= 1 && escolha <= produtos.length) {
      return produtos[escolha - 1];
    } else {
      console.log("Opção inválida.");
      return null;
    }
  }

  public static selecionarServico(servicos: Servico[]): Servico | null {
    if (servicos.length === 0) {
      console.log("Nenhum serviço disponível.");
      return null;
    }

    console.log("\nServiços disponíveis:");
    servicos.forEach((servico, index) => {
      console.log(`${index + 1} - ${servico.nome} (R$${servico.valor.toFixed(2)})`);
    });

    const entrada = require("prompt-sync")();
    const escolha = Number(entrada("Escolha o número do serviço desejado: "));

    if (escolha >= 1 && escolha <= servicos.length) {
      return servicos[escolha - 1];
    } else {
      console.log("Opção inválida.");
      return null;
    }
  }
}
