import { render, screen } from '@testing-library/react'
import { Begin } from '.'

describe('Begin component', () => {
  it('should be able to render "President"', () => {
    render(<Begin number={'00'} />)

    const title = screen.getByText('Presidente')

    expect(title).toBeInTheDocument()
  })

  it('should be able to render number "10"', () => {
    render(<Begin number={'10'} />)

    const boxOne = screen.getByText('1')
    const boxTwo = screen.getByText('0')

    expect(boxOne).toBeInTheDocument()
    expect(boxTwo).toBeInTheDocument()
  })
})
