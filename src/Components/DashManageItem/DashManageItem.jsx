import { FaTrash } from "react-icons/fa6";
import UseMenu from "../Hooks/UseMenu/UseMenu";
import SectionHeader from "../SectionHeader/SectionHeader";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import { Link } from "react-router-dom";

const DashManageItem = () => {
  const [menu, , refetch] = UseMenu();
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.delete(
          `/MenuCollections/${item._id}`
        );
        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
        console.log(response.data);
      }
    });
  };
  return (
    <div>
      <SectionHeader
        headerText="Manage Item"
        paraText="Hurry up"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <img className="h-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link
                      className="bg-green-600 px-3 py-2 text-white"
                      to={`/dash/updateItem/${item._id}`}
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="bg-red-400 p-3 text-white"
                      onClick={() => handleDelete(item)}
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

export default DashManageItem;
