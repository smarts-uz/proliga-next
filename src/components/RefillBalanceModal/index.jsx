'use client'

import { motion } from 'framer-motion'
import Backdrop from 'components/Backdrop'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
const RefillBalanceModal = ({ toggleModal }) => {
  const [paymentOption, setPaymentOption] = useState(BALANCEOPTIONS.CLICKUP)
  const router = useRouter()

  const active = 'border-primary'
  const passive = 'border-neutral-600 hover:border-yellow-600'

  const handleSubmit = async (e) => {
    e.preventDefault()
    router.push('/championships')
  }
  const { t } = useTranslation()
  return (
    <Backdrop onClick={toggleModal}>
      <motion.dialog
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 flex max-h-[80vh] max-w-[36rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 xs:mx-auto md:w-1/2 md:p-6 2xl:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end" onClick={toggleModal}>
          <Image
            src="/icons/close.svg"
            className="filter-neutral-50"
            alt="close"
            width={24}
            height={24}
          />
        </button>
        <h2 className="text-xl font-bold sm:text-2xl">
          {t('Balansingizni toldiring')}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full space-y-2">
            <h3 className="text-neutral-300">{t("To'lov usulini tanlang")}</h3>
            <section className="flex justify-center gap-2 xs:gap-4 sm:justify-start">
              <button
                onClick={() => setPaymentOption(BALANCEOPTIONS.CLICKUP)}
                type="button"
                className={`h-16 w-full rounded-xl border bg-stone-950 p-4 transition-all sm:h-20 sm:p-6 ${paymentOption === BALANCEOPTIONS.CLICKUP ? active : passive}`}
              >
                <Image
                  src="/icons/click-up.svg"
                  width={36}
                  draggable={false}
                  height={36}
                  className="h-full w-full self-center"
                  alt="click up"
                />
              </button>
              <button
                type="button"
                onClick={() => setPaymentOption(BALANCEOPTIONS.PAYME)}
                className={`h-16 w-full rounded-xl border bg-stone-950 p-4 transition-all sm:h-20 sm:p-6 ${paymentOption === BALANCEOPTIONS.PAYME ? active : passive}`}
              >
                <Image
                  src="/icons/payme.svg"
                  width={36}
                  draggable={false}
                  height={36}
                  className="h-full w-full self-center"
                  alt="payme"
                />
              </button>
            </section>
          </div>
          <div className="w-full space-y-2">
            <label className="text-neutral-300" htmlFor="money">
              {t("To'lash summasini tering")}
            </label>
            <input
              type="number"
              id="money"
              placeholder="100000"
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
      </motion.dialog>
    </Backdrop>
  )
}

export const BALANCEOPTIONS = {
  CLICKUP: 'CLICKUP',
  PAYME: 'PAYME',
}

export default RefillBalanceModal
