import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Header = styled.div`
  padding: 10px 0px 10px 15px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  float: left;
`;

export const Pirate = styled.img`
  width: 15px;
  padding-right: 10px;
`;

export const Wrapper = styled.div`
  background: #e2e;
  width: 165px;
`;
export const Top = styled.div`
  display: flex;
  gap: 1px;

  > p {
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
  }
  > span {
    font-size: 15px;
    line-height: 1px;
    padding-right: 2px;
  }
`;

export const Bot = styled.div`
  p {
    font-size: 10px;
    line-height: 9px;
  }
`;

export const Time = styled.div`
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
`;

export const Right = styled.div`
  display: flex;
  gap: 5px;
`;
export const NewLvl = styled.div`
  padding: 5px;
  display: flex;
  background: #f8f8f8;
  gap: 10px;
  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #1c60d6;
  }
`;

export const Trophy = styled.img`
  width: 20px;
`;
export const Confetti = styled.img`
  width: 25px;
`;

export const WrapperButton = styled.div`
  background: #d4d4;
`;

export const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Footer = styled.div`
  box-shadow: 0px 0px 15px 0px #29000024;
  display: flex;
  justify-content: space-between;
  padding: 7px 10px;
  margin-bottom: 10px;
`;

export const WrapperLeft = styled.div`
  display: flex;
  gap: 20px;
  p {
    color: var(--grey);
    line-height: 22px;
    font-weight: 400;
    font-size: 10px;
  }
`;

export const Like = styled.div`
  display: flex;
  gap: 5px;
  button {
    border: solid 0.5px #5c5c5c;
    background: none;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Dislike = styled.div`
  display: flex;
  gap: 5px;
  button {
    border: solid 0.5px #5c5c5c;
    background: none;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Message = styled.div`
  display: flex;
  gap: 5px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const WrapperRight = styled.div`
  gap: 15px;
  display: flex;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Favorite = styled.img`
  height: 20px;
`;
