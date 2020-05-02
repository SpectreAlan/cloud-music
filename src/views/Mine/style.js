import styled from 'styled-components';
import style from '../../assets/styles/global-style';

export const Top = styled.div`
  height:3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background: rgb(22,22,22);
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
  background: rgb(22,22,22);
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  .container{
    background: rgb(22,22,22);
    color: #fff;
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
    .buttons{
      padding: 0.8rem;
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      li{
        width: 4rem;
        text-align: center;
        span{
          display: block;
          font-size: 0.8rem;
          margin-top: 0.2rem;
        }
        i{
          font-size: 1.4rem;
        }
      }
    }
  }
`
export const ScrollList = styled.div`
  display: flex;
  padding: 0.4rem;
  width: ${(props) => props.len * 13 + 'rem'}
`
export const CollectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.4rem;
`

export const Item = styled.li`
  margin-bottom: 0.4rem;
  .title{
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.4rem;
    font-size: 1rem;
    span{
      font-size: 0.8rem;
    }
    .more{
      transform: rotate(90deg);
    }
    h2{
      span{
        margin-right: 0.6rem;
        font-size: 1rem;
        &.normal{
          color: grey;
        }
        &.active{
          color: #fff;
          }
        }
      }
      
  }
`
