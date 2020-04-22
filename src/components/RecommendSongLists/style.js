import styled from 'styled-components';
export const Top = styled.div`
  padding: 0.5rem;
  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
      color: black;
      font-weight: bold;
    }
    b{
      padding: 0.2rem 0.4rem;
      border-radius: 1rem;
      border: 1px solid slategray;
      color: #000;
      font-size: 0.5rem;
      line-height: 0.9rem;
    }
  }
`
export const Container = styled.ul`
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => props.count * 5 + 'rem'};
  li{
    width: 5rem;
    position: relative;
    margin-right: 0.4rem;
    font-size: 0.8rem;
    .play{
      text-align: right;
      position: absolute;
      border-top-right-radius: 0.4rem;
      border-top-left-radius: 0.4rem;
      width: 100%;
      background: rgba(0,0,0,0.4);
      top: 0;
      left: 0;
      color: #fff;
      line-height: 1.2rem;
      &>span{
        color: #fff;
        padding-right: 0.3rem;
        font-size: 0.7rem;
      }
    }
    img{
      width: 5rem;
      height: 5rem;
      border-radius: 0.4rem;
    }
    &>span{
      color: black;
      font-size: 0.6rem;
      line-height: 1rem;
      text-align: start;
      overflow: hidden; 
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
`
