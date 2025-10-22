import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    // refresh data after delete a data
    onSuccess: () => {
      toast.success("Cabin successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, mutate };
}
