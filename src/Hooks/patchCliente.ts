import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Cliente } from "../types";

const updateClient = async (clientData: Partial<Cliente>) => {
  const response = await apiClient.put("/cliente/atualizar", clientData);
  return response.data;
};

export const usePatchClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateClient,
    onSuccess: () => {
      console.log("Client updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
    onError: (error) => {
      console.error("Failed to update client:", error);
    },
  });
};
