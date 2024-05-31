import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import MenuItem from "../MenuItem/MenuItem";

const FRomMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="py-10">
      <SectionHeader
        headerText="Popular items"
        paraText="From our menu"
      ></SectionHeader>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menu.map((item, idx) => (
          <div key={idx}>
            <MenuItem item={item}></MenuItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FRomMenu;
