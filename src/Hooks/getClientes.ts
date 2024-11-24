import { useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { Cliente } from '../types';

export const useClientes = () => {
    return useQuery<Cliente[], Error>({
        queryKey: ['clientes'],
        queryFn: async () => {
            try {
                const response = await apiClient.get('/cliente/clientes', {
                    validateStatus: function (status) {
                      if (status === 302) {
                            return true 
                        }
                        return true; 
                    }
                });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching clients:', error);
                throw error;
            }
        },
    });
};