import { colors } from 'style/Global.style'
import styled from 'styled-components'

const Button = styled.button`
  height: 8rem;

  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

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
  &:disabled {
    transform: none;
    opacity: 0.6;
  }

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

    @media (min-width: 768px) and (max-width: 1199.98px) and (orientation: landscape) {
      font-size: clamp(1.4rem, 3vw, 5rem);
    }
  }
`
export const ButtonWhite = styled(Button)`
  background: linear-gradient(180deg, #ffffff, #838080);
`

export const ButtonOrange = styled(Button)`
  background: linear-gradient(180deg, ${colors.btnOrange}, #9d512f);
  &::before {
    background: linear-gradient(90deg, #954522, ${colors.btnOrange});

    border-top: 0.1rem solid #b14f24;
  }
  &:active {
    background: #954522;
    &::before {
      background: #954522;
    }
  }
  &:disabled {
    background: linear-gradient(180deg, ${colors.btnOrange}, #9d512f);
    &::before {
      background: linear-gradient(90deg, #954522, ${colors.btnOrange});
    }
  }
`

export const ButtonGreen = styled(Button)`
  background: linear-gradient(180deg, ${colors.btnGreen}, #3e7636);
  &::before {
    background: linear-gradient(90deg, #3c6e35, ${colors.btnGreen});

    border-top: 0.1rem solid #43813a;
  }
  &:active {
    background: #3e7636;
    &::before {
      background: #3c6e35;
    }
  }
  &:disabled {
    background: #3e7636;
    &::before {
      background: linear-gradient(90deg, #3c6e35, ${colors.btnGreen});
    }
  }
`
