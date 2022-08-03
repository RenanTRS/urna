import { colors } from 'style/Global.style'
import styled from 'styled-components'

export const ViewContainer = styled.div`
  background-color: ${colors.tela};

  width: 100%;
  max-width: 88rem;
  height: 44rem;

  padding: 1rem;

  border-radius: 0.8rem;
  box-shadow: inset -4px -4px 4px #f5f5f5, inset 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    flex: 1;

    max-width: initial;

    box-shadow: initial;
    border-radius: initial;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    height: 100%;
  }

  /* strong {
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
  } */

  /* h2 {
    font-size: 5.2rem;
    text-align: center;

    margin-top: clamp(5.5rem, 15vh, 13rem);

    @media (max-width: 1200px) {
      margin: 2rem 0 0 0;

      text-align: center;
      font-size: clamp(3rem, 11vw, 5.2rem);
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      font-size: clamp(2rem, 6vw, 5.2rem);
    }
  } */
`
