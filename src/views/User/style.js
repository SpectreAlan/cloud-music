import styled from 'styled-components';
import style from '../../assets/styles/global-style'
export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  background: ${style['theme-color']};
  z-index: 88;
  .container{
    color: #fff;
    width: 16rem;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 0.4rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    li{
      margin-bottom: 1rem;
      input, button{
        border: 1px solid #fff;
        outline: none;
        border-radius: 0.2rem;
        width: 10rem;
        padding: 0.4rem;
      }
      input{
        margin-left: 0.4rem;
      }
      button{
        margin-left: 2.2rem;
        width: 11rem;
        background: #fff;
        color: ${style['theme-color']};
      }
    }
  }
`
