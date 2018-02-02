import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
  @media (min-width: 1020px) {
   max-width: 800px;
   margin: 0 auto;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background-color: #f4f4f5;
  box-shadow: 0 0 5px 0 #999;
`;
