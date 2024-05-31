import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="py-10">
      <div>
        <SectionHeader
          headerText="testimonials"
          paraText="What our client says"
        ></SectionHeader>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        className="mySwiper"
      >
        {review.map((r, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-24 max-w-[400px] mx-auto bg-base-100 shadow-xl text-center space-y-5 ">
              <div className="flex justify-center">
                <Rating style={{ maxWidth: 180 }} value={r.rating} readOnly />
              </div>
              <div className="">
                <h2 className="">{r.name}</h2>
                <p>{r.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
