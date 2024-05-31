import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
const MenuCover = ({ img, foodName, foodPara }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero min-h-[400px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{foodName}</h1>
              <p>{foodPara}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MenuCover;
MenuCover.propTypes = {
  img: PropTypes.string,
  foodName: PropTypes.string,
  foodPara: PropTypes.string,
};
