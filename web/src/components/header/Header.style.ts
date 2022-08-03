import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70%;

  @media (max-width: 1200px) {
    height: clamp(0rem, 9vh, 25rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    height: clamp(0rem, 16vh, 25rem);
    max-width: 60%;

    justify-content: initial;
    flex: 1;
  }

  p {
    text-transform: uppercase;
    font-size: 3.3rem;

    @media (max-width: 1200px) {
      text-align: center;
      font-size: clamp(1.8rem, 4vw, 3.3rem);
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      text-align: initial;
    }
  }
  strong {
    display: block;
    text-align: center;
    font-size: 3.4rem;

    margin: 1rem 0;

    @media (max-width: 1200px) {
      margin: 0;
      font-size: clamp(3.4rem, 6vw, 6rem);
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      flex: 1;
    }
  }
`
