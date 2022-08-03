import * as S from './Keyboard.style'

import brasaoImg from 'assets/images/brasao.png'
import songConfirm from 'assets/song/vote-confirm.mp3'

import { ButtonNumber } from 'components/buttonNumber'
import { ButtonGreen, ButtonOrange, ButtonWhite } from 'components/buttonAction'
import { useEffect, useState } from 'react'
import { statusType } from 'types/status'
import { candidates } from 'data/db'
import { CandidateType } from 'types/candidate'

interface KeyboardProps {
  handlerNumber: (value: string) => void
  handlerStatus: (value: statusType, candidate?: CandidateType) => void
}

export const Keyboard = ({ handlerNumber, handlerStatus }: KeyboardProps) => {
  const [num, setNum] = useState<string[]>([])
  const [blockNumbers, setBlockNumbers] = useState<boolean>(false)
  const [blockOrange, setBlockOrange] = useState<boolean>(true)
  const [blockGreen, setBlockGreen] = useState<boolean>(true)

  const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const handlerPress = (btn: string) => {
    setBlockOrange(false)

    if (num.length > 2) {
      return
    }

    setNum([...num, btn])
  }

  const whiteVote = () => {
    setBlockNumbers(true)
    setBlockOrange(false)
    setBlockGreen(false)
    handlerStatus('White')
  }

  const orangeVote = () => {
    handlerStatus('Begin')
    setBlockOrange(true)
    setBlockGreen(true)
    setBlockNumbers(false)
    setNum([])
  }

  useEffect(() => {
    const number = num.join('')
    handlerNumber(number)

    if (number.length === 2) {
      setBlockGreen(false)
      setBlockNumbers(true)
      const candidate = candidates.find((item) => item.number === number)

      if (candidate) {
        handlerStatus('Valid', candidate)
      } else {
        handlerStatus('Null')
      }
    }
  }, [num])

  return (
    <S.keyboardContainer>
      <S.Tag>
        <img src={brasaoImg} alt="Logo" />
        <span>Justiça Eleitoral</span>
      </S.Tag>

      <S.KeysContainer>
        <S.Numbers showKeys={num.length < 2}>
          {btnNum.map((btn) => {
            return (
              <ButtonNumber
                key={btn}
                onClick={() => handlerPress(btn)}
                disabled={blockNumbers}
              >
                <span>{btn}</span>
              </ButtonNumber>
            )
          })}
        </S.Numbers>

        <S.Actions>
          <ButtonWhite onClick={whiteVote}>
            <span>Branco</span>
          </ButtonWhite>
          <ButtonOrange disabled={blockOrange} onClick={orangeVote}>
            <span>Corrige</span>
          </ButtonOrange>
          <ButtonGreen disabled={blockGreen}>
            <span>Confirma</span>
            {/*<audio ref={audioConfirm} src={songConfirm}></audio>*/}
          </ButtonGreen>
        </S.Actions>
      </S.KeysContainer>
    </S.keyboardContainer>
  )
}
