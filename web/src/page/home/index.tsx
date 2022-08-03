import * as S from './Home.style'
import { statusType } from 'types/status'

import { Keyboard } from 'components/keyboard'
import { View } from 'components/view'
import { useState } from 'react'
import { CandidateType } from 'types/candidate'

export const Home = () => {
  const [number, setNumber] = useState<string>('')
  const [status, setStatus] = useState<statusType>('Begin')
  const [candidate, setCandidate] = useState<CandidateType>()

  const handlerNumber = (value: string) => {
    setNumber(value)
  }

  const handlerStatus = (value: statusType, candidate?: CandidateType) => {
    setStatus(value)
    setCandidate(candidate)
  }

  return (
    <S.MainStyled>
      <View
        number={number}
        status={status}
        handlerStatus={handlerStatus}
        candidate={candidate!}
      />
      <Keyboard handlerNumber={handlerNumber} handlerStatus={handlerStatus} />
    </S.MainStyled>
  )
}
