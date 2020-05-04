import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyRecommendation } from '../../store/modules/find/actions'
import { Top, Content } from './style'
import Scroll from '../../components/Scroll';
import RecommendSongs from '../../components/RecommendSongs';

const DailyRecommendation = () => {
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
  return (
    <>
      <Top>
        <i className='iconfont'>&#xe63a;</i>
        <span>每日推荐</span>
        <div className="circle"/>
      </Top>
      <Scroll>
        <Content>
          <div className="out">
            <RecommendSongs list={list} title=''/>
          </div>
        </Content>
      </Scroll>
    </>
  )
}

export default DailyRecommendation
