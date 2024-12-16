'use client'

import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import PrizesSection from './components/Prizes'

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
