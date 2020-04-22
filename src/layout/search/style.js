import styled from 'styled-components';

export const Top = styled.div`
  height:3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  &>i {
    color: slategray;
    font-size: 1.2rem;
  }
  input{
    line-height: 1.4rem;
    width: 14rem;
    outline: none;
    border: none;
    border-radius: 2rem;
    padding-left: 1rem;
    height:1.4rem;
  }
  .circle{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: slategray;
  }
`;
