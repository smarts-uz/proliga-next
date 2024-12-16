import { PrizesSkeleton } from './components/PrizesSkeleton'
import Gutter from 'components/Gutter'

export default function PrizesLoading() {
  return (
    <Gutter>
      <PrizesSkeleton />
    </Gutter>
  )
}
