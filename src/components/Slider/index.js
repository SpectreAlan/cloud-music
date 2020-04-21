import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  return (
    <>
      <div className="swiper-wrapper">
        {
          bannerList.map((slider, i) => (
            <div className="swiper-slide" key={i}>
              <div className="slider-nav">
                <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
              </div>
            </div>
          ))
        }
      </div>
      <div className="swiper-pagination"/>
    </>
  );
}
Slider.propTypes = {
  bannerList: PropTypes.array,
}
export default React.memo(Slider);
