import styled from 'styled-components'

export const ButtonNumber = styled.button`
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
    inset 0 -0.8rem 0.8rem rgba(0, 0, 0, 0.25), 0 0 0 0.2rem rgba(0, 0, 0, 0.75),
    1rem 1.5rem 2rem rgba(0, 0, 0, 0.4);

  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

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
  &:disabled {
    transform: none;
    &::before {
      background: linear-gradient(90deg, #232323, #4a4a4a);
      box-shadow: -1rem -1rem 1rem rgba(255, 255, 255, 0.25),
        1rem 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }

  span {
    position: relative;
  }
`
