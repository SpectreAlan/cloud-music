import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload'
import { getMvList } from '../../store/modules/mv/actions'
import Search from '../../layout/search';
import Scroll from '../../components/Scroll';
import Loading from '../../components/Loading';
import { Content, Img, Control } from './style';
import { getCount, formatDuration } from '../../utils';

const Mv = () => {
  const dispatch = useDispatch()

  const mvList = useSelector((state) => state.getIn(['mv', 'list']))
  const loading = useSelector((state) => state.getIn(['mv', 'loading']))

  useEffect(() => {
    !mvList.size && dispatch(getMvList())
  }, [])

  const list = mvList.size ? mvList.toJS() : []
  return (
    <>
      <Search/>
      {
        <Content>
          <Scroll className="list" onScroll={forceCheck}>
            <ul>
              {
                list.map((item, index) => (
                  <li key={index}>
                    <Img>
                      <LazyLoad
                        placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}
                      >
                        <img src={item.cover} width="100%" height="100%" alt="music"/>
                      </LazyLoad>
                      <div className="title">音乐咨询</div>
                      <i className='iconfont play'>&#xe637;</i>
                      <div className='count'>
                        <i className='iconfont'>&#xe60f;</i>
                        {getCount(item.playCount)}
                      </div>
                      <div className='duration'>
                        <i className='iconfont'>&#xe62f;</i>
                        {formatDuration(item.duration)}
                      </div>
                    </Img>
                    <div className="title">{item.name}</div>
                    <Control>
                      <div className="singer">
                        <LazyLoad
                          placeholder={<img width="100%" height="100%" src={require('../../assets/images/lazy.png')} alt="music"/>}
                        >
                          <img src={item.cover} width="100%" height="100%" alt="music"/>
                        </LazyLoad>
                        <span>{item.artistName}</span>
                      </div>
                      <div className="awesome">
                        <i className='iconfont'>&#xe618;</i>
                        123
                      </div>
                      <div className="comments">
                        <i className='iconfont'>&#xe865;</i>
                        123
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

export default React.memo(Mv)
