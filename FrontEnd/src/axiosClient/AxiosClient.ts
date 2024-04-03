import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
 const requestSuccess = (
    request: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    console.log({ request });
    return request;
  };
  const requestError = (error: AxiosError): Promise<AxiosError> => {
    console.log({ error });
    return Promise.reject(error);
  };
  const responseSuccess = (response: AxiosResponse): AxiosResponse => {
    console.log({ response });
    return response;
  };
  const responseError = (error: AxiosError): AxiosError => {
    console.log({ error });
    return error;
  };
   const axiosClient = axios.create({
    baseURL: "http://localhost:9000",
    timeout: 1000,
    headers: {
      Authorization: "Bearer-Token",
      "Content-Type": "application/json",
    },
  });

  axiosClient.interceptors.request.use(requestSuccess, requestError);
  axiosClient.interceptors.response.use(responseSuccess, responseError);

  export default axiosClient;


