import * as S from './Begin.style'

interface BeginProps {
  number: string
}

export const Begin = ({ number }: BeginProps) => {
  return (
    <>
      <S.CandidateTitle>Presidente</S.CandidateTitle>
      <S.InputArea>
        <div>{number[0]}</div>
        <div>{number[1]}</div>
      </S.InputArea>
    </>
  )
}
