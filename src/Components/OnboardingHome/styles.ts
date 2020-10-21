import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 32px 0;

  background-color: var(--primary);

  border-bottom-left-radius: 41px;
  border-bottom-right-radius: 41px;
`;

export const LogoReaper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -22px;
  z-index: -1;
  padding: 0 20px;
`;

export const Background = styled.img`
  width: 100%;
`;

export const Main = styled.div`
  display: grid;
  padding: 15px;
  gap: 10px;
`;

export const Bottom = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  > span {
    font-weight: regular;
    text-align: center;
    font-size: 11px;
    color: var(--gray2);
  }
`;
