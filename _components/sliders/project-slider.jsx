"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import classNames from "classnames";

import ImageContainer from "../utils/image-container";

import "swiper/css";

const ProjectsSlider = ({ sliderData, cssClasses }) => {
  const [imageSwiper, setImageSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);

  return (
    <div className={classNames("w-full", cssClasses)}>
      <Swiper
        onSwiper={setImageSwiper}
        modules={[Autoplay, Controller]}
        controller={{ control: infoSwiper }}
        loop
        spaceBetween={16}
        speed={1500}
        autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
        className="w-full"
      >
        {sliderData.map(({ imageUrl }, index) => (
          <SwiperSlide key={index} className="w-full">
            <ImageContainer
              src={imageUrl}
              alt={`A&I Sheeting - Project image ${index + 1}`}
              desktopWidth={800}
              cssClasses="object-cover w-full h-[275px] phone:h-[300px] tablet:h-[375px] desktop:h-[450px]"
              eager={index < 1}
              phoneWidth={425}
              tabletWidth={800}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setInfoSwiper}
        modules={[Controller]}
        controller={{ control: imageSwiper }}
        loop
        allowTouchMove={false}
        speed={1500}
      >
        {sliderData.map(
          ({ title, paragraph1, paragraph2, paragraph3 }, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <article className="grid gap-4">
                <h4 className="text-center desktop:text-left">{title}</h4>
                <p>{paragraph1}</p>
                <p>{paragraph2 && paragraph2}</p>
                <p>{paragraph3 && paragraph3}</p>
              </article>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default ProjectsSlider;
