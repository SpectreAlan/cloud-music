import styled from 'styled-components';
import style from '../../assets/styles/global-style'
export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  background: #fff;
  z-index: 88;
  .top{
    font-size: 1rem;
    background-color: ${style['theme-color']};
    color: #fff;
    position: absolute;
    width:100%;
    top: 0;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    i{
      font-size: 1.5rem;
      line-height: 3rem;
      position: absolute;
      left: 0.3rem;
      top: 0;
    }
  }
  .container{
    color: #fff;
    width: 16rem;
    padding: 1rem 1rem 0;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 0.4rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    li{
      margin-bottom: 1rem;
      text-align: center;
      position: relative;
      width: 100%;
      input{
        border: 1px solid gray;
        outline: none;
        border-radius: 0.2rem;
        width: 10rem;
        padding: 0.4rem 0.4rem 0.4rem 1.5rem;
      }
      button{
        border: 1px solid #fff;
        outline: none;
        border-radius: 0.2rem;
        padding: 0.4rem;
        width: 12rem;
        background: ${style['theme-color']};
        color: #fff;
      }
      i{
        position: absolute;
        color: gray;
        top: 0.4rem;
        left: 1.4rem;
      }
    }
  }
`
