import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Search from '../../layout/search'
import Slider from '../../components/Slider';
import { getBannerList, getRecommendList, getRecommendSongs } from '../../store/modules/find/actions'
import Scroll from '../../components/Scroll';
import HorizonRouter from '../../components/HorizonRouter';
import RecommendSongLists from '../../components/RecommendSongLists';
import RecommendSongs from '../../components/RecommendSongs';
import { Content } from './style';
import { recommendTypes } from './routes';

const Find = (props) => {
  const dispatch = useDispatch()
  const bannerList = useSelector((state) => state.getIn(['find', 'bannerList']))
  const recommendList = useSelector((state) => state.getIn(['find', 'recommendList']))
  const recommendSongs = useSelector((state) => state.getIn(['find', 'recommendSongs']))
  useEffect(() => {
    !bannerList.size && dispatch(getBannerList())
    !recommendList.size && dispatch(getRecommendList())
    !recommendSongs.size && dispatch(getRecommendSongs())
  }, [])
  const banner = bannerList.size ? bannerList.toJS() : []
  const recommend = recommendList.size ? recommendList.toJS() : []
  const songs = recommendSongs.size ? recommendSongs.toJS() : []
  return (
    <>
      <Search/>
      <Content>
        <Scroll className="list">
          <div>
            <Slider bannerList={banner}/>
            <HorizonRouter list={recommendTypes}/>
            <RecommendSongLists list={recommend} title='为你精心挑选'/>
            <RecommendSongs list={songs} title='根据你喜欢的歌曲推荐'/>
          </div>
        </Scroll>
        {renderRoutes(props.route.routes)}
      </Content>
    </>
  )
}
Find.propTypes = {
  route: PropTypes.object,
}
export default React.memo(Find)
