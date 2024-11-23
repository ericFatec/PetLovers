import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastrarCliente from "../negocio/cadastrarCliente";
import CadastrarProduto from "../negocio/cadastrarProduto";
import CadastrarServico from "../negocio/cadastrarServico";
import EditarCliente from "../negocio/editarCliente";
import EditarPet from "../negocio/editarPet";
import EditarProduto from "../negocio/editarProduto";
import EditarServico from "../negocio/editarServico";
import ListarClientes from "../negocio/listarClientes";
import ListarProdutos from "../negocio/listarProdutos";
import ListarServicos from "../negocio/listarServicos";
import TabelaDeSelecao from "../utils/tabelaSelecao";
import ListarClientesQuantidade from "../negocio/listarClientesQuantidade";
import ListarClientesValor from "../negocio/listarClientesValor";
import ListarMaisConsumidos from "../negocio/listarMaisConsumidos";
import PegarCliente from "../negocio/pegarCliente";
import PegarPet from "../negocio/pegarPet";
import cadastrarRG from "../negocio/cadastrarRG";
import cadastrarPet from "../negocio/cadastrarPet";
import cadastrarTelefone from "../negocio/cadastrarTelefone";
import ListarPorEspecieRaca from "../negocio/listarRacaEspecieQuantidade";

