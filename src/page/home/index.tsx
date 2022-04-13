import { Tela } from 'components/tela'
import { Teclado } from 'components/teclado'

import { MainStyled } from './style'
import { DataContextProvider } from 'context/DataContext'

export function Home() {
  return (
    <MainStyled>
      <DataContextProvider>
        <Tela />
        <Teclado />
      </DataContextProvider>
    </MainStyled>
  )
}
