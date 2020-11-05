import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Header = styled.div`
  display: flex;
  padding: 10px 15px;
`;

export const Pirate = styled.img`
  height: 20px;
  padding-right: 10px;
`;

export const Wrapper = styled.div`
  gap: 2px;
`;
export const Top = styled.div`
  gap: 5px;
  display: flex;
  > p {
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
  }
  > span {
    font-size: 15px;
    line-height: 3px;
  }

  > button {
    font-size: 12px;
    background: none;
    border: none;
    color: #279f20;
    cursor: pointer;
  }
`;

export const Bot = styled.div`
  display: flex;
  gap: 3px;
  p {
    font-size: 15px;
    line-height: 1px;
  }
`;

export const Time = styled.div`
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
`;

export const Tag = styled.div`
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
  color: #1563ce;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  p {
    padding: 6px;
    line-height: 5px;
    font-size: 9px;
    background: var(--background);
    border: 1px;
    border-radius: 3px;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  padding: 10px 5px;
`;

export const Game = styled.img`
  width: 100px;
`;

export const Text = styled.div`
  > strong {
    line-height: 20px;
    font-size: 10px;
  }
  > p {
    font-size: 8px;
    line-height: 7px;
  }
`;

export const Text2 = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 25px;
  margin-right: 30px;
  strong {
    line-height: 25px;
    font-size: 17px;
  }
  > p {
    font-size: 8px;
    line-height: 7px;
  }
`;
export const Text3 = styled.div`
  display: flex;
  gap: 20px;
  > p {
    font-size: 8px;
    line-height: 7px;
  }
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
