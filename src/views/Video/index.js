import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload'
import { getTypes, getCurrentVideoList } from '../../store/modules/video/actions'
import Search from '../../layout/search';
import HorizonList from '../../components/HorizonList';
import Scroll from '../../components/Scroll';
import Loading from '../../components/Loading';
import { Content, Img, Control } from './style';
import { getCount, formatDuration } from '../../utils';

const Video = () => {
  const dispatch = useDispatch()
  let [category, setCategory] = useState(0);
  const videoList = useSelector((state) => state.getIn(['video', 'list']))
  const loading = useSelector((state) => state.getIn(['video', 'loading']))
  const typesList = useSelector((state) => state.getIn(['video', 'types']))

  const updateCategory = (val) => {
    setCategory(val)
    dispatch(getCurrentVideoList(val))
  }

  useEffect(() => {
    !typesList.size && dispatch(getTypes())
  }, [])

  useEffect(() => {
    if (typesList.size > 0) {
      const id = typesList.toJS()[0].id
      updateCategory(id)
    }
  }, [typesList])

  const list = videoList.size ? videoList.toJS() : []
  const types = typesList.size ? typesList.toJS() : []
  return (
    <>
      <Search/>
      <HorizonList list={types} val={category} handleClick={(val) => updateCategory(val)}/>
      {
        <Content>
          <Scroll className="list" onScroll={forceCheck}>
            <ul>
              {
                loading ? <Loading/> : list.map((item, index) => (
                  <li key={index}>
                    <Img>
                      <LazyLoad
                        placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}
                      >
                        <img src={item.data.coverUrl} width="100%" height="100%" alt="music"/>
                      </LazyLoad>
                      <div className="title">音乐咨询</div>
                      <i className='iconfont play'>&#xe637;</i>
                      <div className='count'>
                        <i className='iconfont'>&#xe60f;</i>
                        {getCount(item.data.playTime)}
                      </div>
                      <div className='duration'>
                        <i className='iconfont'>&#xe62f;</i>
                        {formatDuration(item.data.durationms)}
                      </div>
                    </Img>
                    <div className="title">{item.data.title}</div>
                    <Control>
                      <div className="singer">
                        <LazyLoad
                          placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}
                        >
                          <img src={item.data.creator.avatarUrl} width="100%" height="100%" alt="music"/>
                        </LazyLoad>
                        <span>{item.data.creator.nickname}</span>
                      </div>
                      <div className="awesome">
                        <i className='iconfont'>&#xe618;</i>
                        {item.data.praisedCount}
                      </div>
                      <div className="comments">
                        <i className='iconfont'>&#xe865;</i>
                        {item.data.commentCount}
                      </div>
                    </Control>
                  </li>
                ))
              }
            </ul>
          </Scroll>
        </Content>
      }
    </>
  )
}

export default React.memo(Video)
