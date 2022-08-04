import * as S from './View.style'

//Type
import { statusType } from 'types/status'
import { CandidateType } from 'types/candidate'

import { Begin } from 'components/screens/begin'
import { Valid } from 'components/screens/valid'
import { Null } from 'components/screens/null'
import { White } from 'components/screens/white'
import { Footer } from 'components/footer'
import { End } from 'components/screens/end'

interface ViewProps {
  number: string
  status: statusType
  candidate: CandidateType
}

export const View = ({ number, status, candidate }: ViewProps) => {
  return (
    <S.ViewContainer>
      {status === 'Begin' ? (
        <Begin number={number} />
      ) : (
        <>
          {status === 'End' ? (
            <End />
          ) : (
            <>
              {status === 'Valid' && <Valid candidate={candidate} />}
              {status === 'Null' && <Null number={number} />}
              {status === 'White' && <White />}
              <Footer />
            </>
          )}
        </>
      )}
    </S.ViewContainer>
  )
}
