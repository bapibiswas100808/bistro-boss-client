import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import MenuCover from "../MenuCover/MenuCover";

const MenuCategory = ({ items, menuBg, foodName, foodPara }) => {
  return (
    <div>
      <MenuCover
        img={menuBg}
        foodName="Our Menu"
        foodPara="Do You want to taste a Dish?"
      ></MenuCover>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
        <div>
          <Link className="btn" to={`/shop/${foodName}`}>
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
