import styled from 'styled-components';

export const Container = styled.div``;

export const Img = styled.img`
  height: 190px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
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
  position: relative;
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
    left: 60%;
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
