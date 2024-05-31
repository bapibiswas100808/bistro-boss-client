import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UseCarts = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/Carts?email=${user?.email}`);
      return result.data;
    },
  });
  return [cart, refetch];
};

export default UseCarts;
