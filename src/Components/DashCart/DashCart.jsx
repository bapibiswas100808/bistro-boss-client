import { FaTrash } from "react-icons/fa6";
import UseCarts from "../Hooks/UseCarts/UseCarts";
import SectionHeader from "../SectionHeader/SectionHeader";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";

const DashCart = () => {
  const [cart, refetch] = UseCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/Carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="max-w-[1100px] mx-auto">
      <SectionHeader
        headerText="Cart"
        paraText="See your products"
      ></SectionHeader>
      <div className="flex flex-col items-center gap-10 justify-center">
        <div className="flex items-center gap-10 justify-center">
          <h2>Total Orders: {cart.length}</h2>
          <h2>Total Price: {totalPrice}</h2>
          {cart.length > 0 ? (
            <Link to="/dash/payment" className="btn btn-primary">
              Pay Now
            </Link>
          ) : (
            <button disabled className="btn">
              Pay Now
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <img className="h-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 p-4 text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashCart;
