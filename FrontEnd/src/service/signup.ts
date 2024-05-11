
import axiosClient from "../axiosClient";
import { UserData } from "../hooks/useSignUp";

export const signUp = async (userData:UserData):Promise<void>=>{
    return axiosClient({
      url: "/user/signup",
      method: "POST",
      data :{...userData},
      
    });
}