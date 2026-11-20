"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import ImageContainer from "../utils/image-container";

import "swiper/css";

const ThumbnailSlider = ({ imageList, cssClasses }) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    mainSwiper?.slideTo(index);
    thumbsSwiper?.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <div className={classNames("w-full overflow-hidden", cssClasses)}>
      <Swiper
        onSwiper={setMainSwiper}
        spaceBetween={16}
        speed={1500}
        allowTouchMove={false}
        className="w-full h-[525px] desktop:h-[550px]"
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <ImageContainer
              src={item}
              alt={`A&I Sheeting - Gallery image ${index + 1}`}
              desktopWidth={1400}
              cssClasses="object-cover h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        centeredSlides
        allowTouchMove={false}
        className="hidden desktop:block"
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index} className="h-[110px] !w-[190px]">
            <div className="w-full bg-white h-full flex justify-center overflow-hidden">
              <ImageContainer
                src={item}
                alt={`A&I Sheeting - Gallery thumbnail image ${index + 1}`}
                desktopWidth={200}
                cssClasses={classNames(
                  "object-cover h-full w-full cursor-pointer px-1 pt-2 desktop:hover:scale-95 duration-300 ease-in-out",
                  { "opacity-60": index !== activeIndex }
                )}
                onClick={() => handleSlideChange(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
