import React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Tab } from './style';

const Home = (props) => {
  const { route } = props;
  const state = useSelector((state) => state.getIn(['user', 'state']))
  return (
    <>
      <Tab>
        <NavLink to="/find" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe75a;</i>
            <span> 发现 </span>
          </div>
        </NavLink>
        <NavLink to="/video" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe637;</i>
            <span> 视频 </span>
          </div>
        </NavLink>
        <NavLink to={state ? '/mine' : '/login'} activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe60e;</i>
            <span> 我的 </span>
          </div>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}

Home.propTypes = {
  route: PropTypes.object
}

export default React.memo(Home)
