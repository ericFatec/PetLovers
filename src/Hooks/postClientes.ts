import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { Cliente } from '../types';

const postClient = async (clientData: Cliente) => {
  const response = await apiClient.post('/cliente/cadastrar', clientData);
  return response.data;
};

const usePostClient = () => {
    const queryClient = useQueryClient();
        return useMutation({
        mutationFn: postClient,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['clientes'] });
        },
        onError: (error) =>{
            console.log(error.message)
        }
        }
    );
};

export default usePostClient;