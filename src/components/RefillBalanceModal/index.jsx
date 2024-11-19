'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toast } from 'react-toastify'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useSelector } from 'react-redux'
import { useRedirectToClick } from 'app/hooks/payment/useRedirectToClick/useRedirectToClick'
import { useRedirectToPayme } from 'app/hooks/payment/useRedirectToPayme/useRedirectToPayme'
import RefilBalanceModalPaymentOption from './PaymentOption'
import { configKey, configType } from 'app/utils/config.util'

const RefillBalanceModal = ({ isModalOpen, setIsModalOpen }) => {
  const [paymentOption, setPaymentOption] = useState(BALANCEOPTIONS.CLICKUP)
  const { t } = useTranslation()
  const [amount, setAmount] = useState('')
  const active = 'border-primary'
  const passive = 'border-neutral-600 hover:border-yellow-600'
  const { userTable } = useSelector((store) => store.auth)
  const { redirectToClick } = useRedirectToClick()
  const { redirectToPayme } = useRedirectToPayme()
  const RETURN_URL = process.env.NEXT_PUBLIC_URL
  const { config } = useSelector((store) => store.systemConfig)
  const [paymeActive, setPaymeActive] = useState(false)
  const [clickActive, setClickActive] = useState(false) // search for config & check if it's active
  const [uzumActive, setUzumActive] = useState(false)

  useEffect(() => {
    if (config?.length > 0) {
      setPaymeActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.cabinet_payme &&
              i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? false
      )
      setClickActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.cabinet_click &&
              i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? false
      )
      setUzumActive(
        config
          ?.find(
            (i) =>
              i.key === configKey.cabinet_uzum && i.type === configType.Checkbox
          )
          .value.toLowerCase() === 'true' ?? false
      )
    }
  }, [config])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (+amount < 100) {
      toast.warning(
        t("Hisobni kamida 1 so'm ga toldirish lozim").replace('1', '100'),
        {
          theme: 'dark',
        }
      )
      return
    }
    if (!userTable) {
      toast.error(t("Siz ro'yxatdan o'tmagansiz"), {
        theme: 'dark',
      })
      return
    }

    if (paymentOption === PAYMENTOPTIONS.CLICKUP) {
      redirectToClick({ amount, return_url: RETURN_URL })
    }
    if (paymentOption === PAYMENTOPTIONS.PAYME) {
      redirectToPayme({ amount, return_url: RETURN_URL })
    }
    if (paymentOption === PAYMENTOPTIONS.UZUM) {
      toast.warning(t('Hozircha bu xizmat mavjud emas'), {
        theme: 'dark',
      })
      setAmount('')
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="min-w-[75%] max-w-[96%] rounded-xl border border-neutral-600 bg-neutral-900 xs:max-w-max md:min-w-[50%] md:p-6 lg:min-w-[42%] xl:min-w-[36%] 2xl:min-w-[30%]">
        <DialogTitle className="text-lg font-bold sm:text-xl">
          {t('Balansingizni toldiring')}
        </DialogTitle>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full space-y-2">
            <h3 className="text-sm font-medium text-neutral-300 sm:text-base">
              {t("To'lov usulini tanlang")}
            </h3>
            <section className="flex flex-wrap justify-start gap-1 sm:flex-nowrap">
              {clickActive && (
                <RefilBalanceModalPaymentOption
                  onClick={() => setPaymentOption(BALANCEOPTIONS.CLICKUP)}
                  style={
                    paymentOption === BALANCEOPTIONS.CLICKUP ? active : passive
                  }
                  img={'/icons/click-up.svg'}
                  alt={'click-up'}
                />
              )}
              {paymeActive && (
                <RefilBalanceModalPaymentOption
                  onClick={() => setPaymentOption(BALANCEOPTIONS.PAYME)}
                  style={
                    paymentOption === BALANCEOPTIONS.PAYME ? active : passive
                  }
                  img={'/icons/payme.svg'}
                  alt={'payme'}
                />
              )}
              {uzumActive && (
                <RefilBalanceModalPaymentOption
                  onClick={() => setPaymentOption(BALANCEOPTIONS.UZUM)}
                  style={
                    paymentOption === BALANCEOPTIONS.UZUM ? active : passive
                  }
                  img={'/icons/uzum.svg'}
                  alt={'uzum'}
                />
              )}
              {!clickActive && !paymeActive && !uzumActive && (
                <p className="w-full rounded border border-red-400 bg-red-600/75 py-1 text-center font-bold">
                 {t("Hozircha to'lovlar o'chirib qo'yilgan!")}
                </p>
              )}
            </section>
          </div>
          <div className="w-full space-y-2">
            <label
              className="text-sm font-medium text-neutral-300 sm:text-base"
              htmlFor="money"
            >
              {t("To'lash summasini tering")}
            </label>
            <Input
              type="number"
              id="money"
              placeholder="100,000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="money"
              className="flex h-10 w-full rounded-md border border-neutral-600 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded border border-primary py-3 font-bold transition-all hover:bg-primary hover:text-black"
          >
            {t("To'lash")}
          </button>
        </form>
      </DialogContent>
      <DialogDescription className="hidden">
        This is a dialog to refill user balance
      </DialogDescription>
    </Dialog>
  )
}

export const BALANCEOPTIONS = {
  CLICKUP: 'click',
  PAYME: 'payme',
  UZUM: 'uzum',
}

export default RefillBalanceModal
