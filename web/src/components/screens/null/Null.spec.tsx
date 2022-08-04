import { render, screen } from '@testing-library/react'
import { Null } from '.'

describe('Null component', () => {
  const number = '54'
  it('should be able to render a null number', () => {
    render(<Null number={number} />)

    const blockNumber = screen.getByText('Número:')
    const boxOne = screen.getByText(number[0])
    const boxTwo = screen.getByText(number[1])

    expect(blockNumber).toBeInTheDocument()
    expect(boxOne).toBeInTheDocument()
    expect(boxTwo).toBeInTheDocument()
  })

  it('should be able to render "Número errado"', () => {
    render(<Null number={number} />)

    const wrongNumber = screen.getByText('Número errado')

    expect(wrongNumber).toBeInTheDocument()
  })

  it('should be able to render "Voto nulo"', () => {
    render(<Null number={number} />)

    const nullVote = screen.getByText('Voto nulo')

    expect(nullVote).toBeInTheDocument()
  })
})
