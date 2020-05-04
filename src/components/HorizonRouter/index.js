import React from 'react';
import { useHistory } from 'react-router';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';
import { Container } from './style'

const HorizonRouter = (props) => {
  const router = useHistory()
  const { list } = props
  return (
    <Scroll direction={'horizontal'}>
      <Container count={list.length}>
        {
          list.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
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
