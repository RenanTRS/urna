import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('should be able to render the header', () => {
    render(<Header />)

    const yourVote = screen.getByText('Seu voto para')
    const president = screen.getByText('Presidente')

    expect(yourVote).toBeInTheDocument()
    expect(president).toBeInTheDocument()
  })
})
