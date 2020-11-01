import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  max-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  max-width: 100vh;
  padding-left: 10px;
  padding-top: 10px;
`;

export const Pirate = styled.img`
  height: 20px;
  padding-right: 10px;
`;

export const Time = styled.div`
  font-size: 11px;
  line-height: 10px;
  font-weight: 400;
`;

export const Tag = styled.div`
  font-size: 11px;
  line-height: 10px;
  font-weight: 400;
  color: #1563ce;
`;

export const Wrapper = styled.div`
  display: flex;

  > p {
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
  }
  > span {
    padding-left: 5px;
    font-size: 15px;
    line-height: 3px;
  }

  > button {
    padding-bottom: 10px;
    padding-left: 5px;
    font-size: 11px;
    background: none;
    border: none;
    color: #279f20;
    cursor: pointer;
  }
`;

export const WrapperButton = styled.div`
  position: fixed;
  right: 0;
`;

export const Review = styled.button`
  border-radius: 5px;
  font-size: 10px;
  border: none;
`;

export const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
