import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

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
  grid-template-columns: 1fr 1fr;
  min-height: 100%;
  background: #ffffff;
  padding: 10px 10px 100px;
  gap: 25px;

  > button.button-normal {
    border: 1px solid #bbbbbb;
    border-radius: 7px;
    padding: 20px;
    background: none;
    outline: none;

    &:active,
    &:focus {
      box-shadow: 0px 0px 15px 0px #29000024;
    }

    > img {
      width: 100%;
      max-width: 150px;
    }
  }

  > button.button-selected {
    border: 2px solid var(--primary);
  }
`;

export const Bottom = styled.div`
  overflow: hidden;
  position: fixed;
  text-align: center;
  background: #fff;
  min-width: 100%;
  bottom: 0;
  z-index: 2;
  box-shadow: 0px 0px 15px 0px #29000024;

  button {
    background: none;
    width: 100%;
    padding: 10px 20px;
  }
`;
