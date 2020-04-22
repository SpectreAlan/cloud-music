import React from 'react';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';
import { Container } from './style'

const HorizonRouter = (props) => {
  const { list } = props
  return (
    <Scroll direction={'horizontal'}>
      <Container count={list.length}>
        {
          list.map((item, index) => (
            <li
              key={index}
            >
              <div className='iconBox'>
                <i className='iconfont' dangerouslySetInnerHTML={{ __html: item.icon }}/>
              </div>
              <span>{item.name}</span>
            </li>
          ))
        }
      </Container>
    </Scroll>
  )
}
HorizonRouter.propTypes = {
  list: PropTypes.array
}
export default React.memo(HorizonRouter)
