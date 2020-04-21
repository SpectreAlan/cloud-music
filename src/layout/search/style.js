import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.4rem;
  &>i {
    line-height: 2rem;
    color: slategray;
    font-size: 1.2rem;
  }
  input{
    line-height: 1.6rem;
    width: 14rem;
    outline: none;
    border: none;
    border-radius: 2rem;
    padding-left: 1rem;
    height:1.6rem;
  }
  .circle{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
    background: red;
  }
`;
