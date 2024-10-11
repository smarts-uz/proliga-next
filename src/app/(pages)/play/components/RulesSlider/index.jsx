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

function RulesSlider() {
  const { t } = useTranslation()

  return (
    <Gutter>
      <Carousel opts={{ loop: true }}>
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
        </CarouselContent>
        <CarouselPrevious className="left-1 sm:-left-6 xl:-left-0 2xl:-left-12" />
        <CarouselNext className="right-1 sm:-right-6 xl:-right-0 2xl:-right-12" />
      </Carousel>
    </Gutter>
  )
}

export default RulesSlider
