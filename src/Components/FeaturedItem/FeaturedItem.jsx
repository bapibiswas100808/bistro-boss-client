import SectionHeader from "../SectionHeader/SectionHeader";
import "./FeaturedItem.css";
import featureImage from "../../assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <div className="py-10 feature-item bg-fixed">
      <div>
        <SectionHeader headerText="" paraText="Check it out"></SectionHeader>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-white pb-20 pt-10 px-36">
          <div className="">
            <img src={featureImage} alt="" />
          </div>
          <div>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
