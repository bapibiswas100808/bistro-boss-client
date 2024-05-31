import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import UseCarts from "../Hooks/UseCarts/UseCarts";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCarts();
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dash">DashBoard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/dash/cart">
          <div className="flex mr-3 items-center">
            <FaCartShopping className="mr-2" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  z-10 text-white max-w-screen-xl fixed bg-black bg-opacity-50 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" text-xl">
          Bistro Boss <br /> <span>Restaurant</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1 items-center">{navLinks}</ul>
      </div>
      <div className="">
        {!user ? (
          <Link to="/login" className="btn">
            Sign In
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <img
              className="h-14 w-14 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button onClick={logOut} className="btn">
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
