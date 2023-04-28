import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { fourSlider } from "../SliderProps";
import ReactPlayer from 'react-player';
const PhotoGallerySlider = () => {
  return (
    <Swiper {...fourSlider} className="owl-carousel owl-theme none dots-none">
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1"
        >
          <ReactPlayer playing url='assets/video/event_1.mp4'
            controls='true'
            height='400px'
            width='400px'
          />

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
        >
          <ReactPlayer url='assets/video/event_2.mp4'
            controls='true'
            height='400px'
            width='400px'
          />

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
        >
          <ReactPlayer url='assets/video/event_3.mp4'
            controls='true'
            height='400px'
            width='400px'
          />

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
        >
          <ReactPlayer url='assets/video/event_4.mp4'
            controls='true'
            height='400px'
            width='400px'
          />

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="sc-gallery-2 st-1 wow fadeIn animated"
        >
          <ReactPlayer url='assets/video/event_5.mp4'
            controls='true'
            height='400px'
            width='400px'
          />

        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default PhotoGallerySlider;
