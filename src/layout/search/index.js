import React from 'react';
import PropTypes from 'prop-types';
import { Top } from './style'

const Search = (props) => (
  <Top>
    <i className='iconfont'>&#xe60e;</i>
    <input type="text" placeholder='123' />
    <div className="circle"/>
  </Top>
)
Search.propTypes = {
  route: PropTypes.object,
}
export default React.memo(Search)
