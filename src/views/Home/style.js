import styled from 'styled-components';
import style from '../../assets/styles/global-style';

export const Tab = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  background: #ececec;
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem;
  a{
    color: ${style['font-color-light']};
    text-align: center;
    font-size: 0.8rem;
    i{
      font-size: 1.1rem;
      display: block;
      line-height: 1.4rem;
      width: 1.4rem;
      height:1.4rem;
      background: transparent;
      text-align: center;
      border-radius: 50%;
    }
    span{
      line-height: 1.2rem;
    }
    &.selected{
       color: ${style['theme-color']};
       i{
        background: ${style['theme-color']};
        color: #fff;
       }
    }
  }
`

