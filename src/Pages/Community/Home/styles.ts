import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  height: 45px;
  background-color: #fff;

  > div {
    padding-left: 10%;
  }
`;

export const Logo = styled.img`
  width: 125px;
`;

export const Trophy = styled.img`
  height: 20px;
`;

export const Pirate = styled.img`
  height: 20px;
`;

export const Selection = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  background: var(--background);
  > button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    background: #099a35;
    color: white;
  }
`;

export const Footer = styled.div`
  background: var(--white);
  padding-top: 5px;
  padding-left: px;
  padding-right: px;
  bottom: 0;
  box-shadow: 0px 0px 5px 0px #29000024;
`;

export const Icons = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  > button {
    height: 60px;
    width: 40px;
    background: none;
    border: none;
    font-size: 11px;
    cursor: pointer;
  }
`;

export const Store = styled.img`
  width: 21px;
`;

export const Shop = styled.img`
  width: 17px;
  justify-content: center;
`;

export const Trade = styled.img`
  width: 16px;
`;
