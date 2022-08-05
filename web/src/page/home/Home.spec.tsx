import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '.'

const mockAudio = jest.fn()
window.HTMLMediaElement.prototype.play = () => mockAudio() //Avoid audio error

const typeVote = (numOne: number, numTwo: number) => {
  const btnNumbers = screen.getAllByTestId('btn-number')

  fireEvent.click(btnNumbers[numOne])
  fireEvent.click(btnNumbers[numTwo])
}

const clickVote = (vote: number) => {
  const btnActions = screen.getAllByTestId('btn-action')

  fireEvent.click(btnActions[vote])
}

describe('Home component', () => {
  it('should be able to render the begin screen', () => {
    render(<Home />)

    const title = screen.getByText('Presidente')

    expect(title).toBeInTheDocument()
  })

  it('should be able to render the valid screen', () => {
    render(<Home />)

    typeVote(6, 1)

    const candidateName = screen.getByText('Seu Madruga')

    expect(candidateName).toBeInTheDocument()
  })

  it('should be able to render the null screen', () => {
    render(<Home />)

    typeVote(1, 2)

    const nullMessage = screen.getByText('Voto nulo')

    expect(nullMessage).toBeInTheDocument()
  })

  it('should be able to render the white screen', () => {
    render(<Home />)

    clickVote(0)

    const whiteMessage = screen.getByText('Voto Branco')

    expect(whiteMessage).toBeInTheDocument()
  })

  it('should be able to back to the begin screen', () => {
    render(<Home />)

    typeVote(1, 2)
    clickVote(1)

    const beginMessage = screen.getByText('Presidente')

    expect(beginMessage).toBeInTheDocument()
  })

  it('should be able to render the end screen', () => {
    render(<Home />)

    typeVote(1, 7)
    clickVote(2)

    const endMessage = screen.getByText('Fim')

    expect(endMessage).toBeInTheDocument()
  })
})
