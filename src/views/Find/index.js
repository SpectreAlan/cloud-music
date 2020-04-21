import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Search from '../../layout/search'

const Find = (props) => {
  const { route } = props
  return (
    <>
      <Search/>
      {renderRoutes(route.routes)}
    </>
  )
}
Find.propTypes = {
  route: PropTypes.object,
}
export default React.memo(Find)
