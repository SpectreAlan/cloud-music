import React from 'react';
import PropTypes from 'prop-types';
import { Top } from '../RecommendSongLists/style'
import { List } from './style'
const RecommendSongs = (props) => {
  const { list, title } = props
  return (
    <>
      <Top>
        <div className="top">
          <span>{title}</span>
          <b><i className='iconfont'>&#xe60f;</i>播放全部</b>
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
                      item.song.artists.map((k, i) => (i === 0 ? '' : '、') + k.name)
                    }</span>
                </div>
                <p>
                  {
                    item.song.alias.join('/')
                  }
                </p>
              </div>
              <img src={item.picUrl} alt=""/>
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
