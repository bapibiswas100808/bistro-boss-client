import { useContext } from "react";
import UseAdmin from "../../Components/Hooks/UseAdmin/UseAdmin";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = UseAdmin();
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/"></Navigate>;
};

export default AdminRoute;
AdminRoute.propTypes = {
  children: PropTypes.node,
};
