import styled from 'styled-components';
import { colors } from '../../style/base';
//import {media} from '../../style/media';
import { media } from '../../style/base';

export const MainStyled = styled.main`
    display: flex;
    align-items: center;
    gap: 7.4rem;

    background-color: ${colors.body};

    width: 100%;
    height: 100vh;

    padding: 3.4rem;

    ${media.phone}{
        flex-direction: column;
        gap: 0;

        padding: 0;
    }
`