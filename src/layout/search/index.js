import React from 'react';
import PropTypes from 'prop-types';
import { Top } from './style'
import { withRouter } from 'react-router-dom'

const Search = (props) => {
  const mv = props.location.pathname.includes('/mv')
  return (
    <Top>
      <i className='iconfont' dangerouslySetInnerHTML={{ __html: mv ? '&#xe603;' : '&#xe61c;' }} />
      <input type="text" placeholder='123' />
      <div className="circle"/>
    </Top>
  )
}
Search.propTypes = {
  location: PropTypes.object,
}
export default React.memo(withRouter(Search))
