import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecord, getCollect } from '../../store/modules/user/actions'
import { Top, Content, ScrollList, Item, CollectList } from './style'
import Scroll from '../../components/Scroll'
import topSection from './components/topSection'
import LikedItem from './components/LikedItem';
import RecentItem from './components/RecentItem';
import CollectItem from './components/CollectItem';
const Mine = () => {
  const dispatch = useDispatch()
  const [me, setMe] = useState(true)
  const userInfo = useSelector((state) => state.getIn(['user', 'info']))
  const userRecord = useSelector((state) => state.getIn(['user', 'record']))
  const userCollect = useSelector((state) => state.getIn(['user', 'collect']))
  const profile = userInfo.toJS().profile
  const record = userRecord.size ? userRecord.toJS() : []
  const collect = userCollect.size ? userCollect.toJS() : []
  const love = collect.shift().coverImgUrl
  useEffect(() => {
    !userRecord.size && dispatch(getRecord({ uid: profile.userId, type: 1 }))
    !userCollect.size && dispatch(getCollect({ uid: profile.userId }))
  }, [])
  const my = []
  const other = []
  for (let i = 0; i < collect.length; i++) {
    collect[i]['ordered'] ? other.push(collect[i]) : my.push(collect[i])
  }
  return (
    <>
      <Top>
        <i className='iconfont'>&#xe75a;</i>
        <span className="circle"/>
      </Top>
      <Content>
        <Scroll>
          <div className="container">
            {
              topSection(profile)
            }
            <ul className="list">
              <Item>
                <div className="title">
                  <h2>我的音乐</h2>
                  <span>
                    更多
                    <i className='iconfont more'>&#xe63a;</i>
                  </span>
                </div>
                <Scroll direction={'horizontal'}>
                  <ScrollList>
                    <LikedItem content='心动模式' title='我喜欢的音乐' icon='&#xe688;' img={love}/>
                    <LikedItem content='来这里找好歌' title='私人FM' icon='&#xe725;' img=''/>
                  </ScrollList>
                </Scroll>
              </Item>
              <Item>
                <div className="title">
                  <h2>最近播放</h2>
                  <span>
                    更多
                    <i className='iconfont more'>&#xe63a;</i>
                  </span>
                </div>
                <Scroll direction={'horizontal'}>
                  <ScrollList len={record.length}>
                    {
                      record.map((item, index) => <RecentItem album={item.song.al.name} name={item.song.name} picUrl={item.song.al.picUrl} key={index}/>)
                    }
                    <LikedItem title=''/>
                  </ScrollList>
                </Scroll>
              </Item>
              <Item>
                <div className="title">
                  <h2>
                    <span className={me ? 'active' : 'normal'} onClick={() => setMe(true)}>创建歌单</span>
                    <span className={me ? 'normal' : 'active'} onClick={() => setMe(false)}>收藏歌单</span>
                  </h2>
                  <span>
                    <i className='iconfont'>&#xe71f;</i>
                  </span>
                </div>
                <CollectList>
                  {
                    (me ? my : other).map((item, index) => <CollectItem img={item.coverImgUrl} name={item.name} count={item.trackCount} key={index}/>)
                  }
                </CollectList>
              </Item>
            </ul>
          </div>
        </Scroll>
      </Content>
    </>
  )
}

export default React.memo(Mine)
