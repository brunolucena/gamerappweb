import styled from 'styled-components';

export const Container = styled.div``;

export const Img = styled.img`
  height: auto;
  max-width: 100%;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  bottom: 100px;
`;

export const Baloon = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  border-radius: 15px;
  width: 290px;
  height: 165px;
  padding-top: 17px;
  padding-left: 17px;
  padding-right: 17px;

  gap: 10px;
  ::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-left: 30px solid transparent;
    border-right: 5px solid transparent;
    border-top: 20px solid #fff;
    bottom: -17px;
    left: 55%;
  }
  > strong {
    padding-left: 10px;
    font-size: 27px;
    font-weight: 700;
  }
  > span {
    padding-left: 10px;
    font-size: 12px;
    color: #606060;
  }
  > button {
    margin-left: 10px;
    margin-right: 90px;
  }
`;

export const Img2 = styled.img`
  padding-top: 220px;
  height: 190px;
  left: 45%;
  position: absolute;
  margin: 0;
`;

export const Footer = styled.div``;

export const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
`;
