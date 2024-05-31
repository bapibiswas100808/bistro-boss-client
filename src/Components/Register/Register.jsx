import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUserProfile(data.name, data.photoUrl)
          .then((res) => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  reset();
                  navigate(from, { replace: true });
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  console.log(watch("example"));

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  name="photoUrl"
                />
                {errors.photoUrl && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />

                {errors.password?.type === "required" && (
                  <span className="text-red-400">
                    password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    password should be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400">
                    password should be maximum 20 characters
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center pb-2">
              <SocialLogin></SocialLogin>
            </div>
            <div className="pl-10 pb-10">
              <p className="mb-3">ALready Registered?</p>
              <Link to="/login" className="btn">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
