import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Success!",
            text: "Logged in Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-primary">
        Sign in With Google
      </button>
    </div>
  );
};

export default SocialLogin;
