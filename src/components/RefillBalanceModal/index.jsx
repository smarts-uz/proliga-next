'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { useFillBalance } from 'app/hooks/user/useFillBalance/useFillBalance'
import { Input } from '@/components/ui/input'
import { toast } from 'react-toastify'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useRouter } from 'next/navigation'

const RefillBalanceModal = ({ isModalOpen, setIsModalOpen }) => {
  const [paymentOption, setPaymentOption] = useState(BALANCEOPTIONS.CLICKUP)
  const { t } = useTranslation()
  const { fillBalance, isLoading, error } = useFillBalance()
  const [amount, setAmount] = useState('')
  const active = 'border-primary'
  const passive = 'border-neutral-600 hover:border-yellow-600'
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const SERVICE_ID = process.env.NEXT_PUBLIC_CLICK_SERVICE_ID
    const MERCHANT_ID = process.env.NEXT_PUBLIC_CLICK_MERCHANT_ID
    const RETURN_URL = process.env.NEXT_PUBLIC_URL

    if (+amount < 100) {
      toast.warning(
        t("Hisobni kamida 1 so'm ga toldirish lozim").replace('1', '100'),
        {
          theme: 'dark',
        }
      )
      return
    }

    // await fillBalance(Number(amount), paymentOption)
    if (paymentOption === PAYMENTOPTIONS.CLICKUP) {
      router.push(
        `https://my.click.uz/services/pay?service_id=${SERVICE_ID}&merchant_id=${MERCHANT_ID}&amount=${amount}&transaction_param=1&return_url=${RETURN_URL}`
      )
    }
    if (!isLoading && !error) {
      setAmount('')
      setIsModalOpen(false)
    }

    // https://my.click.uz/services/pay?service_id=23202&merchant_id=14364&amount=4000.00&transaction_param=1&return_url=https://user.uz/profile
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
            <section className="flex flex-wrap justify-center gap-1 sm:flex-nowrap sm:justify-start">
              <button
                onClick={() => setPaymentOption(BALANCEOPTIONS.CLICKUP)}
                type="button"
                className={`h-16 w-36 rounded border bg-stone-950 p-3 transition-all sm:w-full sm:p-4 xl:rounded-md ${paymentOption === BALANCEOPTIONS.CLICKUP ? active : passive}`}
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
                className={`h-16 w-36 rounded border bg-stone-950 p-3 transition-all sm:w-full sm:p-4 xl:rounded-md ${paymentOption === BALANCEOPTIONS.PAYME ? active : passive}`}
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
              <button
                type="button"
                onClick={() => setPaymentOption(BALANCEOPTIONS.UZUM)}
                className={`h-16 w-36 rounded border bg-stone-950 p-3 transition-all sm:w-full sm:p-4 xl:rounded-md ${paymentOption === BALANCEOPTIONS.UZUM ? active : passive}`}
              >
                <Image
                  src="/icons/uzum.svg"
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
            <label
              className="text-sm font-medium text-neutral-300 sm:text-base"
              htmlFor="money"
            >
              {t("To'lash summasini tering")}
            </label>
            <Input
              type="number"
              id="money"
              placeholder="100000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="money"
              className="flex h-10 w-full rounded-md border border-neutral-600 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 rounded border border-primary py-3 font-bold transition-all hover:bg-primary hover:text-black"
          >
            {isLoading ? (
              <Image
                src="/icons/loading.svg"
                width={24}
                height={24}
                alt="loading"
                className="mx-auto size-6 animate-spin"
              />
            ) : (
              t("To'lash")
            )}
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
