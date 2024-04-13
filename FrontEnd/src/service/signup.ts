
import axiosClient from "../axiosClient";
import { UserData } from "../types/userData";

export const signUp = async (userData:UserData):Promise<void>=>{
    return axiosClient({
      url: "/signup",
      method: "POST",
      data :{...userData},
      
    });
}