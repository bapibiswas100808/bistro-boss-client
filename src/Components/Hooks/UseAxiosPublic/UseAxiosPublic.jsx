import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-roan-omega.vercel.app",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
