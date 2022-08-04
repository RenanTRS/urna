import styled from 'styled-components'

export const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 24rem;

    margin: 0;

    @media (max-width: 1200px) {
      font-size: clamp(15rem, 40vw, 24rem);
    }
  }
`
