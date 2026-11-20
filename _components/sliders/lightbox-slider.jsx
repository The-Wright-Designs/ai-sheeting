"use client";

import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LightboxSlider = ({ imageList, cssClasses }) => {
  const [lightboxSwiper, setLightboxSwiper] = useState(null);
  const [toggleLightbox, setToggleLightbox] = useState(false);

  return (
    <div className={classNames("w-full overflow-hidden", cssClasses)}>
      <div
        className={classNames(
          "fixed top-0 left-0 w-screen h-full bg-white z-40 place-items-center px-10",
          {
            hidden: !toggleLightbox,
            grid: toggleLightbox,
          }
        )}
      >
        <button
          onClick={() => setToggleLightbox(false)}
          className="p-3 -m-3 desktop:p-0 desktop:m-0 desktop:hover:cursor-pointer"
        >
          <Image
            src="/icons/close.svg"
            alt="Close icon"
            width={55}
            height={55}
            className="fixed top-6 right-8 desktop:top-14 desktop:right-16 bg-blue p-2 z-40"
          />
        </button>
        <Swiper
          onSwiper={setLightboxSwiper}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          rewind
          speed={1500}
          autoplay={{ delay: 6500 }}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-[350px] phone:max-w-[500px] tablet:max-w-[600px] desktop:max-w-[1200px]"
        >
          {imageList.map((item, index) => (
            <SwiperSlide key={index} className="h-[80vh] flex">
              <Image
                src={item}
                alt={`A&I Sheeting - Gallery image ${index + 1}`}
                width={1200}
                height={1500}
                className="object-cover place-self-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        spaceBetween={16}
        speed={1500}
        autoplay={{ delay: 6500 }}
        navigation
        className="w-full h-[325px] phone:h-[350px] tablet:h-[450px] desktop:h-[600px]"
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Image
              src={item}
              alt={`A&I Sheeting - Gallery image ${index + 1}`}
              width={900}
              height={1125}
              className="object-cover h-full w-full cursor-pointer"
              onClick={() => {
                lightboxSwiper?.slideTo(index);
                setToggleLightbox(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LightboxSlider;
