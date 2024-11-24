import React, { useState } from "react";
import { Cliente } from "../../types";
import { usePatchClient } from "../../Hooks/patchCliente";
import useDeleteCliente from "../../Hooks/deleteCliente";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientData: Cliente;
}

const ClientEditModal: React.FC<ClientModalProps> = ({ isOpen, onClose, clientData }) => {
  const [formData, setFormData] = useState<Partial<Cliente>>(clientData);

  const { mutate, isLoading, isError, isSuccess } = usePatchClient();
  const { mutate: deleteClient, isLoading: isDeleting } = useDeleteCliente();

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Cliente | keyof Cliente["endereco"]
  ) => {
    const value = e.target.value;

    setFormData((prev) => {
      if (field in (prev.endereco || {})) {
        return {
          ...prev,
          endereco: {
            ...prev.endereco,
            [field]: value,
          },
        };
      } else {
        return {
          ...prev,
          [field as keyof Cliente]: value,
        };
      }
    });
  };

  const handleSave = () => {
    mutate(formData, {
      onSuccess: () => {
        alert("Cliente atualizado com sucesso!");
        onClose();
      },
      onError: () => {
        alert("Erro ao atualizar cliente. Verifique os dados e tente novamente.");
      },
    });
  };

  const handleDelete = () => {
    if (clientData.id) {
      const confirmed = window.confirm("Essa ação é irreversível. Tem certeza que deseja prosseguir?");
  
      if (confirmed) {
        deleteClient(clientData.id, {
          onSuccess: () => {
            alert("Cliente excluído com sucesso!");
            onClose();
          },
          onError: () => {
            alert("Erro ao excluir cliente. Tente novamente.");
          },
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <div className="overflow-y-auto max-h-screen">
          <h2 className="text-xl font-bold mb-4">Editar Cliente</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                value={formData.nome || ""}
                onChange={(e) => handleInputChange(e, "nome")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome Social
              </label>
              <input
                type="text"
                value={formData.nomeSocial || ""}
                onChange={(e) => handleInputChange(e, "nomeSocial")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) => handleInputChange(e, "email")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estado
              </label>
              <input
                type="text"
                value={formData.endereco?.estado || ""}
                onChange={(e) => handleInputChange(e, "estado")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cidade
              </label>
              <input
                type="text"
                value={formData.endereco?.cidade || ""}
                onChange={(e) => handleInputChange(e, "cidade")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bairro
              </label>
              <input
                type="text"
                value={formData.endereco?.bairro || ""}
                onChange={(e) => handleInputChange(e, "bairro")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rua
              </label>
              <input
                type="text"
                value={formData.endereco?.rua || ""}
                onChange={(e) => handleInputChange(e, "rua")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Número
              </label>
              <input
                type="text"
                value={formData.endereco?.numero || ""}
                onChange={(e) => handleInputChange(e, "numero")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Código Postal
              </label>
              <input
                type="text"
                value={formData.endereco?.codigoPostal || ""}
                onChange={(e) => handleInputChange(e, "codigoPostal")}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
          </form>

          <div className="mt-6 flex justify-between">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Excluindo..." : "Excluir Cliente"}
            </button>
            <div>
              <button
                className="bg-heart-peach-200 text-gray-700 py-2 px-4 rounded mr-2"
                onClick={onClose}
                disabled={isLoading}
              >
                Fechar
              </button>
              <button
                className="bg-heart-peach-300 text-white py-2 px-4 rounded"
                onClick={handleSave}
                disabled={isLoading}
              >
                {isLoading ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>

          {isError && (
            <p className="text-red-500 mt-4">
              Ocorreu um erro ao tentar salvar. Tente novamente.
            </p>
          )}
          {isSuccess && (
            <p className="text-green-500 mt-4">
              Cliente atualizado com sucesso!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientEditModal;
