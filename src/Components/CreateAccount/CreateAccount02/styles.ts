import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
  > strong {
    color: var(--primary);
    font-size: 23px;
    text-align: center;
    align-self: center;
  }
`;

export const Image = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  > progress {
    -webkit-appearance: none;
    width: 100px;
    height: 13px;
    border: 2px solid #000;
    ::-webkit-progress-bar {
      background: none;
    }
    ::-webkit-progress-value {
      background: var(--primary);
    }
  }
`;

export const Main = styled.div`
  display: grid;
  padding: 10px 20px;
  text-align: center;

  > span {
    font-weight: 500;
    color: var(--gray2);
    font-size: 17px;
    padding: 14px 14px;
  }
`;

export const Btn = styled.div`
  display: grid;
  padding: 8px 10px;
  gap: 15px;
`;
