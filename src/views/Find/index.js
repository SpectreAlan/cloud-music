import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Search from '../../layout/search'
import Scroll from '../../components/Scroll';
import { Content } from './style';
const Find = (props) => (
  <>
    <Search/>
    <Content>
      <Scroll className="list">
        <div>Scroll</div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Content>
  </>
)
Find.propTypes = {
  route: PropTypes.object,
}
export default React.memo(Find)
