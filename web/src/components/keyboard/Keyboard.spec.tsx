import { render, screen, fireEvent } from '@testing-library/react'
import { Keyboard } from '.'

const handlerNumberSpy = jest.fn()
const handlerStatusSpy = jest.fn()
const mockAudio = jest.fn()

const MockKeyboard = () => {
  return (
    <Keyboard
      handlerNumber={handlerNumberSpy}
      handlerStatus={handlerStatusSpy}
    />
  )
}

window.HTMLMediaElement.prototype.play = () => mockAudio() //Avoid audio error

describe('Keyboard component', () => {
  it('should be able to render a tag', () => {
    render(<MockKeyboard />)

    const img = screen.getByAltText('Logo')
    const textTag = screen.getByText('Justiça Eleitoral')

    expect(img).toBeInTheDocument()
    expect(textTag).toBeInTheDocument()
  })

  describe('Buttons', () => {
    describe('Number buttons', () => {
      it('should be able to render 10 number buttons', () => {
        render(<MockKeyboard />)

        const btnNumbers = screen.getAllByTestId('btn-number')

        expect(btnNumbers.length).toEqual(10)
      })

      it('should be able call handlerNumber function', () => {
        render(<MockKeyboard />)

        const btnNumbers = screen.getAllByTestId('btn-number')
        fireEvent.click(btnNumbers[1])

        expect(handlerNumberSpy).toHaveBeenCalled()
      })

      it('should be able disabled after 2 clicks', () => {
        render(<MockKeyboard />)

        const btnNumbers = screen.getAllByTestId('btn-number')

        expect(btnNumbers[0]).not.toBeDisabled()

        fireEvent.click(btnNumbers[1])
        fireEvent.click(btnNumbers[2])

        expect(btnNumbers[0]).toBeDisabled()
      })
    })

    describe('Action buttons', () => {
      it('should be able to render 3 action buttons', () => {
        render(<MockKeyboard />)

        const btnActions = screen.getAllByTestId('btn-action')

        expect(btnActions.length).toEqual(3)
      })

      it('should be able call a function when click the white button', () => {
        render(<MockKeyboard />)

        const btnActions = screen.getAllByTestId('btn-action')

        fireEvent.click(btnActions[0])

        expect(handlerStatusSpy).toHaveBeenCalled()
      })

      it('should be able activate orange button and call a function', () => {
        render(<MockKeyboard />)

        const btnNumbers = screen.getAllByTestId('btn-number')
        const btnActions = screen.getAllByTestId('btn-action')

        expect(btnActions[1]).toBeDisabled()

        fireEvent.click(btnNumbers[5])

        expect(btnActions[1]).not.toBeDisabled()

        fireEvent.click(btnActions[1])
        expect(handlerStatusSpy).toHaveBeenCalled()
      })

      it('should be able activate green button and call a function', () => {
        render(<MockKeyboard />)

        const btnNumbers = screen.getAllByTestId('btn-number')
        const btnActions = screen.getAllByTestId('btn-action')

        expect(btnActions[2]).toBeDisabled()

        fireEvent.click(btnNumbers[5])
        expect(btnActions[2]).toBeDisabled()

        fireEvent.click(btnNumbers[7])
        expect(btnActions[2]).not.toBeDisabled()

        fireEvent.click(btnActions[2])
        expect(handlerStatusSpy).toHaveBeenCalled()
      })
    })
  })
})
