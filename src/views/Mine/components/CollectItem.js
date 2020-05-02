import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Out = styled.div`
  width: 9rem;
  height: 3rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.6rem;
  border-radius: 0.4rem;
  display: flex;
  margin: 0 0.5rem 1rem 0;
  img{
    height: 3rem;
    width: 3rem;
  }
  ul{
    margin-left: 0.4rem;
    li{
      text-align: left;
      line-height: 0.9rem;
      height: 2rem;
    }
    .count{
      color: grey;
      height:1rem;
      margin-top:0.2rem;
    }
  }
`

const CollectItem = (props) => {
  const { name, count, img } = props
  return (
    <Out>
      <img src={img} alt=""/>
      <ul>
        <li>{name}</li>
        <li className='count'>{count}首</li>
      </ul>
    </Out>
  )
}
CollectItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  count: PropTypes.number,
};
export default CollectItem
