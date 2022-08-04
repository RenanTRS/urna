import { render, screen } from '@testing-library/react'
import { End } from '.'

describe('End component', () => {
  it('should be able "Fim"', () => {
    render(<End />)

    const endText = screen.getByText('Fim')

    expect(endText).toBeInTheDocument()
  })
})
