import React from 'react';
import PropTypes from 'prop-types';
import { Top } from '../RecommendSongLists/style'
import { List } from './style'
import LazyLoad from 'react-lazyload';
const RecommendSongs = (props) => {
  const { list, title } = props
  return (
    <>
      <Top>
        <div className="top">
          <span>{title}</span>
          <b><i className='iconfont'>&#xe60f;</i>播放全部</b>+
        </div>
      </Top>
      <List>
        {
          list.map((item, index) => (
            <li
              key={index}
            >
              <div className='play'>
                <div>
                  {item.name}
                  <span>-
                    {
                      item.artists
                    }</span>
                </div>
                <p>
                  {
                    item.album
                  }
                </p>
              </div>
              <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}>
                <img src={item.img} width="100%" height="100%" alt="music"/>
              </LazyLoad>
              <i className='iconfont'>&#xe60f;</i>
            </li>
          ))
        }
      </List>
    </>
  )
}
RecommendSongs.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
}
export default React.memo(RecommendSongs)
