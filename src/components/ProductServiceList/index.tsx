import { useState } from 'react';

export default function ProductServiceTable() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const toggleProductModal = () => {
    setIsProductModalOpen(!isProductModalOpen);
  };

  const toggleServiceModal = () => {
    setIsServiceModalOpen(!isServiceModalOpen);
  };

  return (
    <>
      {/* Flex container for both tables */}
      <div className="flex flex-wrap gap-6 justify-center">
        
        {/* Product Table */}
        <div className="w-auto">
          <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">Produtos</div>

          <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
            <table className="min-w-full table-auto">
              <thead className="bg-dog-brown-200 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Nome</th>
                  <th className="px-4 py-2 text-left">Preço</th>
                  <th className="px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6'].map((product, index) => (
                  <tr key={index} className="border-b border-dog-brown-100">
                    <td className="px-4 py-2">{product}</td>
                    <td className="px-4 py-2">R$50.00</td>
                    <td className="px-4 py-2">
                      <button className="bg-heart-peach-200 text-dog-brown-300 py-1 px-4 rounded mr-2">Editar</button>
                      <button className="bg-heart-peach-300 text-white py-1 px-4 rounded">Deletar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-center">
            <button onClick={toggleProductModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
              Adicionar Novo Produto
            </button>
          </div>
        </div>

        {/* Service Table */}
        <div className="w-auto">
          <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">Serviços</div>

          <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
            <table className="min-w-full table-auto">
              <thead className="bg-dog-brown-200 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Nome</th>
                  <th className="px-4 py-2 text-left">Preço</th>
                  <th className="px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {['Serviço 1', 'Serviço 2', 'Serviço 3', 'Serviço 4', 'Serviço 5', 'Serviço 6'].map((service, index) => (
                  <tr key={index} className="border-b border-dog-brown-100">
                    <td className="px-4 py-2">{service}</td>
                    <td className="px-4 py-2">R$50.00</td>
                    <td className="px-4 py-2">
                      <button className="bg-heart-peach-200 text-dog-brown-300 py-1 px-4 rounded mr-2">Editar</button>
                      <button className="bg-heart-peach-300 text-white py-1 px-4 rounded">Deletar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Service Button */}
          <div className="mt-6 flex justify-center">
            <button onClick={toggleServiceModal} className="bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full">
              Adicionar Novo Serviço
            </button>
          </div>
        </div>

      </div>

      {/* Product Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-dog-brown-300">Cadastrar Novo Produto</h3>
              <button onClick={toggleProductModal} className="text-gray-500 text-xl">&times;</button>
            </div>

            <form>
              <div className="mb-4">
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nome do Produto</label>
                <input
                  type="text"
                  id="productName"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Digite o nome do produto"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Preço</label>
                <input
                  type="number"
                  id="productPrice"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Informe o preço do produto"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleProductModal}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-dog-brown-300">Cadastrar Novo Serviço</h3>
              <button onClick={toggleServiceModal} className="text-gray-500 text-xl">&times;</button>
            </div>

            <form>
              <div className="mb-4">
                <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
                <input
                  type="text"
                  id="serviceName"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Digite o nome do serviço"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="servicePrice" className="block text-sm font-medium text-gray-700">Preço</label>
                <input
                  type="number"
                  id="servicePrice"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Informe o preço do serviço"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleServiceModal}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}