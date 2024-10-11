'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Gutter from 'components/Gutter'
import CreateTeamSlide from './CreateTeamSlide'
import GatherPointsSlide from './GatherPointsSlide'
import MakeTransfersSlide from './MakeTransfersSlide'
import CompeteSlide from './CompeteSlide'
import { useTranslation } from 'react-i18next'
import dynamic from 'next/dynamic'
const RulesSliderTitle = dynamic(() => import('./RulesSliderTitle'), {
  ssr: false,
})
import WinPrizesSlide from './WinPrizesSlide'

function RulesSlider() {
  const { t } = useTranslation()

  return (
    <Gutter>
      <Carousel opts={{ loop: true }} className="mx-6 xl:mx-8">
        <RulesSliderTitle />
        <CarouselContent className="mx-0 my-4 xl:mx-0 2xl:mx-0">
          <CarouselItem className="max-h-[36rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[36rem]">
            <CreateTeamSlide />
          </CarouselItem>
          <CarouselItem className="max-h-[36rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[36rem]">
            <GatherPointsSlide />
          </CarouselItem>
          <CarouselItem className="max-h-[36rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[36rem]">
            <MakeTransfersSlide />
          </CarouselItem>
          <CarouselItem className="max-h-[36rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[36rem]">
            <CompeteSlide />
          </CarouselItem>
          <CarouselItem className="max-h-[36rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[36rem]">
            <WinPrizesSlide />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-left-8" />
        <CarouselNext className="-right-8" />
      </Carousel>
    </Gutter>
  )
}

export default RulesSlider
