import styled from 'styled-components'

export const Valid = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  position: relative;

  @media (max-width: 1200px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex: 1;

    margin-bottom: 0;

    width: 100%;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    align-items: initial;
    justify-content: initial;
  }

  img {
    width: 21.8rem;
    height: 27.2rem;

    object-fit: cover;

    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 1200px) {
      width: clamp(14rem, 75vw, 27.2rem);
      height: initial;

      align-items: center;

      position: relative;
      padding: 1rem;
    }
    @media (max-width: 1200px) and (orientation: landscape) {
      width: clamp(13rem, 32vw, 32.2rem);

      position: absolute;
    }
  }
`

export const Info = styled.div`
  width: 60%;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: 60%;

    flex: 2;
  }

  ul {
    margin: 5rem 0 0 0;

    @media (max-width: 1200px) {
      margin-top: 0;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    li {
      display: grid;
      grid-template-columns: 30% 1fr;
      align-items: center;

      margin-bottom: 1.5rem;

      @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: initial;

        div {
          display: flex;
          span {
            display: block;
          }
        }
      }
      @media (max-width: 1200px) and (orientation: landscape) {
        display: grid;
        grid-template-columns: 43% auto;
        align-items: center;
      }

      p {
        font-size: 2rem;

        @media (max-width: 1200px) {
          display: none;
          font-size: clamp(2rem, 3.4vw, 5rem);
        }
        @media (max-width: 1200px) and (orientation: landscape) {
          display: block;
        }
      }
      span {
        text-transform: uppercase;
        font-size: 3rem;

        @media (max-width: 1200px) {
          font-size: clamp(1.5rem, 4.5vh, 4rem);
          text-align: center;
        }
        @media (max-width: 1200px) and (orientation: landscape) {
          text-align: initial;
          font-size: clamp(1.5rem, 4.5vw, 4rem);
        }
      }
    }
  }
`
