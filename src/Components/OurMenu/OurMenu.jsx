import { Helmet } from "react-helmet-async";

import menuBg from "../../assets/menu/banner3.jpg";
import UseMenu from "../Hooks/UseMenu/UseMenu";
import SectionHeader from "../SectionHeader/SectionHeader";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menuItems] = UseMenu();
  const offered = menuItems.filter((item) => item.category === "offered");
  const desserts = menuItems.filter((item) => item.category === "dessert");
  const pizzas = menuItems.filter((item) => item.category === "pizza");
  const soups = menuItems.filter((item) => item.category === "soup");
  const salads = menuItems.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <div className="">
        {/* <SectionHeader
          headerText="Today's Offer"
          paraText="See todays offer"
        ></SectionHeader> */}
        <div className="">
          <MenuCategory
            foodPara="Do You want to taste a Dish?"
            menuBg={menuBg}
            foodName="our menu"
            items={offered}
          ></MenuCategory>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader
          headerText="Dessert"
          paraText="See todays offer"
        ></SectionHeader>
        <div className="">
          <MenuCategory
            foodPara="Do You want to taste a Dish?"
            menuBg={menuBg}
            foodName="dessert"
            items={desserts}
          ></MenuCategory>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader
          headerText="Pizza"
          paraText="See todays offer"
        ></SectionHeader>
        <div className="">
          <MenuCategory
            foodPara="Do You want to taste a Dish?"
            menuBg={menuBg}
            foodName="pizza"
            items={pizzas}
          ></MenuCategory>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader
          headerText="Salad"
          paraText="See todays offer"
        ></SectionHeader>
        <div className="">
          <MenuCategory
            foodPara="Do You want to taste a Dish?"
            menuBg={menuBg}
            foodName="salad"
            items={salads}
          ></MenuCategory>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader
          headerText="Soup"
          paraText="See todays offer"
        ></SectionHeader>
        <div className="">
          <MenuCategory
            foodPara="Do You want to taste a Dish?"
            menuBg={menuBg}
            foodName="soup"
            items={soups}
          ></MenuCategory>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
