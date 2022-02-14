import styled from "styled-components";
import { media, colors } from "../../style/base";

export const ConsoleStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 41.8rem;

    ${media.phone}{
        max-width: none;
    }
    ${media.phoneLandscape}{
        height: 100%;
        width: initial;
    }
`;

export const EtiquetaStyled = styled.div`
    display: flex;
    align-items: center;

    padding: 1rem;

    background-color: ${colors.etiqueta};

    border-radius: .5rem;
    box-shadow: inset -4px -4px 4px #F5F5F5, inset 4px 4px 0px rgba(0, 0, 0, 0.25);

    span{
        font-size: 4.5rem;
        text-align: center;

        width: 70%;
    }

    /*
    ${media.phone}{
        display: none;
    }
    */
    @media (max-width: 1200px){
        display: none;
    }
`;

export const TecladoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: ${colors.tecladoBase};

    border-radius: .5rem;

    padding: 4.3rem 1rem 2.8rem;

    ${media.phone}{
        padding: 1rem;

        border-radius: initial;
    }
    ${media.phoneLandscape}{
        flex-direction: row;
        
        height: 100%;
    }
`;

export const BtnNumbersStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem 2.8rem;

    width: 31.2rem;

    ${media.phone}{
        gap: clamp(1rem, 2vh, 2.5rem) clamp(1rem, 3vw, 2.8rem);
        justify-items: center;

        width: clamp(23rem, 76vw, 31.2rem);

        display: ${props => props.display || 'grid'};
    }
    ${media.phoneLandscape}{
        width: clamp(20rem,41vw,31.2rem);

        gap: clamp(1rem,2vh,2.5rem) clamp(1rem,1vw,2.8rem);
    }

    button{
        width: 8.4rem;
        height: 5rem;

        color: white;

        font-size: 3.5rem;
        text-align: left;

        padding-left: 1rem;

        background: linear-gradient(180deg, #282828, #202020);

        position: relative;

        border: none;
        border-radius: .6rem;
        box-shadow: inset -.8rem 0 .8rem rgba(0, 0, 0, 0.15), inset 0 -.8rem .8rem rgba(0, 0, 0, 0.25), 0 0 0 .2rem rgba(0, 0, 0, 0.75), 1rem 1.5rem 2rem rgba(0, 0, 0, 0.4);

        cursor: pointer;
        
        overflow: hidden;
        
        ${media.phone}{
            width: clamp(2.3rem, 24vw, 8.4rem);
        }
        ${media.phoneLandscape}{
            width: clamp(2.3rem,10vw,8.4rem);
        }

        &:last-child{
            grid-column: 2/2;
        }

        &::before{
            content: "";

            position: absolute;
            top: .3rem;
            left: .4rem;
            bottom: .5rem;
            right: .7rem;

            background: linear-gradient(90deg, #232323, #4a4a4a);

            border-radius: .6rem;
            border-left: .1rem solid #0004;
            border-bottom: .1rem solid #0004;
            border-top: .1rem solid #0009;
            box-shadow: -1rem -1rem 1rem rgba(255, 255, 255, 0.25), 1rem .5rem 1rem rgba(0, 0, 0, 0.15);
        }
        &:active{
            transform: translateY(.5rem);
            &::before{
                content: "";
                background: #232323;
                box-shadow: none;
            }
        }

        span{
            position: relative;
        }
    }
`;

export const BtnActionStyled = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    ${media.phone}{
        max-width: 40rem;
    }
    ${media.phoneLandscape}{
        flex-direction: column;

        max-width: initial;
        height: 100%;
        width: clamp(9rem, 19vw, 13rem);
    }
`;

const Button = styled.button`
    //Base padrão para os botões
    height: 8rem;

    cursor: pointer;

    font-size: 2.1rem;
    text-transform: uppercase;

    border: none;
    border-radius: .5rem;

    padding: .5rem 1.5rem 0 1rem;

    display: flex;
    align-items: flex-start;

    box-shadow: inset -.8rem 0 .8rem rgba(0, 0, 0, 0.15), inset 0 -.8rem .8rem rgba(0, 0, 0, 0.25), 0 0 0 .2rem rgba(0, 0, 0, 0.75), 1rem 1.5rem 2rem rgba(0, 0, 0, 0.4);

    position: relative;
    
    ${media.phone}{
        font-size: clamp(1rem, 5vw, 2.1rem);

        height: clamp(5rem, 11vh, 8rem);
    }
    ${media.phoneLandscape}{
        justify-content: center;

        height: clamp(5rem,26vh,8rem);
    }
    span{
        position: relative;

        color: black;

        ${media.phoneLandscape}{
            font-size: clamp(1.4rem, 3vw, 5rem);
        }
    }
`;

export const ButtonWhite = styled(Button)`
    background: linear-gradient(180deg, #ffffff, #838080);
    &::before{
        content: "";
        
        position: absolute;
        top: .4rem;
        left: .5rem;
        bottom: .8rem;
        right: 1rem;

        background: linear-gradient(90deg, #939393, ${colors.btnWhite});

        border-radius: .5rem;
        border-left: .1rem solid #0004;
        border-bottom: .1rem solid #0004;
        border-top: .1rem solid #a5a5a5a5;
    }
    &:active{
        background: #838080;
        &::before{
            background: #939393;
        }
        transform: translateY(.5rem);
    }
`;
export const ButtonOrange = styled(Button)`
    background: linear-gradient(180deg, ${colors.btnOrange}, #9d512f);
    &::before{
        content: "";
        
        position: absolute;
        top: .4rem;
        left: .5rem;
        bottom: .8rem;
        right: 1rem;
        
        background: linear-gradient(90deg, #954522, ${colors.btnOrange});

        border-radius: .5rem;
        border-left: .1rem solid #0004;
        border-bottom: .1rem solid #0004;
        border-top: .1rem solid #b14f24;
    }
    &:active{
        background: #838080;
        &::before{
            background: #954522;
        }
        transform: translateY(.5rem);
    }
`;
export const ButtonGreen = styled(Button)`
    background: linear-gradient(180deg, ${colors.btnGreen}, #3e7636);
    &::before{
        content: "";

        position: absolute;
        top: .4rem;
        left: .5rem;
        bottom: .8rem;
        right: 1rem;

        background: linear-gradient(90deg, #3c6e35, ${colors.btnGreen});

        border-radius: .5rem;
        border-left: .1rem solid #0004;
        border-bottom: .1rem solid #0004;
        border-top: .1rem solid #43813a;

    }
    &:active{
        background: #3e7636;
        &::before{
            background: #3c6e35;
        }
        transform: translateY(.5rem);
    }
`;