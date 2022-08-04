import { render, screen } from '@testing-library/react'
import { White } from '.'

describe('White component', () => {
  it('should be able to render "Voto Branco"', () => {
    render(<White />)

    const whiteVote = screen.getByText('Voto Branco')

    expect(whiteVote).toBeInTheDocument()
  })
})
