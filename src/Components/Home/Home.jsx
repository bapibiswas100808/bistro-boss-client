import Banner from "../Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import FRomMenu from "../FromMenu/FRomMenu";
import OrderSwiper from "../OrderSwiper/OrderSwiper";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderSwiper></OrderSwiper>
      <FRomMenu></FRomMenu>
      <FeaturedItem></FeaturedItem>
      <Review></Review>
    </div>
  );
};

export default Home;
