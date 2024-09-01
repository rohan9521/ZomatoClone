import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import {
  getRestaurants,
  Restaurant,
  RestaurantResponse,
} from "../service/restaurant";
import { AxiosError } from "axios";

export const useRestaurants = (
  queryOptions: UseQueryOptions<Restaurant[]>
): UseQueryResult<RestaurantResponse, AxiosError> & {
  restaurants: Restaurant[];
} => {
  const query = useQuery<RestaurantResponse, AxiosError>({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
    onSuccess: () => {},
  });
  return {
    ...query,
    restaurants: query.data?.restaurants || [],
  };
};
