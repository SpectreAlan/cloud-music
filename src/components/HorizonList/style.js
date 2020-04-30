import styled from 'styled-components';
import style from '../../assets/styles/global-style';
export const Container = styled.ul`
  height: 2rem;
  line-height: 2rem;
  display: flex;
  flex-wrap: nowrap;
  li{
    text-align: center;
    font-size: 0.8rem;
    padding: 0 0.2rem;
    &.selected{
      color: ${style['theme-color']};
      border-bottom: 1px solid ${style['theme-color']};
      opacity: 0.8;
    }
  }
`
