import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Footer component', () => {
  it('should be able to render the footer component', () => {
    render(<Footer />)

    const instruction = screen.getByText('Aperta a tecla')
    const greenInstruction = screen.getByText('VERDE para CONFIRMAR')
    const orangeInstruction = screen.getByText('LARANJA para CORRIGIR')

    expect(instruction).toBeInTheDocument()
    expect(greenInstruction).toBeInTheDocument()
    expect(orangeInstruction).toBeInTheDocument()
  })
})
