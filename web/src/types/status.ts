import { Begin } from 'components/screens/begin'
import { Valid } from 'components/screens/valid'
import { Null } from 'components/screens/null'
import { White } from 'components/screens/white'

const typeVote = { Begin, Valid, Null, White }
export type statusType = keyof typeof typeVote
