import { Header } from 'components/header'
import { Numbers } from 'components/numbers'
import * as S from './Null'

interface NullProps {
  number: string
}

export const Null = ({ number }: NullProps) => {
  return (
    <S.Null>
      <Header />

      <ul>
        <li>
          <p>Número: </p>
          <div>
            <Numbers>{number[0]}</Numbers>
            <Numbers>{number[1]}</Numbers>
          </div>
        </li>

        <li>
          <h3>Número errado</h3>
        </li>

        <li>
          <h2>Voto nulo</h2>
        </li>
      </ul>
    </S.Null>
  )
}
