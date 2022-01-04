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

    ${media.phone}{
        flex: 1;

        box-shadow: initial;
        border-radius: initial;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 5.2rem;

        margin-top: 5.5rem;
        margin-left: 11.3rem;

        ${media.phone}{
            margin: 2rem 0 0 0;

            text-align: center;
            font-size: clamp(3rem, 11vw, 5.2rem);
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

    input{
        border: 2px solid black;

        background-color: ${colors.tela};

        width: 5.4rem;
        height: 6.9rem;

        font-size: 5rem;

        padding-left: 1rem;

        ${media.phone}{
            height: clamp(5rem, 12vh, 6.9rem);
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

    header{
        max-width: 60%;

        ${media.phone}{
            height: clamp(0rem, 9vh, 25rem);
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
    }
`;

export const BlockTextStyled = styled.div`
    width: 60%;

    ${media.phone}{
        width: 100%;
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

            p{
                font-size: 2rem;
                ${media.phone}{
                    display: none;
                }
            }
            span{
                text-transform: uppercase;
                font-size: 3rem;

                ${media.phone}{
                    font-size: clamp(1.5rem, 4.5vh, 4rem);
                    text-align: center;
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