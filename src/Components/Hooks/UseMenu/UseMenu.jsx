// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";

const UseMenu = () => {
  const axiosPublic = UseAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-roan-omega.vercel.app/MenuCollections")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/MenuCollections");
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default UseMenu;
