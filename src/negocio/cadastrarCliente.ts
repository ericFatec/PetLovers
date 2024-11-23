import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastrar from "./cadastrar";
import cadastrarPet from "./cadastrarPet";
import cadastrarRG from "./cadastrarRG";
import cadastrarTelefone from "./cadastrarTelefone";

export default class CadastrarCliente extends Cadastrar {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nCadastro do cliente`);

    const nome = this.entrada.receberTexto(`Insira o nome do cliente: `);
    const nomeSocial = this.entrada.receberTexto(`Insira o nome social do cliente (ou pressione Enter para ignorar): `) || "";
    let valorCPF = this.entrada.receberTexto(`Insira o número do CPF: `);

    while (this.cpfExiste(valorCPF)) {
      console.log("Este CPF já está cadastrado.");
      valorCPF = this.entrada.receberTexto(`Insira um CPF diferente: `);
    }

    const dataEmissaoCPF = this.receberData(`Insira a data de emissão do CPF (Ex: 09/09/2000): `);

    const cpf = new CPF(valorCPF, dataEmissaoCPF);
    const cliente = new Cliente(nome, nomeSocial, cpf);

    cadastrarTelefone(cliente);

    const desejaRG = this.entrada.receberTexto(`Deseja adicionar um RG? (s/n): `).toLowerCase();
    if (desejaRG === "s") {
      cadastrarRG(cliente);
    }

    const desejaPet = this.entrada.receberTexto(`Deseja adicionar um pet? (s/n): `).toLowerCase();
    if (desejaPet === "s") {
      cadastrarPet(cliente);
    }

    this.clientes.push(cliente);
    console.log(`\nCadastro realizado com sucesso!`);
  }

  private receberData(mensagem: string): Date {
    const dataTexto = this.entrada.receberTexto(mensagem);
    const [dia, mes, ano] = dataTexto.split("/").map(Number);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      throw new Error(`Data inválida: ${dataTexto}`);
    }

    return new Date(ano, mes - 1, dia);
  }

  private cpfExiste(cpf: string): boolean {
    return this.clientes.some(cliente => cliente.getCpf.getValor === cpf);
  }
}
