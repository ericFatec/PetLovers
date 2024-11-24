import { useState, useEffect } from 'react';
import { useClientes } from '../../Hooks/getClientes';
import { Cliente } from '../../types';
import AddClientForm from '../ClientForm';
import ClientEditModal from '../ClientEditForm';
import PhoneModal from '../ClientPhoneModal';

export default function ListClients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [activeClient, setActiveClient] = useState(null);
  const [activePet, setActivePet] = useState(null);
  const [activeClientPets, setActiveClientPets] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Cliente | null>(null);
  const [petsData, setPetsData] = useState<{ [key: number]: any[] }>({});

  const { data: clients, isLoading, isError } = useClientes();

  const petList = [
    { nome: "Rex", especie: "Cachorro", raca: "Labrador", genero: "Macho" },
    { nome: "Luna", especie: "Gato", raca: "Siamês", genero: "Fêmea" },
    { nome: "Bella", especie: "Cachorro", raca: "Bulldog", genero: "Fêmea" },
    { nome: "Max", especie: "Cachorro", raca: "Beagle", genero: "Macho" },
    { nome: "Charlie", especie: "Cachorro", raca: "Poodle", genero: "Macho" },
    { nome: "Mia", especie: "Gato", raca: "Persa", genero: "Fêmea" },
    { nome: "Simba", especie: "Gato", raca: "Maine Coon", genero: "Macho" },
    { nome: "Toby", especie: "Cachorro", raca: "Shih Tzu", genero: "Macho" },
    { nome: "Chloe", especie: "Gato", raca: "Bengal", genero: "Fêmea" },
    { nome: "Rocky", especie: "Cachorro", raca: "Rottweiler", genero: "Macho" }
  ];

  const assignPetsToClients = (clients: Cliente[]) => {
    const petsData: { [key: number]: any[] } = {};
  
    const availablePets = [...petList];
  
    clients.forEach(client => {
      const clientPets: any[] = [];
      const remainingPets = [...availablePets];
  
      const numPetsForClient = Math.floor(Math.random() * 6);
  
      for (let i = 0; i < numPetsForClient; i++) {
        if (remainingPets.length === 0) break;
  
        const randomIndex = Math.floor(Math.random() * remainingPets.length);
        const pet = remainingPets[randomIndex];
  
        clientPets.push(pet);
        remainingPets.splice(randomIndex, 1);
      }
  
      petsData[client.id] = clientPets;
    });
  
    return petsData;
  }; 

  useEffect(() => {
    if (clients && clients.length > 0) {
      setPetsData(assignPetsToClients(clients));
    }
  }, [clients]);

  console.log(petsData)

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const togglePetModal = () => setIsPetModalOpen(!isPetModalOpen);

  const toggleClientPets = (id) => {
    setActiveClientPets(id)
    setActiveClient(null)
  }

  const toggleClientActions = (id) => {
    if (activeClient === id) {
      setActiveClient(null);
    } else {
      setActiveClient(id);
    }
  };
  const togglePetActions = (id) => {
    if (activePet === id) {
      setActivePet(null);
    } else {
      setActivePet(id);
    }
  };
  const handlePhoneModalOpen = (client: Cliente) => {
    setEditingClient(client);
    setIsPhoneModalOpen(true);
  };

  return (
    <div className="max-h-100 max-[1100px]:w-full overflow-auto">
      <table className="bg-cat-white-100 w-full border-collapse rounded-lg shadow-md">
        <thead className="bg-dog-brown-200 text-white">
          <tr>
            <th className="border px-4 py-2 rounded-tl-lg">Nome</th>
            <th className="border px-4 py-2">CEP</th>
            <th className="border px-4 py-2">Telefone</th>
            <th className="border px-4 py-2 rounded-tr-lg hidden lg:table-cell">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map(client => (
            <tr
              key={client.id}
              className={`border-b ${window.innerWidth < 1024 ? 'cursor-pointer' : ''} ${activeClient === client.id ? 'bg-dog-brown-100 text-white' : ''}`}
              onClick={() => window.innerWidth < 1024 && toggleClientActions(client.id)}
            >
              <td className="border px-4 py-2">{client.nomeSocial}</td>
              <td className="border px-4 py-2">{client.endereco.codigoPostal}</td>
              <td className="border px-4 py-2">{client.telefones.length > 0 ? `(${client.telefones[0].ddd}) ${client.telefones[0].numero}` : 'Sem registro'}</td>
              <td className="border px-4 py-2 hidden lg:table-cell">
                <div className="flex space-x-2 justify-center">
                  <button className="border rounded bg-heart-peach-100 text-dog-brown-300 py-1 px-3" onClick={() => handlePhoneModalOpen(client)}>Adicionar Telefone</button>
                  <button className="border rounded bg-heart-peach-200 text-dog-brown-300 py-1 px-3">Adicionar RG</button>
                  <button className="border rounded bg-heart-peach-300 text-white py-1 px-3" onClick={() => {setEditingClient(client); setIsEditModalOpen(true)}}>Editar Info</button>
                  <button className="border rounded bg-heart-peach-400 text-white py-1 px-3" onClick={() => toggleClientPets(client.id)}>Gerenciar Pets</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Client Button */}
      <div className="mt-6 flex justify-center">
        <button onClick={toggleModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
          Cadastrar Novo Cliente
        </button>
      </div>

      {/* Modal */}
      <AddClientForm isModalOpen={isModalOpen} toggleModal={toggleModal}/>

      {isEditModalOpen && editingClient && (
        <ClientEditModal
          isOpen={isEditModalOpen}
          clientData={editingClient}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isPhoneModalOpen && editingClient && (
        <PhoneModal
          isOpen={isPhoneModalOpen}
          onClose={() => setIsPhoneModalOpen(false)}
          client={editingClient}
        />
      )}

      {/* Context Overlay for Mobile */}
      {activeClient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Ações</h3>
            <div className="flex flex-col space-y-2">
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Adicionar Telefone</button>
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Adicionar RG</button>
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Editar Info</button>
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3" onClick={() => toggleClientPets(activeClient)}>Gerenciar Pets</button>
            </div>
            <button onClick={() => setActiveClient(null)} className="mt-4 bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md">
              Fechar
            </button>
          </div>
        </div>
      )}
      {activePet && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Ações</h3>
            <div className="flex flex-col space-y-2">
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Editar Info</button>
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Comprar Produto</button>
              <button className="border rounded bg-heart-peach-300 text-dog-brown-400 py-1 px-3">Atribuir Serviço</button>
            </div>
            <button onClick={() => setActivePet(null)} className="mt-4 bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Pets List (for the active client) */}
      {petsData[activeClientPets] && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Pets de {clients.find(client => client.id === activeClientPets)?.nome}</h3>
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
              {petsData[activeClientPets]?.length > 0 ? (
                petsData[activeClientPets].map((pet, index) => (
                  <tr
                    key={index + 1}
                    onClick={() => window.innerWidth < 1024 && togglePetActions(index + 1)}
                    className={`${activePet === index + 1 ? 'bg-dog-brown-100' : ''}`}
                  >
                    <td className="border px-4 py-2">{pet.nome}</td>
                    <td className="border px-4 py-2">{pet.especie}</td>
                    <td className="border px-4 py-2">{pet.raca}</td>
                    <td className="border px-4 py-2">{pet.genero}</td>
                    <td className="border px-4 py-2 hidden lg:table-cell">
                      <div className="flex space-x-2 justify-center">
                        <button className="border rounded bg-heart-peach-200 text-dog-brown-300 py-1 px-3">
                          Editar Info
                        </button>
                        <button className="border rounded bg-heart-peach-300 text-white py-1 px-3">
                          Comprar Produto
                        </button>
                        <button className="border rounded bg-heart-peach-400 text-white py-1 px-3">
                          Atribuir Serviço
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="border px-4 py-2 text-center">
                    Nenhum pet registrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Add New Pet Button */}
          <div className="mt-6 flex justify-center">
            <button onClick={togglePetModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
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
                    <button onClick={togglePetModal} className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md">
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
      )}
    </div>
  );
}