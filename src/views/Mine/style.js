import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  width: 100%;
  z-index: 100;
  overflow: hidden;
`
export const List = styled.ul`
  padding: 0 0.8rem;
    li{
      margin-bottom: 0.6rem;
      position: relative;
      height:10rem;
      >.title{
        font-size: 0.8rem;
        color: black;
        padding: 0.4rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    }
`
