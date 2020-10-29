import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background: #f0f0f0;
  z-index: 2;
  position: sticky;
  top: 0;
`;

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
  display: grid;
  grid-template-columns: auto auto;

  flex-direction: column;
  max-height: 100%;
  background: #ffffff;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 25px;
  > button {
    border: solid #000;
    border-radius: 7px;
    padding: 30px;
    background: none;
  }
`;

export const Bottom = styled.div`
  text-align: center;
  background: #fff;
  min-width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  @media (min-height: 620px) {
    position: fixed;
  }
  button {
    background: none;
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
