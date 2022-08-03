import styled from 'styled-components'

export const Null = styled.div`
  header {
    max-width: 70%;

    @media (max-width: 1200px) {
      height: clamp(0rem, 9vh, 25rem);
      width: 100%;
      max-width: initial;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      text-transform: uppercase;
      font-size: 3.3rem;

      @media (max-width: 1200px) {
        text-align: center;
        font-size: 1.8rem;
      }
    }
    h1 {
      text-align: center;
      font-size: 3.4rem;

      margin: 1rem 0;

      @media (max-width: 1200px) {
        margin: 0;
      }
    }
  }
  ul {
    @media (max-width: 1200px) {
      margin-top: 2rem;
    }

    li {
      display: flex;
      align-items: center;
      @media (max-width: 1200px) {
        justify-content: center;
      }

      p {
        font-size: 2rem;

        margin-right: 2rem;

        @media (max-width: 1200px) {
          display: none;
        }
      }
      div {
        display: flex;
        font-size: 3rem;
      }
      h3 {
        width: 21rem;

        margin-top: 3rem;

        font-size: 2.5rem;
        text-transform: uppercase;
      }
      h2 {
        text-align: center;
        font-size: 5.2rem;

        width: 100%;

        margin-top: 2rem;
      }
    }
  }
`
