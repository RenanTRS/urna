import { Header } from 'components/header'
import { Numbers } from 'components/numbers'
import * as S from './Null'
export const Null = () => {
  const number = '16'
  return (
    <S.Null>
      {/* <header>
        <p>Seu voto para</p>
        <h1>Presidente</h1>
      </header> */}
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
