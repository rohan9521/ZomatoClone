import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { signUp } from "../service/signup";
import { AxiosError, AxiosResponse } from "axios";

export interface UserData {
  name: string;
  email: string;
  address?: {
    houseNumber: string;
    area: string;
    locality: string;
    landmark: string;
    pincode: string;
    state: string;
    country: string;
  };
  password: string;
  mobileNumber: string;
  profilePic?: string;
  orderIdList?: string[];
}

export const useSignUp = (
  options: UseMutationOptions<UserData, AxiosError> = {}
): UseMutationResult<void, AxiosError, UserData> => {
  return useMutation({
    mutationFn: (userPayLoad: UserData) => signUp(userPayLoad),
    onSuccess: (data, variables, context) => {},
  });
};
