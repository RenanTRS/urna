import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { Numbers } from 'components/numbers'
import * as S from './Valid.style'

interface ValidProps {
  candidate: {
    avatar?: string
    name: string
    number: string
    politicalParty: string
  }
}

export const Valid = ({ candidate }: ValidProps) => {
  return (
    <S.Valid>
      <Header />

      <img src={candidate.avatar} alt={`Candidato ${candidate.name}`} />

      <S.Info>
        <ul>
          <li>
            <p>Número:</p>

            <div>
              <Numbers>{candidate.number[0]}</Numbers>
              <Numbers>{candidate.number[1]}</Numbers>
            </div>
          </li>

          <li>
            <p>Nome:</p>
            <span>{candidate.name}</span>
          </li>

          <li>
            <p>Partido:</p>
            <span>{candidate.politicalParty}</span>
          </li>
        </ul>
      </S.Info>
    </S.Valid>
  )
}
