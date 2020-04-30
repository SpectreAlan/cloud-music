import React, { useRef, useEffect } from 'react';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';
import { Container } from './style'

const HorizonList = (props) => {
  const { list, val, handleClick } = props
  const out = useRef(null)

  useEffect(() => {
    let count = 0
    list.map((item) => {
      count += item.name.length
    })
    out.current.style.width = `${count * 0.8 + list.length * 0.2}rem`;
  }, [list]);

  return (
    <Scroll direction={'horizontal'}>
      <Container ref={out}>
        {
          list.map((item, index) => (
            <li
              key={index}
              className={`${val === item.id ? 'selected' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </li>
          ))
        }
      </Container>
    </Scroll>
  )
}
HorizonList.propTypes = {
  list: PropTypes.array,
  val: PropTypes.number,
  handleClick: PropTypes.func,
}
export default React.memo(HorizonList)
