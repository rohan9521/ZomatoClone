import axiosClient from "../axiosClient";
import { UserLoginData } from "../hooks/useLogin";
import { UserData } from "../hooks/useSignUp";

export const login = async (userData: UserLoginData): Promise<UserData> => {
  console.log("service",userData)
  const { data } = await axiosClient<UserData>({
    url: "/auth/login",
    method: "POST",
    data: { ...userData },
  });
  return data
};
