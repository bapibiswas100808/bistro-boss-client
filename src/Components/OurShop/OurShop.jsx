import MenuCover from "../MenuCover/MenuCover";
import menuBg from "../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseMenu from "../Hooks/UseMenu/UseMenu";
import MenuItem from "../MenuItem/MenuItem";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menuItems] = UseMenu();
  const drinks = menuItems.filter((item) => item.category === "drinks");
  const desserts = menuItems.filter((item) => item.category === "dessert");
  const pizzas = menuItems.filter((item) => item.category === "pizza");
  const soups = menuItems.filter((item) => item.category === "soup");
  const salads = menuItems.filter((item) => item.category === "salad");
  return (
    <div>
      <MenuCover
        img={menuBg}
        foodName="Our Shop"
        foodPara="Do You want to taste a Dish?"
      ></MenuCover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {salads.map((item, idx) => (
              <MenuItem key={idx} item={item}></MenuItem>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pizzas.map((item, idx) => (
              <MenuItem key={idx} item={item}></MenuItem>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {soups.map((item, idx) => (
              <MenuItem key={idx} item={item}></MenuItem>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {desserts.map((item, idx) => (
              <MenuItem key={idx} item={item}></MenuItem>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {drinks.map((item, idx) => (
              <MenuItem key={idx} item={item}></MenuItem>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
