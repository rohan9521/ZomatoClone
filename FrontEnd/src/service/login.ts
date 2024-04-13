import axiosClient from "../axiosClient";
import { UserLoginData } from "../types/userLoginData";

export const signUp = async (userData: UserLoginData): Promise<void> => {
  return axiosClient({
    url: "/login",
    method: "GET",
    data: { ...userData },
  });
};
