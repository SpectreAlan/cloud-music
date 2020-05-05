import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyRecommendation } from '../../store/modules/find/actions'
import { Top, Content, Bg, Control } from './style'
import Scroll from '../../components/Scroll';
import ScrollList from './ScrollList';

const DailyRecommendation = () => {
  const scroll = useRef()
  const control = useRef()
  const bg = useRef()
  const txt = useRef()
  const head = useRef()
  const dispatch = useDispatch()
  const dailyRecommendationList = useSelector((state) => state.getIn(['find', 'dailyRecommendationList']))

  useEffect(() => {
    !dailyRecommendationList.size && dispatch(getDailyRecommendation())
  }, [])

  const Recommendation = dailyRecommendationList.size ? dailyRecommendationList.toJS() : []
  const list = []
  Recommendation.map((k) => {
    const o = {}
    o.name = k.name
    o.artists = k.artists.map((k, i) => (i === 0 ? '' : '、') + k.name)
    o.album = k.album.name
    o.img = k.album.picUrl
    list.push(o)
  })
  const cover = Recommendation[0].album.blurPicUrl
  const time = new Date()
  const onScroll = (pos) => {
    const y = pos.y
    console.log(y)
    control.current.style.top = 200 + y + 'px'
    if (y > 0) {
      bg.current.style.transform = 'scale(' + (100 + y) / 100 + ')'
    } else {
      txt.current.style.opacity = 1 - (100 + y) / 100
      if (y < -159) {
        head.current.style.background = 'url(' + cover + ')'
      } else {
        head.current.style.background = 'url()'
      }
    }
  }
  return (
    <>
      <Top ref={head}>
        <div className='topContent'>
          <i className='iconfont'>&#xe63a;</i>
          <span ref={txt}>每日推荐</span>
          <div className="circle"/>
        </div>
        <img src={cover} alt=""/>
      </Top>
      <Bg cover={cover} ref={bg}>
        <img src={cover} alt=""/>
      </Bg>
      <Control ref={control}>
        <div className='item'>
          <i className='iconfont'>&#xe774;</i>
          <span>播放全部</span>
        </div>
        <div className='item'>
          <i className='iconfont'>&#xe611;</i>
          <span>多选</span>
        </div>
      </Control>
      <Scroll ref={scroll} onScroll={onScroll}>
        <Content>
          <div className="out">
            <div className="date">
              {time.getMonth()}<span>/{time.getDay()}</span>
            </div>
            <ScrollList list={list} />
          </div>
        </Content>
      </Scroll>
    </>
  )
}

export default DailyRecommendation