console.log(`\nBem-vindo ao sistema PetLovers!`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
  console.log("\n1 - Gerenciar clientes");
  console.log("2 - Gerenciar serviços");
  console.log("3 - Gerenciar produtos");
  console.log("\nInformações de gerenciamento");
  console.log("4 - Listar produtos e serviços mais consumidos");
  console.log("5 - Listar produtos e serviços mais consumidos por espécie e raça");
  console.log("6 - 5 clientes que mais consumiram (valor)");
  console.log("7 - 10 clientes que mais consumiram (quantidade)");
  console.log(`\n0. Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Escolha uma opção: `);
  console.clear();

  switch (opcao) {
    // Cliente -----------------------------------------------------------------------------------------------------------------------------------------------------------
    case 1:
    let opcaoGerenciamento: number;

    do {
        console.log("\nGerenciar Clientes");
        console.log("1 - Cadastrar cliente");
        console.log("2 - Selecionar cliente");
        console.log("3 - Listar clientes")
        console.log("0 - Voltar ao menu principal");

        opcaoGerenciamento = entrada.receberNumero("Escolha uma opção: ");
        console.clear();

        switch (opcaoGerenciamento) {
            case 1:
                let cadastro = new CadastrarCliente(empresa.getClientes);
                cadastro.cadastrar();
                break;

            case 2:
                let cpfSelecionado = entrada.receberTexto("Digite o CPF do cliente para selecionar: ");
                let selecionarCliente = new PegarCliente(empresa.getClientes);
                let clienteSelecionado = selecionarCliente.selecionar(cpfSelecionado);

                if (clienteSelecionado) {
                    let opcaoCliente: number;
                    let clienteDeletado = false;

                    do {
                        console.log(`\nGerenciar Cliente: ${clienteSelecionado.nome}`);
                        console.log("1 - RGs");
                        console.log("2 - Telefones");
                        console.log("3 - Pets");
                        console.log("4 - Editar informações");
                        console.log("5 - Excluir cliente");
                        console.log("0 - Voltar");

                        opcaoCliente = entrada.receberNumero("Escolha uma opção: ");
                        console.clear();

                        switch (opcaoCliente) {
                          case 1:
                              let opcaoRg: number;
          
                              do {
                                  console.log("\nRGs do cliente:");
                                  if (clienteSelecionado.getRgs.length > 0) {
                                      clienteSelecionado.getRgs.forEach((rg) => {
                                          console.log(`${rg.getValor} (${rg.getDataEmissao.toLocaleDateString()})`);
                                      });
                                  } else {
                                      console.log("Nenhum RG cadastrado.");
                                  }
                                  console.log("1 - Adicionar RG");
                                  console.log("2 - Excluir RG");
                                  console.log("0 - Voltar");
          
                                  opcaoRg = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();
          
                                  switch (opcaoRg) {
                                      case 1:
                                          cadastrarRG(clienteSelecionado);
                                          console.log("\nRG adicionado com sucesso!");
                                          break;
          
                                      case 2:
                                          let rgValor = entrada.receberTexto("Digite o valor do RG que deseja remover: ");
                                          let rg = clienteSelecionado.getRgs.find((r) => r.getValor === rgValor);
          
                                          if (rg) {
                                              clienteSelecionado.removerRG(rg);
                                          } else {
                                              console.log("\nRG não encontrado.");
                                          }
                                          break;
          
                                      case 0:
                                          console.log("\nVoltando ao menu do cliente...");
                                          break;
          
                                      default:
                                          console.log("Opção inválida.");
                                  }
                              } while (opcaoRg !== 0);
                              break;
          
                          case 2:
                              let opcaoTelefone: number;
          
                              do {
                                  console.log("\nTelefones do cliente:");
                                  if (clienteSelecionado.getTelefones.length > 0) {
                                      clienteSelecionado.getTelefones.forEach((telefone) => {
                                          console.log(`(${telefone.getDDD}) ${telefone.getNumero}`);
                                      });
                                  } else {
                                      console.log("Nenhum telefone cadastrado.");
                                  }
                                  console.log("1 - Adicionar Telefone");
                                  console.log("2 - Excluir Telefone");
                                  console.log("0 - Voltar");
          
                                  opcaoTelefone = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();
          
                                  switch (opcaoTelefone) {
                                      case 1:
                                          cadastrarTelefone(clienteSelecionado);
                                          console.log("\nTelefone adicionado com sucesso!");
                                          break;
          
                                      case 2:
                                          let ddd = entrada.receberTexto("Digite o DDD do telefone que deseja remover: ");
                                          let numero = entrada.receberTexto("Digite o número do telefone que deseja remover: ");
                                          let telefone = clienteSelecionado.getTelefones.find(
                                              (t) => t.getDDD === ddd && t.getNumero === numero
                                          );
          
                                          if (telefone) {
                                              clienteSelecionado.removerTelefone(telefone);
                                          } else {
                                              console.log("\nTelefone não encontrado.");
                                          }
                                          break;
          
                                      case 0:
                                          console.log("\nVoltando ao menu do cliente...");
                                          break;
          
                                      default:
                                          console.log("Opção inválida.");
                                  }
                              } while (opcaoTelefone !== 0);
                              break;
                            
                            case 3:
                                let opcaoPet: number;

                                do {
                                  let nomesPets = clienteSelecionado.getPets.map((pet) => pet.getNome).join(", ");
                                  console.log(`\nGerenciar pets: [${nomesPets || "Nenhum pet cadastrado"}]`);
                                  console.log("1 - Adicionar pet");
                                  console.log("2 - Selecionar pet")
                                  console.log("0 - Voltar");

                                  opcaoPet = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();

                                  switch(opcaoPet) {
                                      case 1:
                                        cadastrarPet(clienteSelecionado);
                                        console.log(`\nPet adicionado com sucesso!`);
                                        break;

                                      case 2:
                                        let pet = entrada.receberTexto("Digite o nome do pet: ");
                                        let selecionaPet = new PegarPet(clienteSelecionado.getPets);
                                        let petSelecionado = selecionaPet.selecionar(pet);

                                        if (petSelecionado) {
                                          let opcaoPetSelecionado: number;
                                          let petDeletado = false;

                                          do {
                                            console.log(`\nOpções:`);
                                            console.log("1 - Comprar produto");
                                            console.log("2 - Atribuir servico");
                                            console.log("3 - Editar informações");
                                            console.log("4 - Excluir pet");
                                            console.log("0 - Voltar");

                                            opcaoPetSelecionado = entrada.receberNumero("Escolha uma opção: ");
                                            console.clear();

                                            switch (opcaoPetSelecionado) {
                                              case 1:
                                                const produtoSelecionado = TabelaDeSelecao.selecionarProduto(empresa.getProdutos);
                                                if (produtoSelecionado) {
                                                  clienteSelecionado.consumirProduto(produtoSelecionado);
                                                  clienteSelecionado.valorGasto += produtoSelecionado.valor
                                                  petSelecionado.consumirProduto(produtoSelecionado);
                                                  console.log("Produto adicionado com sucesso!");
                                                }
                                                break;

                                              case 2:
                                                const servicoSelecionado = TabelaDeSelecao.selecionarServico(empresa.getServicos);
                                                if (servicoSelecionado) {
                                                  clienteSelecionado.atribuirServico(servicoSelecionado);
                                                  clienteSelecionado.valorGasto += servicoSelecionado.valor
                                                  petSelecionado.atribuirServico(servicoSelecionado);
                                                  console.log("Serviço atribuído com sucesso!");
                                                }
                                                break;

                                              case 3:
                                                let editarPet = new EditarPet();
                                                editarPet.editar(petSelecionado);
                                                break;

                                              case 4:
                                                if (clienteSelecionado.removerPet(petSelecionado)) {
                                                  petDeletado = true;
                                                }
                                                break;

                                              case 0:
                                                console.log("\nVoltando ao menu do cliente...");

                                              default:
                                                console.log("Opção inválida.");
                                            }
                                          } while (opcaoPetSelecionado !== 0 && !petDeletado)

                                          if(petDeletado) break;
                                        } else {
                                            console.log("\nPet não encontrado.");
                                        }
                                  }
                                } while (opcaoPet !== 0);
                                break;

                            case 4:
                                let editor = new EditarCliente();
                                editor.editar(clienteSelecionado);
                                console.log("\nInformações editadas com sucesso!");
                                break;

                            case 5:
                                if (empresa.removerCliente(clienteSelecionado)){
                                  clienteDeletado = true;
                                }
                                break;

                            case 0:
                                console.log("\nVoltando ao menu de gerenciamento de clientes...");
                                break;

                            default:
                                console.log("Opção inválida.");
                        }
                    } while (opcaoCliente !== 0 && !clienteDeletado);

                    if(clienteDeletado) break;
                } else {
                    console.log("\nCliente não encontrado.");
                }
                break;

            case 3:
                let listagem = new ListarClientes(empresa.getClientes);
                listagem.listar();
                break;

            case 0:
                console.log("\nVoltando ao menu principal...");
                break;

            default:
                console.log("Opção inválida.");
        }
    } while (opcaoGerenciamento !== 0);
    break;

    // Serviço -----------------------------------------------------------------------------------------------------------------------------------------------------------
    case 2:
      let opcaoGerenciamentoServico: number;

      do {
        console.log("\nGerenciar Serviços");
        console.log("1 - Cadastrar serviço");
        console.log("2 - Editar serviço");
        console.log("3 - Excluir serviço");
        console.log("4 - Listar serviços");
        console.log("0 - Voltar ao menu principal");

        opcaoGerenciamentoServico = entrada.receberNumero("Escolha uma opção: ");
        console.clear();

        switch (opcaoGerenciamentoServico) {
          case 1:
              let cadastroServico = new CadastrarServico(empresa.getServicos);
              cadastroServico.cadastrar();
              break;

          case 2:
              let servicoEditar = TabelaDeSelecao.selecionarServico(empresa.getServicos);

              if (servicoEditar) {
                  let editarServico = new EditarServico();
                  editarServico.editar(servicoEditar);
                  console.log("\nServiço editado com sucesso!");
              } else {
                  console.log("\nServiço não encontrado.");
              }
              break;

          case 3:
              let servicoExcluir = TabelaDeSelecao.selecionarServico(empresa.getServicos);

              if (servicoExcluir) {
                  empresa.removerServico(servicoExcluir);
                  console.log("\nServiço excluído com sucesso!");
              } else {
                  console.log("\nServiço não encontrado.");
              }
              break;

          case 4:
            let listagemServicos = new ListarServicos(empresa.getServicos);
            listagemServicos.listar();
            break;

          case 0:
              console.log("\nVoltando ao menu principal...");
              break;

          default:
              console.log("Opção inválida.");
        }
      } while (opcaoGerenciamentoServico !== 0)
      break;

    // Produto -----------------------------------------------------------------------------------------------------------------------------------------------------------
    case 3:
      let opcaoGerenciamentoProduto: number;

      do {
          console.log("\nGerenciar Produtos");
          console.log("1 - Cadastrar produto");
          console.log("2 - Editar produto");
          console.log("3 - Excluir produto");
          console.log("4 - Listar produtos");
          console.log("0 - Voltar ao menu principal");

          opcaoGerenciamentoProduto = entrada.receberNumero("Escolha uma opção: ");
          console.clear();

          switch (opcaoGerenciamentoProduto) {
              case 1:
                  let cadastroProduto = new CadastrarProduto(empresa.getProdutos);
                  cadastroProduto.cadastrar();
                  break;

              case 2:
                  let produtoEditar = TabelaDeSelecao.selecionarProduto(empresa.getProdutos);

                  if (produtoEditar) {
                      let editarProduto = new EditarProduto();
                      editarProduto.editar(produtoEditar);
                      console.log("\nProduto editado com sucesso!");
                  } else {
                      console.log("\nProduto não encontrado.");
                  }
                  break;

              case 3:
                  let produtoExcluir = TabelaDeSelecao.selecionarProduto(empresa.getProdutos);

                  if (produtoExcluir) {
                      empresa.removerProduto(produtoExcluir);
                      console.log("\nProduto excluído com sucesso!");
                  } else {
                      console.log("\nProduto não encontrado.");
                  }
                  break;

              case 4:
                  let listagemProdutos = new ListarProdutos(empresa.getProdutos);
                  listagemProdutos.listar();
                  break;

              case 0:
                  console.log("\nVoltando ao menu principal...");
                  break;

              default:
                  console.log("Opção inválida.");
          }
      } while (opcaoGerenciamentoProduto !== 0);
      break;

    // Listagens -----------------------------------------------------------------------------------------------------------------------------------------------------------
    case 4:
      let listagemProdutoServicos = new ListarMaisConsumidos(empresa.getClientes);
      listagemProdutoServicos.listar();
      break;

    case 5:
      let listagemProdutoServicosRaca = new ListarPorEspecieRaca(empresa.getClientes);
      listagemProdutoServicosRaca.listar();
      break;

    case 6:
      let lista5 = new ListarClientesValor(empresa.getClientes);
      lista5.listar();
      break;

    case 7:
      let lista10 = new ListarClientesQuantidade(empresa.getClientes);
      lista10.listar();
      break;

    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;

    default:
      console.log(`Operação não entendida :(`);
  }
}
