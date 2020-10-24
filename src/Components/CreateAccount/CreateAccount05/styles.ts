import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div``;

export const Main = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const Img = styled.img`
  width: 220px;
  height: 220px;
`;

export const Content = styled.div`
  display: grid;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 90px;
  > strong {
    font-size: 55px;
    color: var(--primary);
  }
  > span {
    font-weight: 500;
    padding: 5px;
    font-size: 20px;
    color: var(--gray2);
  }
`;

export const Footer = styled.div`
  display: grid;
  padding: 10px;
`;
