import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListarPorEspecieRaca {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('Produtos e serviços mais consumidos por espécie e raça de pet:\n');

        const especieRacaData: { 
            [key: string]: { 
                produto: Produto | null, 
                servico: Servico | null, 
                produtoQtd: number, 
                servicoQtd: number 
            } 
        } = {};

        this.clientes.forEach(cliente => {
            let pets = cliente.getPets;

            pets.forEach(pet => {
                const especie = pet.getEspecie;
                const raca = pet.getRaca;
                const chaveEspecieRaca = `${especie} - ${raca}`;

                if (!especieRacaData[chaveEspecieRaca]) {
                    especieRacaData[chaveEspecieRaca] = {
                        produto: null,
                        servico: null,
                        produtoQtd: 0,
                        servicoQtd: 0,
                    };
                }

                pet.getProdutosConsumidos.forEach(produto => {
                    especieRacaData[chaveEspecieRaca].produtoQtd += 1;

                    if (!especieRacaData[chaveEspecieRaca].produto || produto.valor > especieRacaData[chaveEspecieRaca].produto.valor) {
                        especieRacaData[chaveEspecieRaca].produto = produto;
                    }
                });

                pet.getServicosConsumidos.forEach(servico => {
                    especieRacaData[chaveEspecieRaca].servicoQtd += 1;

                    if (!especieRacaData[chaveEspecieRaca].servico || servico.valor > especieRacaData[chaveEspecieRaca].servico.valor) {
                        especieRacaData[chaveEspecieRaca].servico = servico;
                    }
                });
            });
        });

        for (const chave in especieRacaData) {
            const data = especieRacaData[chave];
            console.log(`\nEspécie e Raça: ${chave}`);
            console.log(`Produto mais consumido: ${data.produto ? data.produto.nome : 'Nenhum produto consumido'}`);
            console.log(`Quantidade: ${data.produtoQtd}`);
            console.log(`Serviço mais consumido: ${data.servico ? data.servico.nome : 'Nenhum serviço consumido'}`);
            console.log(`Quantidade: ${data.servicoQtd}`);
        }
    }
}