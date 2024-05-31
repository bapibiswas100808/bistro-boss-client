import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import UseCarts from "../Hooks/UseCarts/UseCarts";
const MenuItem = ({ item }) => {
  const { name, image, price } = item;
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCarts();

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user?.email) {
      const menuItem = {
        menuId: item._id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/Carts", menuItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${name} added Successfully to Cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "Please login to add product on cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <div className="card-actions justify-end">
            <Link
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <Link to="/shop">Order Now</Link>
      </div> */}
    </div>
  );
};

export default MenuItem;
MenuItem.propTypes = {
  item: PropTypes.object,
};
