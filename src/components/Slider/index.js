import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';
import { SliderContainer } from './style'
import LazyLoad from 'react-lazyload';

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.swiper-container', {
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
    <SliderContainer>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, i) => (
              <div className="swiper-slide" key={i}>
                <div className="slider-nav">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}>
                    <img src={slider.imageUrl} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                </div>
              </div>
            ))
          }
        </div>
        <div className="swiper-pagination"/>
      </div>
    </SliderContainer>
  );
}
Slider.propTypes = {
  bannerList: PropTypes.array,
}
export default React.memo(Slider);
