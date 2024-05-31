import { useLoaderData } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const DashUpdate = () => {
  const item = useLoaderData();
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        recipe: data.recipe,
        category: data.category,
        image: res.data.display_url,
      };
      const menuResponse = await axiosSecure.patch(
        `/MenuCollections/${item._id}`,
        menuItem
      );
      console.log(menuResponse.data);
      if (menuResponse.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your item has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  console.log(item);
  return (
    <div>
      <SectionHeader
        headerText="Update Item"
        paraText="whats new"
      ></SectionHeader>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
              defaultValue={item.name}
            />
          </label>
          <div className="flex gap-10">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
                defaultValue={item.category}
              >
                <option disabled>Select a Category?</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
                <option value="pizza">Pizza</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Recipe Price"
                className="input input-bordered w-full "
                defaultValue={item.price}
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
              defaultValue={item.recipe}
            ></textarea>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs mt-5"
          />
          <button className="btn btn-primary mt-5 w-full" type="submit">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashUpdate;
