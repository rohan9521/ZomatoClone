import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { login } from "../service/login";
import { AxiosError } from "axios";
import { UserData } from "./useSignUp";

export interface UserLoginData{
    mobileNumber:string,
    password:string
}
export const useLogin = (
  userLoginData: UserLoginData,
  options: UseQueryOptions<UserData, AxiosError> = {}
): UseQueryResult<UserData, AxiosError> => {
  return useQuery<UserData, AxiosError>({
    ...options,
    queryFn: () => login(userLoginData),
    queryKey: "login",
  });
};
