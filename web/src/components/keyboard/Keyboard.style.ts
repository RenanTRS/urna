import styled from 'styled-components'
import { colors } from 'style/Global.style'

export const keyboardContainer = styled.div`
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

export const Tag = styled.div`
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

export const KeysContainer = styled.div`
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

interface NumbersProps {
  showKeys?: boolean
}
export const Numbers = styled.div<NumbersProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem 2.8rem;

  width: 31.2rem;

  @media (max-width: 1200px) {
    gap: clamp(1rem, 2vh, 2.5rem) clamp(1rem, 3vw, 2.8rem);
    justify-items: center;

    width: clamp(23rem, 76vw, 38.2rem);

    display: ${(props) => (props.showKeys ? 'grid' : 'none')};
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    width: clamp(20rem, 41vw, 46rem);

    gap: clamp(1rem, 9vh, 9rem) clamp(1rem, 1vw, 2.8rem);
  }
`

export const Actions = styled.div`
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
