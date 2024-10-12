import { useTranslation } from 'react-i18next'

const RulesSliderTitle = () => {
  const { t } = useTranslation()

  return (
    <div className="mb-4 w-3/4 max-w-[24rem] -skew-x-12 self-start rounded-sm bg-primary md:mb-6 md:max-w-[30rem]">
      <h3 className="carousel-header text-center font-bold capitalize text-black">
        {t('Umumiy qoidalar')}
      </h3>
    </div>
  )
}

export default RulesSliderTitle
