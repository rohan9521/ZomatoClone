import { useMutation, UseMutationOptions, UseMutationResult } from "react-query";
import { signUp } from "../service/signup";
import { AxiosError, AxiosResponse } from "axios";
import { UserData } from "../types/userData";

export const useSignUp = (
  options: UseMutationOptions<UserData,AxiosError> = {}
): UseMutationResult<void,AxiosError,UserData> => {
  return useMutation({
    mutationFn: (userPayLoad: UserData) => signUp(userPayLoad),
    onSuccess: (data, variables, context) => {},
  });
};
