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
  background: #099a35;
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

export const Post = styled.div``;
