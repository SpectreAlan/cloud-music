import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyRecommendation } from '../../store/modules/find/actions'
import { Top, Content, Bg, Control } from './style'
import Scroll from '../../components/Scroll';
import ScrollList from './ScrollList';

const DailyRecommendation = () => {
  const listRef = useRef()
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
  let img = ''
  console.log(Recommendation)
  Recommendation.map((k) => {
    const o = {}
    o.name = k.name
    o.artists = k.ar.map((k, i) => (i === 0 ? '' : '、') + k.name)
    o.album = k.al.name
    o.img = k.al.picUrl
    list.push(o)
    img = Recommendation[1].al.picUrl
  })
  const time = new Date()
  Recommendation.length > 0 && Recommendation[1].al.picUrl
  const onScroll = useCallback((pos) => {
    const y = pos.y
    control.current.style.top = y / 19 + 9.7 + 'rem'
    if (y > 0) {
      bg.current.style.transform = 'scale(' + (100 + y) / 100 + ')'
    } else {
      txt.current.style.opacity = 1 - (100 + y) / 100
      if (y / 19 < -6.6) {
        control.current.style.top = '3rem'
        bg.current.style.height = '3rem'
        bg.current.style['z-index'] = 7
        listRef.current.style['z-index'] = 6
      } else {
        head.current.style['z-index'] = 8
        bg.current.style.height = '14rem'
        bg.current.style['z-index'] = 6
        listRef.current.style['z-index'] = 7
      }
    }
  }, [])
  return (
    <>
      <Top ref={head}>
        <div className='topContent'>
          <i className='iconfont'>&#xe63a;</i>
          <span ref={txt}>每日推荐</span>
          <div className="circle"/>
        </div>
      </Top>
      <Bg ref={bg}>
        <img src={img} alt=""/>
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
      <Scroll onScroll={onScroll}>
        <Content ref={listRef} >
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
