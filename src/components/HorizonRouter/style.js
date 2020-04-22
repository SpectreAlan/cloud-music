import styled from 'styled-components';
import style from '../../assets/styles/global-style';
export const Container = styled.ul`
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => props.count * 4 + 'rem'};
  li{
    width: 4rem;
    padding-top: 3.6rem;
    position: relative;
    text-align: center;
    font-size: 0.8rem;
    .iconBox{
      position: absolute;
      top: 0.8rem;
      left: 0.8rem;
      width:2.4rem;
      height: 2.4rem;
      line-height: 2.4rem;
      border-radius: 50%;
      background: ${style['theme-color']};
      .iconfont{
        font-size: 1rem;
        color: #fff;
      }
    }
  }
`
