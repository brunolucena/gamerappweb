import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div``;

export const Btn = styled.div`
  text-align: end;
  > button {
    background: none;
    border: none;
    font-size: 14px;
    color: var(--gray2);
    padding-top: 10px;
    padding-right: 10px;
  }
`;

export const Text = styled.div`
  padding-top: 20px;
  display: grid;
  gap: 10px;
  padding-left: 20px;
  > strong {
    font-size: 30px;
  }
  > span {
    font-size: 15px;
    color: var(--gray2);
    padding-bottom: 25px;
  }
`;

export const Main = styled.div`
  z-index: -1;
  display: grid;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  > div {
    border: solid #000;
    border-radius: 7px;
    padding: 40px 55px;
    background: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  background: #ffffff;
  width: 100%;
  > button {
    background: none;
    width: 95%;
  }
`;
