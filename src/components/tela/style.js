import styled from "styled-components";
import { colors, media } from '../../style/base';

export const TelaStyled = styled.div`
    background-color: ${colors.tela};

    width: 100%;
    max-width: 88rem;
    height: 44rem;

    padding: 1rem;

    border-radius: .8rem;
    box-shadow: inset -4px -4px 4px #F5F5F5, inset 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 1200px){
        flex: 1;

        box-shadow: initial;
        border-radius: initial;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 1200px) and (orientation: landscape){
        height: 100%;
    }
    /*
    ${media.phone}{
        flex: 1;
        
        box-shadow: initial;
        border-radius: initial;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    ${media.phoneLandscape}{
        height: 100%;
    }
    */
    /*
    @media (min-width: 768px){
        flex: 1;

        box-shadow: initial;
        border-radius: initial;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }*/

    h1{
        font-size: 5.2rem;

        margin-top: 5.5rem;
        margin-left: 11.3rem;

        ${media.phone}{
            margin: 2rem 0 0 0;

            text-align: center;
            font-size: clamp(3rem, 11vw, 5.2rem);
        }
        ${media.phoneLandscape}{
            font-size: clamp(2rem,6vw,5.2rem);
        }
    }
`;

export const InputsStyled = styled.div`
    display: flex;
    gap: .5rem;

    margin-top: 3.1rem;
    margin-left: 8.7rem;

    ${media.phone}{
        justify-content: center;
        margin: 0;
    }

    div{
        border: 2px solid black;

        background-color: ${colors.tela};

        width: 5.4rem;
        height: 6.9rem;

        font-size: 5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        ${media.phone}{
            height: clamp(5rem, 12vh, 6.9rem);
        }
        ${media.phoneLandscape}{
            width: clamp(3.4rem, 5vw, 5.4rem);
        }
    }
`;
export const ValidoStyled = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;

    position: relative;

    ${media.phone}{
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        flex: 1;

        margin-bottom: 0;

        width: 100%;
    }
    ${media.phoneLandscape}{
        align-items: initial;
        justify-content: initial;
    }

    header{
        max-width: 70%;

        ${media.phone}{
            height: clamp(0rem, 9vh, 25rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        ${media.phoneLandscape}{
            height: clamp(0rem,16vh,25rem);
            max-width: 60%;

            justify-content: initial;
            flex: 1;
        }

        p{
            text-transform: uppercase;
            font-size: 3.3rem;

            ${media.phone}{
                text-align: center;
                font-size: 1.8rem;
            }
            ${media.phoneLandscape}{
                text-align: initial;
            }
        }
        h1{
            text-align: center;
            font-size: 3.4rem;

            margin: 1rem 0;

            ${media.phone}{
                margin: 0;
            }
            ${media.phoneLandscape}{
                flex: 1;
            }
        }
    }

    img{
        width: 21.8rem;
        height: 27.2rem;

        object-fit: cover;

        position: absolute;
        top: 0;
        right: 0;

        ${media.phone}{
            width: clamp(14rem, 75vw, 27.2rem);
            height: initial;

            align-items: center;

            position: relative;
            padding: 1rem;
        }
        ${media.phoneLandscape}{
            width: clamp(13rem,30vw,27.2rem);

            position: absolute;
        }
    }
`;

export const BlockTextStyled = styled.div`
    width: 60%;

    ${media.phone}{
        width: 100%;
    }
    ${media.phoneLandscape}{
        width: 60%;

        flex: 2;
    }

    ul{
        margin: 5rem 0 0 0;

        ${media.phone}{
            margin-top: 0;

            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        li{
            display: grid;
            grid-template-columns: 30% 1fr;
            align-items: center;

            margin-bottom: 1.5rem;

            ${media.phone}{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: initial;

                div{
                    display: flex;
                    span{
                        display: block;
                    }
                }
            }
            ${media.phoneLandscape}{
                display: grid;
                grid-template-columns: 43% auto;
                align-items: center;
            }

            p{
                font-size: 2rem;
                ${media.phone}{
                    display: none;
                }
                ${media.phoneLandscape}{
                    display: block;
                }
            }
            span{
                text-transform: uppercase;
                font-size: 3rem;

                ${media.phone}{
                    font-size: clamp(1.5rem, 4.5vh, 4rem);
                    text-align: center;
                }
                ${media.phoneLandscape}{
                    text-align: initial;
                    font-size: clamp(1.5rem, 4.5vw, 4rem);
                }
            }
        }
    }
`;

export const NumStyled = styled.span`
    border: 2px solid black;

    padding: .5rem 1rem;
    &:not(:last-child){
        margin-right: 1rem;
    }
`;

export const NuloStyled = styled.div`
    header{
        max-width: 70%;

        ${media.phone}{
            height: clamp(0rem, 9vh, 25rem);
            width: 100%;
            max-width: initial;

            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        p{
            text-transform: uppercase;
            font-size: 3.3rem;

            ${media.phone}{
                text-align: center;
                font-size: 1.8rem;
            }
        }
        h1{
            text-align: center;
            font-size: 3.4rem;

            margin: 1rem 0;

            ${media.phone}{
                margin: 0;
            }
        }
    }
    ul{
        ${media.phone}{
            margin-top: 2rem;
        }
        li{
            display: flex;
            align-items: center;
            ${media.phone}{
                justify-content: center;
            }
            
            p{
                font-size: 2rem;
                
                margin-right: 2rem;
                
                ${media.phone}{
                    display:none;
                }
            }
            div{
                display: flex;
                font-size: 3rem;
            }
            h3{
                width: 21rem;

                margin-top: 3rem;

                font-size: 2.5rem;
                text-transform: uppercase;
            }
            h2{
                text-align: center;
                font-size: 5.2rem;

                width: 100%;

                margin-top: 2rem;
            }
        }
    }
`;
export const FimStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    width: 100%;

    h1{
        text-transform: uppercase;
        font-size: 24rem;
        
        margin: 0;

        ${media.phone}{
            font-size: clamp(15rem, 40vw, 24rem);
        }
    }
`;