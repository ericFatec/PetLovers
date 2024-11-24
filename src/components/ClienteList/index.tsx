import {Component} from "react";

export default class ListClients extends Component {
  clients: { id: number; name: string; cpf: string; telefone: string; }[];
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isPetModalOpen: false,
    };

    this.clients = [
      { id: 1, name: "Cliente A", cpf: "123.456.789-00", telefone: "(11) 12345-6789" },
      { id: 2, name: "Cliente B", cpf: "987.654.321-00", telefone: "(21) 98765-4321" },
      { id: 3, name: "Cliente C", cpf: "111.222.333-44", telefone: "(31) 11111-2222" },
      { id: 4, name: "Cliente D", cpf: "555.666.777-88", telefone: "(41) 55555-6666" },
      { id: 5, name: "Cliente E", cpf: "999.888.777-66", telefone: "(51) 99999-8888" },
      { id: 6, name: "Cliente F", cpf: "222.333.444-55", telefone: "(61) 22222-3333" },
    ];

    this.toggleModal = this.toggleModal.bind(this);
    this.togglePetModal = this.togglePetModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  togglePetModal() {
    this.setState((prevState) => ({ isPetModalOpen: !prevState.isPetModalOpen }));
  }

  render() {
    const { isModalOpen, isPetModalOpen } = this.state;
    return (
      <div className="max-h-100 max-[1100px]:w-full overflow-auto">
        <table className="bg-cat-white-100 w-full border-collapse rounded-lg shadow-md">
          <thead className="bg-dog-brown-200 text-white">
            <tr>
              <th className="border px-4 py-2 rounded-tl-lg">Nome</th>
              <th className="border px-4 py-2">CPF</th>
              <th className="border px-4 py-2">Telefone</th>
              <th className="border px-4 py-2 rounded-tr-lg hidden lg:table-cell">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.clients.map(client => (
              <tr
                key={client.id}
                className={`border-b ${ client.id === 1 ? 'bg-dog-brown-100 text-white' : ''}`}
              >
                <td className="border px-4 py-2">{client.name}</td>
                <td className="border px-4 py-2">{client.cpf}</td>
                <td className="border px-4 py-2">{client.telefone}</td>
                <td className="border px-4 py-2 hidden lg:table-cell">
                  <div className="flex space-x-2 justify-center">
                    <button className="border rounded bg-heart-peach-100 text-dog-brown-300 py-1 px-3">Adicionar Telefone</button>
                    <button className="border rounded bg-heart-peach-200 text-dog-brown-300 py-1 px-3">Adicionar RG</button>
                    <button className="border rounded bg-heart-peach-300 text-white py-1 px-3">Editar Info</button>
                    <button className="border rounded bg-heart-peach-400 text-white py-1 px-3">Gerenciar Pets</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Client Button */}
        <div className="mt-6 flex justify-center">
          <button onClick={this.toggleModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
            Cadastrar Novo Cliente
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Cadastrar Novo Cliente</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dog-brown-300">Nome</label>
                  <input type="text" placeholder="Nome" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dog-brown-300">Nome Social</label>
                  <input type="text" placeholder="Nome Social" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dog-brown-300">CPF</label>
                  <input type="text" placeholder="CPF" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dog-brown-300">Telefone</label>
                  <input type="text" placeholder="Telefone" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dog-brown-300">RG (Opcional)</label>
                  <input type="text" placeholder="RG" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-dog-brown-300">Informações do Pet</h4>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Nome do Pet</label>
                    <input type="text" placeholder="Nome do Pet" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Espécie</label>
                    <input type="text" placeholder="Espécie" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Raça</label>
                    <input type="text" placeholder="Raça" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Gênero</label>
                    <select className="w-full border border-dog-brown-100 px-4 py-2 rounded-md">
                      <option value="macho">Macho</option>
                      <option value="femea">Fêmea</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button onClick={this.toggleModal} className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md">
                    Fechar
                  </button>
                  <button className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded-md">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pets List (for the active client) */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Pets de Cliente 1</h3>
          <table className="bg-cat-white-100 w-full border-collapse rounded-lg shadow-md">
            <thead className="bg-dog-brown-200 text-white">
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Espécie</th>
                <th className="border px-4 py-2">Raça</th>
                <th className="border px-4 py-2">Gênero</th>
                <th className="border px-4 py-2 rounded-tr-lg hidden lg:table-cell">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Rex</td>
                <td className="border px-4 py-2">Cachorro</td>
                <td className="border px-4 py-2">Labrador</td>
                <td className="border px-4 py-2">Macho</td>
                <td className="border px-4 py-2 hidden lg:table-cell">
                  <div className="flex space-x-2 justify-center">
                    <button className="border rounded bg-heart-peach-200 text-dog-brown-300 py-1 px-3">Editar Info</button>
                    <button className="border rounded bg-heart-peach-300 text-white py-1 px-3">Comprar Produto</button>
                    <button className="border rounded bg-heart-peach-400 text-white py-1 px-3">Atribuir Serviço</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Add New Pet Button */}
          <div className="mt-6 flex justify-center">
            <button onClick={this.togglePetModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
              Adicionar Novo Pet
            </button>
          </div>

          {/* Modal for New Pet */}
          {isPetModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
                <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Cadastrar Novo Pet</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Nome do Pet</label>
                    <input type="text" placeholder="Nome do Pet" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Espécie</label>
                    <input type="text" placeholder="Espécie" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Raça</label>
                    <input type="text" placeholder="Raça" className="w-full border border-dog-brown-100 px-4 py-2 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dog-brown-300">Gênero</label>
                    <select className="w-full border border-dog-brown-100 px-4 py-2 rounded-md">
                      <option value="macho">Macho</option>
                      <option value="femea">Fêmea</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button onClick={this.togglePetModal} className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md">
                      Fechar
                    </button>
                    <button className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded-md">
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}