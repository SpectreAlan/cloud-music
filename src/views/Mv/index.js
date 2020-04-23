import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMvList } from '../../store/modules/mv/actions'
import Search from '../../layout/search';
import Scroll from '../../components/Scroll';
import { Content, Img, Control } from './style';
import { getCount, formatDuration } from '../../utils';

const Mv = () => {
  const dispatch = useDispatch()
  const mvList = useSelector((state) => state.getIn(['mv', 'list']))
  const list = mvList.size ? mvList.toJS() : []
  useEffect(() => {
    !mvList.size && dispatch(getMvList())
  }, [])
  return (
    <>
      <Search/>
      <Content>
        <Scroll className="list">
          <ul>
            {
              list.map((item, index) => (
                <li key={index}>
                  <Img cover={item.cover}>
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
                      <img src={item.cover} alt=""/>
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
    </>
  )
}

export default React.memo(Mv)
