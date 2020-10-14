import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
       
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

export const Main =styled.div `
    display: grid;
    padding: 15px;
    gap: 10px;
`;

export const Bottom = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

>span {
    text-align: center;
    font-size: 10px;
    color: var(--gray2);

}
`;