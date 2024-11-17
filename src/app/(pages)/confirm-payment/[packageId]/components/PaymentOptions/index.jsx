import WalletPaymentOption from './Wallet'
import ClickUpPaymentOption from './ClickUp'
import PaymePaymentOption from './Payme'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import RefillBalanceModal from 'components/RefillBalanceModal'
import UzumPaymentOption from './Uzum'
import { useSelector } from 'react-redux'
import { configKey, configType } from 'app/utils/config.util'

const PaymentOptions = ({ paymentOption, setPaymentOption }) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const active = 'border-primary'
  const passive = 'border-neutral-600 hover:border-primary/80'
  const { config } = useSelector((store) => store.systemConfig)
  const [paymeActive, setPaymeActive] = useState(null)
  const [clickActive, setClickActive] = useState(null) // search for config & check if it's active
  const [uzumActive, setUzumActive] = useState(null)

  useEffect(() => {
    if (config?.length > 0) {
      setPaymeActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.checkout_payme &&
              i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? null
      )
      setClickActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.checkout_click &&
              i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? null
      )
      setUzumActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.checkout_uzum &&
              i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? null
      )
    }
  }, [config])

  return (
    <div className="mb-4 mt-2">
      <div className="flex w-full items-center gap-4 p-4 lg:p-6">
        <span className="hidden size-12 items-center justify-center rounded-full bg-neutral-700 font-bold text-neutral-300 sm:flex">
          2
        </span>
        <h3 className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
          {t("To'lov usulini tanlang")}
        </h3>
      </div>
      <section className="flex flex-wrap justify-center gap-2 sm:justify-start">
        <WalletPaymentOption
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
          active={active}
          passive={passive}
          toggleModal={() => setIsModalOpen(true)}
        />
        {clickActive && (
          <ClickUpPaymentOption
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
            active={active}
            passive={passive}
          />
        )}
        {paymeActive && (
          <PaymePaymentOption
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
            active={active}
            passive={passive}
          />
        )}
        {uzumActive && (
          <UzumPaymentOption
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
            active={active}
            passive={passive}
          />
        )}
      </section>
      <RefillBalanceModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  )
}

export default PaymentOptions
