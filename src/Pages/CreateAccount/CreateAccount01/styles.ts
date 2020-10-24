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

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 13px;
  width: 100px;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  &:after {
    content: '';
    position: absolute;
    left: -3px;
    top: 0;
    width: 100px;
    height: 13px;
    border-right: 3px solid #000;
    border-left: 3px solid #000;
  }

  > progress {
    -webkit-appearance: none;
    width: 100px;
    height: 13px;

    ::-webkit-progress-bar {
      background: none;
    }

    ::-webkit-progress-value {
      background: var(--primary);
      transition: width 0.8s ease-out;
    }
  }
`;

export const Image = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.div`
  display: grid;
  padding: 9px 20px;
  text-align: center;

  > strong {
    font-weight: 700;
    color: var(--gray2);
    font-size: 17px;
  }

  > span {
    font-weight: 500;
    color: var(--gray2);
    font-size: 17px;
    padding-bottom: 10px;
  }
`;

export const Btn = styled.div`
  display: grid;
  padding: 8px 10px;
  gap: 15px;
`;
