import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";

const OrderSwiper = () => {
  return (
    <>
      <SectionHeader
        headerText="Order Online"
        paraText="---From 11:00am to 10:00pm---"
      ></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="-mt-20 uppercase text-white text-center text-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="-mt-20 uppercase text-white text-center text-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="-mt-20 uppercase text-white text-center text-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="-mt-20 uppercase text-white text-center text-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="-mt-20 uppercase text-white text-center text-xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderSwiper;
