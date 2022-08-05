import styled from 'styled-components'
import { colors } from 'style/Global.style'

export const CandidateTitle = styled.strong`
  display: block;
  font-size: 5.2rem;

  margin-top: 5.5rem;
  margin-left: 11.3rem;

  @media (max-width: 1200px) {
    margin: 2rem 0 0 0;

    text-align: center;
    font-size: clamp(3rem, 11vw, 5.2rem);
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    font-size: clamp(2rem, 6vw, 5.2rem);
  }
`

export const InputArea = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: 3.1rem;
  margin-left: 8.7rem;

  @media (max-width: 1200px) {
    justify-content: center;
    margin: 0;
  }

  div {
    border: 2px solid black;

    background-color: ${colors.tela};

    width: 5.4rem;
    height: 6.9rem;

    font-size: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
      height: clamp(5rem, 12vh, 6.9rem);
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      width: clamp(3.4rem, 5vw, 5.4rem);
    }
  }
`
