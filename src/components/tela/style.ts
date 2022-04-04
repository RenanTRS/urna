import styled from "styled-components";
import { colors } from '../../style/base';

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

        max-width: initial;

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

    h1{
        font-size: 5.2rem;
        
        margin-top: 5.5rem;
        margin-left: 11.3rem;

        @media (max-width: 1200px){
            margin: 2rem 0 0 0;

            text-align: center;
            font-size: clamp(3rem, 11vw, 5.2rem);
        }
        @media (max-width: 1200px) and (orientation: landscape){
            font-size: clamp(2rem, 6vw, 5.2rem);
        }
    }
    h2{
        font-size: 5.2rem;
        text-align: center;

        margin-top: clamp(5.5rem, 15vh, 13rem);

        @media (max-width: 1200px){
            margin: 2rem 0 0 0;

            text-align: center;
            font-size: clamp(3rem, 11vw, 5.2rem);
        }
        @media (max-width: 1200px) and (orientation: landscape){
            font-size: clamp(2rem, 6vw, 5.2rem);
        }
    }
`;

export const InputsStyled = styled.div`
    display: flex;
    gap: .5rem;

    margin-top: 3.1rem;
    margin-left: 8.7rem;

    @media (max-width: 1200px){
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

        @media (max-width: 1200px){
            height: clamp(5rem, 12vh, 6.9rem);
        }
        @media (max-width: 1200px) and (orientation: landscape){
            width: clamp(3.4rem, 5vw, 5.4rem);
        }
    }
`;
export const ValidoStyled = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;

    position: relative;

    @media (max-width: 1200px){
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        flex: 1;

        margin-bottom: 0;

        width: 100%;
    }
    @media (max-width: 1200px) and (orientation: landscape){
        align-items: initial;
        justify-content: initial;
    }

    header{
        max-width: 70%;

        @media (max-width: 1200px){
            height: clamp(0rem, 9vh, 25rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        @media (max-width: 1200px) and (orientation: landscape){
            height: clamp(0rem,16vh,25rem);
            max-width: 60%;

            justify-content: initial;
            flex: 1;
        }

        p{
            text-transform: uppercase;
            font-size: 3.3rem;

            @media (max-width: 1200px){
                text-align: center;
                font-size: clamp(1.8rem, 4vw, 3.3rem);
            }
            @media (max-width: 1200px) and (orientation: landscape){
                text-align: initial;
            }
        }
        h1{
            text-align: center;
            font-size: 3.4rem;

            margin: 1rem 0;

            @media (max-width: 1200px){
                margin: 0;
                font-size: clamp(3.4rem, 6vw, 6rem);
            }
            @media (max-width: 1200px) and (orientation: landscape) {
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

        @media (max-width: 1200px){
            width: clamp(14rem, 75vw, 27.2rem);
            height: initial;

            align-items: center;

            position: relative;
            padding: 1rem;
        }
        @media (max-width: 1200px) and (orientation: landscape){
            width: clamp(13rem,32vw,32.2rem);

            position: absolute;
        }
    }
`;

export const BlockTextStyled = styled.div`
    width: 60%;

    @media (max-width: 1200px){
        width: 100%;
    }
    @media (max-width: 1200px) and (orientation: landscape){
        width: 60%;

        flex: 2;
    }

    ul{
        margin: 5rem 0 0 0;

        @media (max-width: 1200px){
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

            @media (max-width: 1200px){
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
            @media (max-width: 1200px) and (orientation: landscape){
                display: grid;
                grid-template-columns: 43% auto;
                align-items: center;
            }

            p{
                font-size: 2rem;
                
                @media (max-width: 1200px){
                    display: none;
                    font-size: clamp(2rem, 3.4vw, 5rem);
                }
                @media (max-width: 1200px) and (orientation: landscape){
                    display: block;
                }
            }
            span{
                text-transform: uppercase;
                font-size: 3rem;

                @media (max-width: 1200px){
                    font-size: clamp(1.5rem, 4.5vh, 4rem);
                    text-align: center;
                }
                @media (max-width: 1200px) and (orientation: landscape){
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

        @media (max-width: 1200px){
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

            @media (max-width: 1200px){
                text-align: center;
                font-size: 1.8rem;
            }
        }
        h1{
            text-align: center;
            font-size: 3.4rem;

            margin: 1rem 0;

            @media (max-width: 1200px){
                margin: 0;
            }
        }
    }
    ul{
        @media (max-width: 1200px){
            margin-top: 2rem;
        }
        
        li{
            display: flex;
            align-items: center;
            @media (max-width: 1200px){
                justify-content: center;
            }
            
            p{
                font-size: 2rem;
                
                margin-right: 2rem;
                
                @media (max-width: 1200px){
                    display: none;
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

        @media (max-width: 1200px){
            font-size: clamp(15rem, 40vw, 24rem);
        }
    }
`;