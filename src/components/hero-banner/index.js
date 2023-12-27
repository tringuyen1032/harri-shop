// import React, { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper";
// internal
// import slider_img_1 from "@assets/img/slider/13/slider-1.webp";
// import slider_img_2 from "@assets/img/slider/13/slider-1.png";
// import slider_img_3 from "@assets/img/slider/13/slider-1.png";
import { RightArrow } from "@svg/index";

// const slider_data = [
//   {
//     id: 1,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Find Best <br /> Matley Sound.
//       </>
//     ),
//     img: slider_img_1,
//   },
//   {
//     id: 2,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Find your <br /> Beats Studio.
//       </>
//     ),
//     img: slider_img_2,
//   },
//   {
//     id: 3,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Music To <br /> Fill Your Heart
//       </>
//     ),
//     img: slider_img_3,
//   },
// ];

const HeroBanner = () => {
  // const [loop, setLoop] = useState(false);
  // useEffect(() => setLoop(true), []);
  return (
    <>
      <section className="slider__area">
        {/* <Swiper */}
        {/* <div
          className="slider__active slider__active-13 swiper-container"
          slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        loop={loop}
        modules={[EffectFade]}
        > */}
          {/* {slider_data.map((item) => ( */}
          {/* <SwiperSlide */}
          <div
            // key={item.id}
            className="slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
          >
            <div className="container">
              <div className="row align-self-end">
                <div className="col-xl-6 col-lg-6">
                  <div className="slider__content-13">
                    <span className="slider__title-pre-13">
                      {/* {item.pre_title} */}
                      Best Ear <br /> Headphones
                    </span>
                    <h3 className="slider__title-13">
                      {/* {item.title} */}
                      Find Best <br /> Matley Sound.
                    </h3>

                    <div className="slider__btn-13 ">
                      <Link href="/shop" className="tp-btn-border">
                        Shop Now
                        <span>
                          <RightArrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="slider__thumb-13 text-end mr-40">
                    <span className="slider__thumb-13-circle-1"></span>
                    <span className="slider__thumb-13-circle-2"></span>
                    <Image
                      src="https://cdn.nguyenminhtri.com/upload/slider-1-21c0.webp"
                      unoptimized
                      alt="slider img"
                      priority={true}
                      className="position-relative z-1"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* </SwiperSlide> */}
          </div>
          {/* ))} */}
          {/* </Swiper> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default HeroBanner;
