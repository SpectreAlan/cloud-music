import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Tab, TabItem } from './style';

const Home = (props) => {
  const { route } = props;
  return (
    <>
      <Tab>
        <NavLink to="/find" activeClassName="selected">
          <TabItem>
            <span> 发现 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/video" activeClassName="selected">
          <TabItem>
            <span> 视频 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/mine" activeClassName="selected">
          <TabItem>
            <span> 我的 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/cloud" activeClassName="selected">
          <TabItem>
            <span> 云村 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/account" activeClassName="selected">
          <TabItem>
            <span> 账号 </span>
          </TabItem>
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
