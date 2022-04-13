import { DataContext } from 'context/DataContext'
import { render, screen } from '@testing-library/react'
import { Tela } from 'components/tela'

describe('Tela component', () => {
  const value = {
    //Data to tests
    numOne: '1',
    numTwo: '0',
    status: 0,
    candidate: {
      name: 'Doguinho Caramelo',
      number: '10',
      avatar: '/assets/dog.png',
      partido: 'RUA'
    }
  }

  type ValuePropsTest = typeof value

  const Provider = (value: ValuePropsTest) => {
    return render(
      <DataContext.Provider value={value}>
        <Tela />
      </DataContext.Provider>
    )
  }
  it('Presidente in screen', () => {
    Provider(value) // render to tela with context
    expect(screen.getByText('Presidente')).toBeInTheDocument()
  })
  it('Name candidate in screen', () => {
    value.status = 1 //True candidate
    Provider(value)
    expect(screen.getByText('Doguinho Caramelo')).toBeInTheDocument()
  })
  it('Null vote', () => {
    value.numOne = '5'
    value.numTwo = '5'
    value.status = 2 //False candidate or null vote
    Provider(value)
  })
  it('white vote', () => {
    value.status = 3 //White vote
    Provider(value)
    expect(screen.getByText('Voto Branco')).toBeInTheDocument()
  })
})
