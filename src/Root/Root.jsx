import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      {noHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
};

export default Root;
