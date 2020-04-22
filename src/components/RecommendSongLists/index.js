import React from 'react';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';
import { Container, Top } from './style'
import { getCount } from '../../utils'
const RecommendSongLists = (props) => {
  const { list, title } = props
  return (
    <>
      <Top>
        <div className="top">
          <span>{title}</span>
          <b>查看更多</b>
        </div>
      </Top>
      <Scroll direction={'horizontal'}>
        <Container count={list.length}>
          {
            list.map((item, index) => (
              <li
                key={index}
              >
                <div className='play'>
                  <i className='iconfont'>&#xe60e;</i>
                  <span>{getCount(item.playCount)}</span>
                </div>
                <img src={item.coverImgUrl} alt=""/>
                <span>{item.name}</span>
              </li>
            ))
          }
        </Container>
      </Scroll>
    </>
  )
}
RecommendSongLists.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
}
export default React.memo(RecommendSongLists)
