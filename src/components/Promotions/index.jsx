'use client'
import PromotionCompete from './Compete'
import PromotionCreateTeam from './CreateTeam'
import PromotionGatherPoints from './GatherPoints'
import PromotionMakeTransfers from './MakeTransfers'
import PromotionWinPrizes from './WinPrizes'
import { useSelector } from 'react-redux'

const Promotions = () => {
  const { prizes } = useSelector((store) => store.prizes)

  return (
    <>
      <PromotionCreateTeam />
      <PromotionGatherPoints />
      <PromotionMakeTransfers />
      <PromotionCompete />
      {prizes?.length > 0 && <PromotionWinPrizes />}
    </>
  )
}

export default Promotions
