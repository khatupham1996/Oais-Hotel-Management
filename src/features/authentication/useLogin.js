import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
// import { replace, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user.ủe);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
