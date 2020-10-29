import KeySrc from './cloud.png';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-image: url(${KeySrc});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Container = styled.div``;

export const Img = styled.img`
  height: auto;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Baloon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  border-radius: 15px;
  max-width: 290px;
  height: 165px;
  padding-top: 17px;
  padding-left: 27px;
  padding-right: 27px;
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
    font-size: 27px;
    font-weight: 700;
  }

  > p {
    font-size: 12px;
    color: #606060;
  }

  > a {
    align-self: flex-start;
  }
`;

export const Img2 = styled.img`
  height: 190px;
  margin: 25px 0 0 120px;
`;

export const Img3 = styled.img`
  width: 100%;
`;
