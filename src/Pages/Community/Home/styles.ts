import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
`;

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
  padding: 10px 10px;
  bottom: 0;
  box-shadow: 0px 0px 15px 0px #29000024;
`;

export const Icons = styled.div`
  justify-content: space-between;
  display: flex;
  > button {
    background: none;
    border: none;
  }
`;

export const Store = styled.img`
  width: 18px;
`;

export const Shop = styled.img`
  width: 18px;
`;

export const Trade = styled.img`
  width: 18px;
`;

export const Names = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 10px;
    line-height: 20px;
  }
`;
