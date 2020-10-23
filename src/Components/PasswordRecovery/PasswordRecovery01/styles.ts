import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Main = styled.div`
  display: grid;
  padding: 5px, 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  > b {
    color: var(--primary);
    font-size: 30px;
  }

  > span {
    font-weight: 500;
    color: var(--gray2);
    font-size: 16px;
    padding: 15px;
  }
`;

export const TextField2 = styled.div`
  display: grid;
  padding: 8px 10px;
  gap: 15px;
`;
