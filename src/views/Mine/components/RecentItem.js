import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Out = styled.div`
  width: 12.5rem;
  height: 4.5rem;
  padding: 0.2rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  border-radius: 0.4rem;
  display: flex;
  .cover{
    height: 4.7rem;
    width: 4.7rem;
    position: relative;
    img{
      width: 100%;
    }
    .icon{
      font-size: 1.6rem;
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      color: #fff;
    }
  }
  ul{
    margin-left: 0.4rem;
    li{
      text-align: left;
      width: 7rem;
      height: 1.4rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &.album{
        margin: 0.3rem 0 0rem;
        font-size: 0.7rem;
      }
      span{
        display: inline-block;
        background: red;
        padding: 0 0.4rem;
        border-radius: 1rem;
        line-height: 1.2rem;
        font-size: 0.7rem;
      }
    }
  }
`

const RecentItem = (props) => {
  const { name, picUrl, album } = props
  return (
    <Out>
      <div className="cover">
        <img src={picUrl} alt=""/>
        <i className='iconfont icon'>&#xe774;</i>
      </div>
      <ul>
        <li>{name}</li>
        <li className='album'>{album}</li>
        <li className='play'><span>继续播放</span></li>
      </ul>
    </Out>
  )
}
RecentItem.propTypes = {
  name: PropTypes.string,
  picUrl: PropTypes.string,
  album: PropTypes.string
};
export default RecentItem
