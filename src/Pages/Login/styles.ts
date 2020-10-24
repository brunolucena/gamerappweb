import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Main = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 50px;
  gap: 10px;
  width: 100%;
`;

export const TextField2 = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    font-weight: bold;
    padding: 15px 0;
    background: none;
    border: none;
    color: var(--secondary);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 32px;

  background-color: var(--primary);

  border-bottom-left-radius: 41px;
  border-bottom-right-radius: 41px;
`;
