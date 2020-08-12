import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecord, getCollect } from '../../store/modules/user/actions'
import { Top, Content, CollectList } from './style'
import Scroll from '../../components/Scroll'
import CollectItem from './components/CollectItem';
import RecommendSongs from '../../components/RecommendSongs'
const Mine = () => {
  const dispatch = useDispatch()
  const [me, setMe] = useState(true)
  const userInfo = useSelector((state) => state.getIn(['user', 'info']))
  const userRecord = useSelector((state) => state.getIn(['user', 'record']))
  const userCollect = useSelector((state) => state.getIn(['user', 'collect']))
  const profile = userInfo.toJS().profile
  const record = userRecord.size ? userRecord.toJS().splice(0, 15) : []
  const recordList = []
  record.map((item) => {
    recordList.push(
      {
        name: item.song.name,
        artists: item.song.ar.map((k, i) => (i === 0 ? '' : '、') + k.name),
        album: item.song.al.name,
        img: item.song.al.picUrl,
      }
    )
  })

  const collect = userCollect.size ? userCollect.toJS() : []
  const my = []
  const other = []
  if (userCollect.size) {
    for (let i = 0; i < collect.length; i++) {
      collect[i]['ordered'] ? other.push(collect[i]) : my.push(collect[i])
    }
  }
  useEffect(() => {
    !userCollect.size && dispatch(getCollect({ uid: profile.userId }))
    !userRecord.size && dispatch(getRecord({ uid: profile.userId, type: 1 }))

  }, [])

  return (
    <>
      <Top>
        <i className='iconfont'>&#xe75a;</i>
        <span className="circle"/>
      </Top>
      <Content>
        <Scroll>
          <div className="container">
            <div className="info">
              <img src={profile.avatarUrl} alt=""/>
              <div>
                <h2>{profile.nickname}</h2>
                <span>vip {profile.vipType}</span>
              </div>
            </div>
            <RecommendSongs list={recordList} title='最近播放' albumVisible/>
            <h2>
              <span className={me ? 'active' : 'normal'} onClick={() => setMe(true)}>创建歌单</span>
              <span className={me ? 'normal' : 'active'} onClick={() => setMe(false)}>收藏歌单</span>
            </h2>
            {
              (me ? my : other).map((item, index) => <CollectItem img={item.coverImgUrl} name={item.name} count={item.trackCount} key={index}/>)
            }
          </div>
        </Scroll>
      </Content>
    </>
  )
}

export default React.memo(Mine)
