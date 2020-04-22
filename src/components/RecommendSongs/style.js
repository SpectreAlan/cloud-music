import styled from 'styled-components';
import style from '../../assets/styles/global-style';

export const List = styled.ul`
  padding: 0 0.5rem 0.5rem;
  li{
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 0.6rem;
    font-size: 0.8rem;
    .play{
      text-align: left;
      position: absolute;
      width: 100%;
      top: 0;
      left: 4rem;
      font-size: 0.8rem;
      color: #000;
      padding-top:0.5rem;
      span{
        color: gray;
        font-size: 0.6rem;
        margin-left: 0.2rem;
      }
      p{
        color: gray;
        font-size: 0.6rem;
        margin-top: 0.5rem;
      }
    }
    img{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 0.4rem;
    }
    i{
      color: ${style['theme-color']};
      font-size: 2rem;
      line-height: 3.2rem;
    }
  }
`
