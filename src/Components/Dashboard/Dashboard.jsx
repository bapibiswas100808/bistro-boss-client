import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaUtensils,
  FaWallet,
} from "react-icons/fa6";
import { FaAd, FaHome, FaSearch, FaUser } from "react-icons/fa";
import UseCarts from "../Hooks/UseCarts/UseCarts";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";

const Dashboard = () => {
  const [cart] = UseCarts();
  const [isAdmin] = UseAdmin();
  return (
    <div className="flex gap-5">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dash/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/addItems">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/manageItems">
                  <FaWallet /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/bookingItems">
                  <FaBook /> Booking Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/allUsers">
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dash/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/reservation">
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/payment">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/allPayment">
                  <FaWallet /> All Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/cart">
                  <FaCartShopping /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/review">
                  <FaAd />
                  Add A Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dash/booking">
                  <FaBook /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
