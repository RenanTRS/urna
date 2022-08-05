import { render, screen } from '@testing-library/react'
import JuliusImg from 'assets/images/candidates/julius.png'
import { Valid } from '.'

const candidate = {
  name: 'Julius',
  number: '28',
  avatar: JuliusImg,
  politicalParty: 'Desconto'
}

describe('Valid component', () => {
  it('should be able to render a image', () => {
    render(<Valid candidate={candidate} />)

    const img = screen.getByAltText(`Candidato ${candidate.name}`)

    expect(img).toBeInTheDocument()
  })

  it('should be able to render the number of candidate', () => {
    render(<Valid candidate={candidate} />)

    const blockNumber = screen.getByText('Número:')
    const boxOne = screen.getByText(`${candidate.number[0]}`)
    const boxTwo = screen.getByText(`${candidate.number[1]}`)

    expect(blockNumber).toBeInTheDocument()
    expect(boxOne).toBeInTheDocument()
    expect(boxTwo).toBeInTheDocument()
  })

  it("should be able to render the candidate's number", () => {
    render(<Valid candidate={candidate} />)

    const blockName = screen.getByText('Nome:')
    const name = screen.getByText(`${candidate.name}`)

    expect(blockName).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })

  it("should be able to render the candidate's political party", () => {
    render(<Valid candidate={candidate} />)

    const blockPoliticalParty = screen.getByText('Partido:')
    const politicalParty = screen.getByText(`${candidate.politicalParty}`)

    expect(blockPoliticalParty).toBeInTheDocument()
    expect(politicalParty).toBeInTheDocument()
  })
})
