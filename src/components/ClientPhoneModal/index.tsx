import { useState } from "react";
import { usePatchClient } from "../../Hooks/patchCliente";
import { Cliente, Telefone } from "../../types";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: Cliente;
}

const PhoneModal = ({ isOpen, onClose, client }: PhoneModalProps) => {
  const [phones, setPhones] = useState<Telefone[]>(client.telefones);
  const { mutate: updateClient } = usePatchClient();

  const handleAddPhone = () => {
    const newPhone: Telefone = { numero: "", ddd: "" };
    setPhones([...phones, newPhone]);
  };

  const handleRemovePhone = (index: number) => {
    if (phones.length > 1) {
      const updatedPhones = phones.filter((_, i) => i !== index);
      setPhones(updatedPhones);
    }
  };

  const handlePhoneChange = (index: number, field: keyof Telefone, value: string) => {
    const updatedPhones = [...phones];
    updatedPhones[index][field] = value; 
    setPhones(updatedPhones);
  };

  const handleSave = () => {
    updateClient({ ...client, telefones: phones });
    onClose(); 
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Gerenciar Telefones</h3>
        <div className="space-y-4">
          {phones.map((phone, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                placeholder="DDD"
                value={phone.ddd}
                onChange={(e) => handlePhoneChange(index, "ddd", e.target.value)}
                className="w-20 border px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Número"
                value={phone.numero}
                onChange={(e) => handlePhoneChange(index, "numero", e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
              />
              {phones.length > 1 ?
              <button
                onClick={() => handleRemovePhone(index)}
                className="bg-red-500 text-white py-1 px-2 rounded-md"
              >
                Remover
              </button>
            : ''}
            </div>
          ))}
        </div>

        {/* Add New Phone */}
        <button
          onClick={handleAddPhone}
          className="mt-4 bg-heart-peach-300 text-dog-brown-400 py-2 px-6 rounded-full"
        >
          Adicionar Novo Telefone
        </button>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md"
          >
            Fechar
          </button>
          <button
            onClick={handleSave}
            className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded-md"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PhoneModal;
