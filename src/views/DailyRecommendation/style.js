import styled from 'styled-components';

export const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.4rem;
  background-size: 100%;
  z-index: 8;
  overflow: hidden;
  span{
    opacity: 0;
  }
  .topContent{
    height: 3rem;
    line-height: 3rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`
export const Control = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background: #fff;
  z-index: 8;
`
export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 14rem;
  width: 100%;
  z-index: 6;
  img{
    width: 100%;
  }
`
export const Content = styled.div`
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .out{
    padding-top:12rem;
    position: relative;
    .date{
      position: absolute;
      top: 6rem;
      color: #fff;
      font-size: 2rem;
      span{
        font-size: 1rem;
      }
    }
  }
`
