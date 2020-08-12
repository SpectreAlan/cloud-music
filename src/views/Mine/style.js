import styled from 'styled-components';

export const Top = styled.div`
  height:3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background: #ff2d21;
  &>i {
    color: #fff;
    font-size: 1.2rem;
  }
  .circle{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: slategray;
  }
`;

export const Content = styled.div`
  background: #fff;
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  .container{
    background: #fff;
    color: #000;
    .info{
      padding: 0.8rem;
      display: flex;
      img{
        border-radius: 50%;
        width: 3rem;
        margin-right: 1rem;
      }
      h2{
        line-height: 1.6rem;
        }
      span{
        font-size: 0.6rem;
      }
    }
  }
`
export const CollectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.4rem;
`
