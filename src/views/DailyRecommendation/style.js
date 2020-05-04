import styled from 'styled-components';

export const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.4rem;
  z-index: 8;
`

export const Content = styled.div`
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .out{
    position: relative;
  }
`
