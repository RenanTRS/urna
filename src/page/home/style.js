import styled from 'styled-components';
import { colors } from '../../style/base';

export const MainStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.4rem;

    background-color: ${colors.body};

    width: 100%;
    height: 100vh;

    padding: 3.4rem;

    @media (max-width: 1200px){
        flex-direction: column;
        gap: 0;

        padding: 0;
    }
    @media (max-width: 1200px) and (orientation: landscape){
        flex-direction: row;
    }
`