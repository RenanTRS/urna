import { render, screen } from '@testing-library/react'
import { Teclado } from 'components/teclado'

describe('Teclado component', () => {
  it('Tag', () => {
    render(<Teclado />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Justiça Eleitoral')).toBeInTheDocument()
  })
  it('Keyboard', () => {
    render(<Teclado />)
    expect(screen.getByTestId('keyboard')).toBeInTheDocument()
  })
  describe('Number buttons', () => {
    it('10 number buttons in keyboard', () => {
      render(<Teclado />)
      expect(screen.getAllByTestId('num-btn').length).toBe(10)
    })
  })
  describe('Action buttons', () => {
    it('3 action buttons in keyboard', () => {
      render(<Teclado />)
      expect(screen.getAllByTestId('action-btn').length).toBe(3)
    })
  })
})
