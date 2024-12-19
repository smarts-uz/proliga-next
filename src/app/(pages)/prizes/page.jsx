'use client'

import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import dynamic from 'next/dynamic'
const PrizesSection = dynamic(() => import('./components/Prizes'), {
  ssr: false,
  loading: () => <PrizesSkeleton />,
})
import { PrizesSkeleton } from './components/PrizesSkeleton'

const Prizes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompetition())
  }, [dispatch])

  return (
    <Gutter>
      <PrizesSection />
    </Gutter>
  )
}

export default Prizes
