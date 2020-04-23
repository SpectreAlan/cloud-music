import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 3rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 3rem;
  ul{
    padding: 0.8rem;
    li{
      margin-bottom: 0.6rem;
      position: relative;
      >.title{
        font-size: 0.8rem;
        color: black;
        padding: 0.4rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    }
  }
`
export const Img = styled.div`
  height: 8rem;
  position: relative;
  font-size: 0.6rem;
  color:#fff;
  img{
    height: 100%;
    width: 100%;
    border-radius: 0.4rem;
  }
  .title{
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    border-radius: 0.3rem;
    border: 1px solid #fff;
    padding: 0.2rem 0.4rem;
  }
  .play{
    position: absolute;
    font-size: 1.6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  .count{
    position: absolute;
    left: 0.4rem;
    bottom: 0.4rem;
    i{
      margin-right: 0.2rem;
    }
  }
  .duration{
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    i{
      margin-right: 0.2rem;
    }
  }
`

export const Control = styled.div`
  padding: 0.4rem 0;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  width: 100%;
  .singer{
    display: flex;
    justify-content: space-between;
    img{
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin: 0.1rem;
    }
  }
`
