import React, { useState } from 'react';
import usePostClient from '../../Hooks/postClientes';
import { Cliente } from '../../types';

const AddClientForm = ({ isModalOpen, toggleModal }: { isModalOpen: boolean, toggleModal: () => void }) => {
  const { mutate, isError, isSuccess, error } = usePostClient();

  // Form state for nested data
  const initialFormData: Cliente = {
    nome: '',
    nomeSocial: '',
    email: null,
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      codigoPostal: '',
      informacoesAdicionais: '',
    },
    telefones: [
      { numero: '', ddd: '' }
    ],
  };

  const [formData, setFormData] = useState<Cliente>(initialFormData);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string, nestedField?: string) => {
    const { name, value } = e.target;

    if (nestedField) {
      setFormData((prev) => ({
        ...prev,
        [nestedField]: {
          ...prev[nestedField],
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setFormErrors((prev) => ({
        ...prev,
        [name]: '',
    }));
  };

  const handlePhoneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedPhones = [...formData.telefones];
    updatedPhones[index][name] = value;
    setFormData({ ...formData, telefones: updatedPhones });
  };

  const addPhone = () => {
    setFormData((prev) => ({
      ...prev,
      telefones: [...prev.telefones, { id: prev.telefones.length + 1, numero: '', ddd: '' }]
    }));
  };

  const removePhone = (index: number) => {
    const updatedPhones = formData.telefones.filter((_, i) => i !== index);
    setFormData({ ...formData, telefones: updatedPhones });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.nome) {
        errors.nome = 'Nome é obrigatório';
    }

    if (!formData.nomeSocial) {
        errors.nomeSocial = 'Nome Social é obrigatório';
    }

    if (formData.telefones.every(phone => !phone.ddd || !phone.numero)) {
        errors.telefones = 'Pelo menos um telefone é obrigatório';
    }

    if (!formData.endereco.codigoPostal) {
        errors.codigoPostal = 'Código Postal é obrigatório';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const filteredPhones = formData.telefones
        .filter(phone => phone.ddd && phone.numero)
        .map(({ id, ...phone }) => phone);
    const updatedFormData = { ...formData, telefones: filteredPhones };

    mutate(updatedFormData, {
      onSuccess: () => {
        setFormData(initialFormData);
        toggleModal();
      },
      onError: (error) => {
        console.error("Error submitting client:", error);
      }
    });
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-semibold text-dog-brown-300 mb-4">Cadastrar Novo Cliente</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Client Name */}
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={(e) => handleChange(e, 'nome')}
                placeholder="Nome"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
              {formErrors.nome && <p className="text-red-500 text-sm">{formErrors.nome}</p>}
            </div>

            {/* Social Name */}
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Nome Social</label>
              <input
                type="text"
                name="nomeSocial"
                value={formData.nomeSocial}
                onChange={(e) => handleChange(e, 'nomeSocial')}
                placeholder="Nome Social"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
              {formErrors.nomeSocial && <p className="text-red-500 text-sm">{formErrors.nome}</p>}
            </div>

            {/* Phone Numbers */}
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Telefones</label>
              {formData.telefones.map((phone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="ddd"
                      value={phone.ddd}
                      onChange={(e) => handlePhoneChange(index, e)}
                      placeholder="DDD"
                      className="w-1/3 border border-dog-brown-100 px-4 py-2 rounded-md"
                    />
                    <input
                      type="text"
                      name="numero"
                      value={phone.numero}
                      onChange={(e) => handlePhoneChange(index, e)}
                      placeholder="Número"
                      className="w-2/3 border border-dog-brown-100 px-4 py-2 rounded-md"
                    />
                    {index !== 0 ?
                        <button
                        type="button"
                        onClick={() => removePhone(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                        >
                        X
                        </button>
                    : ''}
                  </div>
                </div>
              ))}
              {formErrors.telefones && <p className="text-red-500 text-sm">{formErrors.telefones}</p>}
              <button
                type="button"
                onClick={addPhone}
                className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md mt-2"
              >
                Adicionar Telefone
              </button>
            </div>

            {/* Address Information */}
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Estado</label>
              <input
                type="text"
                name="estado"
                value={formData.endereco.estado}
                onChange={(e) => handleChange(e, 'estado', 'endereco')}
                placeholder="Estado"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Cidade</label>
              <input
                type="text"
                name="cidade"
                value={formData.endereco.cidade}
                onChange={(e) => handleChange(e, 'cidade', 'endereco')}
                placeholder="Cidade"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Rua</label>
              <input
                type="text"
                name="rua"
                value={formData.endereco.rua}
                onChange={(e) => handleChange(e, 'rua', 'endereco')}
                placeholder="Rua"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Número</label>
              <input
                type="text"
                name="numero"
                value={formData.endereco.numero}
                onChange={(e) => handleChange(e, 'numero', 'endereco')}
                placeholder="Número"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dog-brown-300">Código Postal</label>
              <input
                type="text"
                name="codigoPostal"
                value={formData.endereco.codigoPostal}
                onChange={(e) => handleChange(e, 'codigoPostal', 'endereco')}
                placeholder="Código Postal"
                className="w-full border border-dog-brown-100 px-4 py-2 rounded-md"
              />
              {formErrors.codigoPostal && <p className="text-red-500 text-sm">{formErrors.codigoPostal}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={toggleModal}
                className="bg-heart-peach-200 text-dog-brown-400 py-2 px-4 rounded-md"
              >
                Fechar
              </button>
              <button
                type="submit"
                className="bg-heart-peach-300 text-dog-brown-400 py-2 px-4 rounded-md"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddClientForm;