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
import dynamic from 'next/dynamic'
const RulesSliderTitle = dynamic(() => import('./RulesSliderTitle'), {
  ssr: false,
})
import WinPrizesSlide from './WinPrizesSlide'

function RulesSlider() {
  return (
    <Gutter>
      <Carousel opts={{ loop: true }} className="mx-7 xl:mx-8">
        <RulesSliderTitle />
        <CarouselContent className="mb-6">
          <CarouselItem className="min-h-[32rem] lg:min-h-[36rem]">
            <CreateTeamSlide />
          </CarouselItem>
          <CarouselItem className="min-h-[32rem] lg:min-h-[36rem]">
            <GatherPointsSlide />
          </CarouselItem>
          <CarouselItem className="min-h-[32rem] lg:min-h-[36rem]">
            <MakeTransfersSlide />
          </CarouselItem>
          <CarouselItem className="min-h-[32rem] lg:min-h-[36rem]">
            <CompeteSlide />
          </CarouselItem>
          <CarouselItem className="min-h-[32rem] lg:min-h-[36rem]">
            <WinPrizesSlide />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-left-9 xl:-left-11 2xl:-left-14" />
        <CarouselNext className="-right-9 xl:-right-11 2xl:-right-14" />
      </Carousel>
    </Gutter>
  )
}

export default RulesSlider
