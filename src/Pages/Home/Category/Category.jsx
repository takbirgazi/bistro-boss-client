import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
// Images
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="my-5">
            <SectionTitle
             heading={"From 11:00am to 10:00pm"} 
             subHeading={"ORDER ONLINE"}
             ></SectionTitle>
          <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider5} alt="" />
                </SwiperSlide>
            </Swiper>  
        </div>
    );
};

export default Category;