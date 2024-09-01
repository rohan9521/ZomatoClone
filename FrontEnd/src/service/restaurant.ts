import axiosClient from "../axiosClient";

export interface Restaurant {
  name: string;
  address: string;
  location: string;
  profileImgUrl: string;
  rating: number;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
}

export const getRestaurants = async (): Promise<RestaurantResponse> => {
  return axiosClient({
    method: "GET",
    url: "/restaurants",
  });
};
