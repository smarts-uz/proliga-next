import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TeamBalanceModal = ({ handleModal }) => {
  const { t } = useTranslation()
  return (
    <Backdrop onClick={handleModal}>
      <motion.dialog
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 flex max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 xs:mx-auto xs:w-2/3 md:w-1/2 md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleModal} className="self-end">
          <Image width={24} height={24} src="/icons/close.svg" alt="close" />
        </button>
        <header className="space-y-1">
          <h3 className="text-xl font-semibold">
            {t('Balans miqdorini oshirishni hoxlaysizmi')}
          </h3>
          <p className="text-sm text-neutral-300 md:text-base">
            {t('update balance txt')}
          </p>
        </header>
        <section className="flex flex-col gap-2 text-sm xs:text-base">
          {balance.map((item) => (
            <Link key={item.id} href={`/confirm-payment/${item.id}`}>
              <div className="flex gap-2 rounded border border-neutral-400 p-4 transition-all hover:border-primary">
                {t('Tangalar miqdorini')}
                <span className="font-bold">{item.amount}</span>
                {t('tangaga oshirish')}
              </div>
            </Link>
          ))}
        </section>
      </motion.dialog>
    </Backdrop>
  )
}

const balance = [
  {
    id: 1,
    type: 'balance',
    amount: 115,
    price: 25000,
  },
  {
    id: 2,
    type: 'balance',

    amount: 125,
    price: 35000,
  },
  {
    id: 3,
    type: 'balance',
    amount: 150,
    price: 65000,
  },
]

export default TeamBalanceModal
