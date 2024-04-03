
import { AxiosPromise } from "axios";
import axiosClient from "../axiosClient";

export const SignUp = ():AxiosPromise=>{
    return axiosClient({
      url: "/signup",
      method: "GET",
    });
}