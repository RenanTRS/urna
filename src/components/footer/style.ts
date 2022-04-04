import styled from "styled-components";

export const FooterStyled = styled.footer`
    border-top: .3rem solid black;

    font-size: 2rem;

    padding: 2rem;

    @media (max-width: 1200px){
        display: none;
    }
    @media (min-height: 767px) and (max-width: 1200px) and (orientation: landscape){
        display: initial;
        
        font-size: clamp(1.6rem, 4vw, 3rem);

        width: 100%;
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