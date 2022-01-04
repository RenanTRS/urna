import styled from "styled-components";
import { media } from '../../style/base'

export const FooterStyled = styled.footer`
    border-top: .3rem solid black;

    font-size: 2rem;

    padding: 2rem;

    ${media.phone}{
        display: none;

        font-size: clamp(1.6rem, 4vw, 2rem);
    }
    span{
        display: block;

        margin: 0 0 2rem;
    }
    p{
        margin-left: 2rem;
        margin-bottom: 1rem;
    }
`;