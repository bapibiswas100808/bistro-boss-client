import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">
        Hi!
        <span>{user?.displayName ? user.displayName : ""}</span>Welcome back to
        Home
      </h2>
    </div>
  );
};

export default UserHome;
