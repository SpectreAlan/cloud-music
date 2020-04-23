import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Tab } from './style';

const Home = (props) => {
  const { route } = props;
  return (
    <>
      <Tab>
        <NavLink to="/find" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe75a;</i>
            <span> 发现 </span>
          </div>
        </NavLink>
        <NavLink to="/mv" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe637;</i>
            <span> 视频 </span>
          </div>
        </NavLink>
        <NavLink to="/mine" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe60e;</i>
            <span> 我的 </span>
          </div>
        </NavLink>
        <NavLink to="/cloud" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe600;</i>
            <span> 云村 </span>
          </div>
        </NavLink>
        <NavLink to="/account" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe66c;</i>
            <span> 账号 </span>
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
