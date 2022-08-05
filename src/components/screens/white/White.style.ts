import styled from 'styled-components'

export const WhiteComponent = styled.h2`
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
`
