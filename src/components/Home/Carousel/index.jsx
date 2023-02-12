import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./carousel.css";
import av1 from "assets/av1.jpg";
import av2 from "assets/av2.jpg";
import av3 from "assets/av3.jpg";

const Carousel = ({ params, children }) => {
	return (
		<div className="carousel-container">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				speed={800}
				slidesPerView={5}
				loop
				className="carousel-swiper">
				<SwiperSlide className="carousel-slide">
					<img src={av1} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av2} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av3} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av1} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av2} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av3} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av1} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av2} alt="slide" />
				</SwiperSlide>
				<SwiperSlide className="carousel-slide">
					<img src={av3} alt="slide" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;
