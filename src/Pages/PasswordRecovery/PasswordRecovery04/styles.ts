import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
`;

export const Main = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 100px;

  > b {
    color: var(--primary);
    font-size: 45px;
    padding: 20px;
  }

  > span {
    font-weight: 500;
    color: var(--gray2);
    font-size: 15px;
  }
`;

export const PadLock = styled.img`
  width: 160px;
  height: 150px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
`;

export const Bottom = styled.div`
  display: grid;
  padding: 15px;
`;
