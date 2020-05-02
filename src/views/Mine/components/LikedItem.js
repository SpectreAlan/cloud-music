import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Out = styled.div`
  width: 10rem;
  height: 8rem;
  background: url(${(props) => props.img}) #fff;
  background-size: cover;
  overflow: hidden;
  padding: 1rem 0.2rem 0.2rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  margin-right: 0.4rem;
  border-radius: 0.4rem;
  .in{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    padding-top: 1rem;
    .icon{
      font-size: 2rem;
    }
    .center-title{
      margin: 1rem 0 1rem;
      font-size: 0.8rem;
    }
    .content{
       height: 1.2rem;
       line-height: 1.2rem;
       font-size: 0.8rem;
       box-sizing: border-box;
      .heart{
        width: 80%;
        margin: 0 auto;
        padding: 0.2rem;
        background: grey;
        border-radius: 1rem;
        color: #fff;
        i{
          color: #fff;
        }
      }
    }
  }
`

const LikedItem = (props) => {
  const { title, content, icon, img } = props
  return (
    <Out img={img}>
      <div className='in'>
        <i className='iconfont icon' dangerouslySetInnerHTML={{ __html: icon }}/>
        <div className='center-title'>{title}</div>
        <div className='content'>{
          content === '心动模式' ? (
            <div className='heart'>
              <i className='iconfont'>&#xe774;</i>
              <span>心动模式</span>
            </div>
          ) : content
        }</div>
      </div>
    </Out>
  )
}
LikedItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
};
export default LikedItem
