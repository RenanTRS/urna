import styled from 'styled-components'
import { media, colors } from '../../style/base'

export const ConsoleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 41.8rem;

  @media (max-width: 1200px) {
    max-width: none;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    height: 100%;
    width: initial;
  }
`

export const EtiquetaStyled = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  background-color: ${colors.etiqueta};

  border-radius: 0.5rem;
  box-shadow: inset -4px -4px 4px #f5f5f5, inset 4px 4px 0px rgba(0, 0, 0, 0.25);

  span {
    font-size: 4.5rem;
    text-align: center;

    width: 70%;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

export const TecladoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${colors.tecladoBase};

  border-radius: 0.5rem;

  padding: 4.3rem 1rem 2.8rem;

  @media (max-width: 1200px) {
    padding: 1rem;

    border-radius: initial;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    flex-direction: row;

    height: 100%;
  }
`
type BtnNumbersStyledType = {
  //Any
  showKeyB?: boolean
}
export const BtnNumbersStyled = styled.div<BtnNumbersStyledType>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem 2.8rem;

  width: 31.2rem;

  @media (max-width: 1200px) {
    gap: clamp(1rem, 2vh, 2.5rem) clamp(1rem, 3vw, 2.8rem);
    justify-items: center;

    width: clamp(23rem, 76vw, 38.2rem);

    display: ${(props) => (props.showKeyB ? 'grid' : 'none')};
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: clamp(20rem, 41vw, 46rem);

    gap: clamp(1rem, 9vh, 9rem) clamp(1rem, 1vw, 2.8rem);
  }

  button {
    width: 8.4rem;
    height: 5rem;

    color: white;

    font-size: 3.5rem;
    text-align: left;

    padding-left: 1rem;

    background: linear-gradient(180deg, #282828, #202020);

    position: relative;

    border: none;
    border-radius: 0.6rem;
    box-shadow: inset -0.8rem 0 0.8rem rgba(0, 0, 0, 0.15),
      inset 0 -0.8rem 0.8rem rgba(0, 0, 0, 0.25),
      0 0 0 0.2rem rgba(0, 0, 0, 0.75), 1rem 1.5rem 2rem rgba(0, 0, 0, 0.4);

    cursor: pointer;

    overflow: hidden;

    @media (max-width: 1200px) {
      width: clamp(2.3rem, 24vw, 11rem);
      height: clamp(5rem, 6vh, 7rem);
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      width: clamp(2.3rem, 10vw, 10.5rem);
      height: clamp(5rem, 11vh, 7rem);
    }

    &:last-child {
      grid-column: 2/2;
    }

    &::before {
      content: '';

      position: absolute;
      top: 0.3rem;
      left: 0.4rem;
      bottom: 0.5rem;
      right: 0.7rem;

      background: linear-gradient(90deg, #232323, #4a4a4a);

      border-radius: 0.6rem;
      border-left: 0.1rem solid #0004;
      border-bottom: 0.1rem solid #0004;
      border-top: 0.1rem solid #0009;
      box-shadow: -1rem -1rem 1rem rgba(255, 255, 255, 0.25),
        1rem 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0.5rem);
      &::before {
        content: '';
        background: #232323;
        box-shadow: none;
      }
    }

    span {
      position: relative;
    }
  }
`

export const BtnActionStyled = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 1200px) {
    max-width: 55rem;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    flex-direction: column;

    max-width: initial;
    width: clamp(9rem, 19vw, 18rem);

    height: 100%;
    max-height: 66rem;
  }
`

const Button = styled.button`
  //Base padrão para os botões
  height: 8rem;

  cursor: pointer;

  font-size: 2.1rem;
  text-transform: uppercase;

  border: none;
  border-radius: 0.5rem;

  padding: 0.5rem 1.5rem 0 1rem;

  display: flex;
  align-items: flex-start;

  box-shadow: inset -0.8rem 0 0.8rem rgba(0, 0, 0, 0.15),
    inset 0 -0.8rem 0.8rem rgba(0, 0, 0, 0.25), 0 0 0 0.2rem rgba(0, 0, 0, 0.75),
    1rem 1.5rem 2rem rgba(0, 0, 0, 0.4);

  position: relative;

  @media (max-width: 1200px) {
    font-size: clamp(1rem, 5vw, 3rem);

    height: clamp(5rem, 11vh, 11rem);
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    justify-content: center;

    height: clamp(5rem, 26vh, 12rem);
  }

  span {
    position: relative;

    color: black;

    ${media.phoneLandscape} {
      font-size: clamp(1.4rem, 3vw, 5rem);
    }
  }
`

export const ButtonWhite = styled(Button)`
  background: linear-gradient(180deg, #ffffff, #838080);
  &::before {
    content: '';

    position: absolute;
    top: 0.4rem;
    left: 0.5rem;
    bottom: 0.8rem;
    right: 1rem;

    background: linear-gradient(90deg, #939393, ${colors.btnWhite});

    border-radius: 0.5rem;
    border-left: 0.1rem solid #0004;
    border-bottom: 0.1rem solid #0004;
    border-top: 0.1rem solid #a5a5a5a5;
  }
  &:active {
    background: #838080;
    &::before {
      background: #939393;
    }
    transform: translateY(0.5rem);
  }
`
export const ButtonOrange = styled(Button)`
  background: linear-gradient(180deg, ${colors.btnOrange}, #9d512f);
  &::before {
    content: '';

    position: absolute;
    top: 0.4rem;
    left: 0.5rem;
    bottom: 0.8rem;
    right: 1rem;

    background: linear-gradient(90deg, #954522, ${colors.btnOrange});

    border-radius: 0.5rem;
    border-left: 0.1rem solid #0004;
    border-bottom: 0.1rem solid #0004;
    border-top: 0.1rem solid #b14f24;
  }
  &:active {
    background: #838080;
    &::before {
      background: #954522;
    }
    transform: translateY(0.5rem);
  }
`
export const ButtonGreen = styled(Button)`
  background: linear-gradient(180deg, ${colors.btnGreen}, #3e7636);
  &::before {
    content: '';

    position: absolute;
    top: 0.4rem;
    left: 0.5rem;
    bottom: 0.8rem;
    right: 1rem;

    background: linear-gradient(90deg, #3c6e35, ${colors.btnGreen});

    border-radius: 0.5rem;
    border-left: 0.1rem solid #0004;
    border-bottom: 0.1rem solid #0004;
    border-top: 0.1rem solid #43813a;
  }
  &:active {
    background: #3e7636;
    &::before {
      background: #3c6e35;
    }
    transform: translateY(0.5rem);
  }
`
