import * as S from './View.style'
import { statusType } from 'types/status'

import { Begin } from 'components/screens/begin'
import { Valid } from 'components/screens/valid'
import { Null } from 'components/screens/null'
import { White } from 'components/screens/white'
import { Footer } from 'components/footer'

import { CandidateType } from 'types/candidate'

interface ViewProps {
  number: string
  status: statusType
  handlerStatus: (value: statusType) => void
  candidate: CandidateType
}

export const View = ({
  number,
  status,
  handlerStatus,
  candidate
}: ViewProps) => {
  return (
    <S.ViewContainer>
      {status === 'Begin' ? (
        <Begin number={number} />
      ) : (
        <>
          {status === 'Valid' && <Valid candidate={candidate} />}
          {status === 'Null' && <Null />}
          {status === 'White' && <White />}
          <Footer />
        </>
      )}
    </S.ViewContainer>
  )
}
