import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendList } from '../../store/modules/find/actions';
import RecommendSongLists from '../../components/RecommendSongLists';
const Mine = () => {
  const dispatch = useDispatch()
  const recommendList = useSelector((state) => state.getIn(['find', 'recommendList']))
  useEffect(() => {
    !recommendList.size && dispatch(getRecommendList())
  }, [])
  const recommend = recommendList.size ? recommendList.toJS() : []
  return (
    <>
      <RecommendSongLists list={recommend} title='为你精心挑选'/>
    </>
  )
}

export default React.memo(Mine)
