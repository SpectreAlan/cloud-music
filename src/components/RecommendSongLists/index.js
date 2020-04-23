import React from 'react';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';
import { Container, Top } from './style'
import { getCount } from '../../utils'
import LazyLoad, { forceCheck } from 'react-lazyload';
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
      <Scroll direction={'horizontal'} onScroll={forceCheck}>
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
                <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}>
                  <img src={item.coverImgUrl} width="100%" height="100%" alt="music"/>
                </LazyLoad>
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
