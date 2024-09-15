import PromotionCompete from './Compete'
import PromotionCreateTeam from './CreateTeam'
import PromotionGatherPoints from './GatherPoints'
import PromotionMakeTransfers from './MakeTransfers'
import PromotionWinPrizes from './WinPrizes'

const Promotions = () => {
  return (
    <>
      <PromotionCreateTeam />
      <PromotionGatherPoints />
      <PromotionMakeTransfers />
      <PromotionCompete />
      <PromotionWinPrizes />
    </>
  )
}

export default Promotions
