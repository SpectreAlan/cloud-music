import styled from 'styled-components';
import style from '../../assets/styles/global-style';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  .swiper-container {
    position: relative;
    width: 94%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      & img{
      width: 100%;
      }
    }
    .swiper-pagination-bullet-active {
      background: ${style['theme-color']};
    }
  }
`;
