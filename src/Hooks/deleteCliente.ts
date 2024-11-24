import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

const deleteCliente = async (id: number) => {
  await apiClient.delete(`/cliente/excluir`, { data: {id} });
};

const useDeleteCliente = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteCliente, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["clientes"]});
    },
    onError: (error) => {
      console.error("Error deleting client:", error);
    },
  });
};

export default useDeleteCliente;