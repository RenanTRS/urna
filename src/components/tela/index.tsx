import { useContext } from 'react'
import { DataContext } from 'context/DataContext'

import { Footer } from '../footer'

//Style
import {
  TelaStyled,
  InputsStyled,
  ValidoStyled,
  BlockTextStyled,
  NumStyled,
  NuloStyled,
  FimStyled
} from './style'

export const Tela = () => {
  const { numOne, numTwo, status, candidate } = useContext(DataContext)

  return (
    <>
      {status === 0 && (
        <TelaStyled>
          <h1>Presidente</h1>
          <InputsStyled>
            <div>{numOne}</div>
            <div>{numTwo}</div>
          </InputsStyled>
        </TelaStyled>
      )}
      {status === 1 && (
        <TelaStyled>
          <ValidoStyled>
            <header>
              <p>Seu voto para</p>
              <h1>Presidente</h1>
            </header>

            <img src={candidate?.avatar} alt="Candidato" />

            <BlockTextStyled>
              <ul>
                <li>
                  <p>Número:</p>
                  <div>
                    <NumStyled>{numOne}</NumStyled>
                    <NumStyled>{numTwo}</NumStyled>
                  </div>
                </li>

                <li>
                  <p>Nome:</p>
                  <span>{candidate?.name}</span>
                </li>

                <li>
                  <p>Partido:</p>
                  <span>{candidate?.partido}</span>
                </li>
              </ul>
            </BlockTextStyled>
          </ValidoStyled>
          <Footer />
        </TelaStyled>
      )}
      {/*Voto nulo*/}
      {status === 2 && (
        <TelaStyled>
          <NuloStyled>
            <header>
              <p>Seu voto para</p>
              <h1>Presidente</h1>
            </header>
            <ul>
              <li>
                <p>Número: </p>
                <div>
                  <NumStyled>{numOne}</NumStyled>
                  <NumStyled>{numTwo}</NumStyled>
                </div>
              </li>
              <li>
                <h3>Número errado</h3>
              </li>
              <li>
                <h2>Voto nulo</h2>
              </li>
            </ul>
          </NuloStyled>
          <Footer />
        </TelaStyled>
      )}
      {/*Voto branco*/}
      {status === 3 && (
        <TelaStyled>
          <div className="branco">
            <h2>Voto Branco</h2>
          </div>
          <Footer />
        </TelaStyled>
      )}
      {status === 4 && (
        <TelaStyled>
          <FimStyled>
            <h1>fim</h1>
          </FimStyled>
        </TelaStyled>
      )}
    </>
  )
}
