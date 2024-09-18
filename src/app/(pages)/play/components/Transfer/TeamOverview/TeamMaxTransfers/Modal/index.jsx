import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TeamMaxTransfersModal = ({ handleModal }) => {
  return (
    <Backdrop onClick={handleModal}>
      <motion.dialog
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        className="mx-4 flex flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 xs:mx-auto xs:w-2/3 md:w-1/2 md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleModal} className="self-end">
          <Image width={24} height={24} src="/icons/close.svg" alt="close" />
        </button>
        <header className="space-y-1">
          <h3 className="text-xl font-semibold">
            Transfer limitini oshirishni hoxlaysizmi?
          </h3>
          <p className="text-sm text-neutral-300 md:text-base">
            Trasnfer limitini oshirish bu musobaqada g‘alaba qozonish uchun
            foydalanuvchiga yana 3 tagacha qo‘shimcha transfer kerak bo‘lishi
            mumkin (jami 5 ta transfer). Shu sababli, foydalanuvchilar
            qo‘shimcha transferlardan birini sotib olib, chempionlik sari qadam
            tashlaydi
          </p>
        </header>
        <section className="flex flex-col gap-2 text-sm xs:text-base">
          {transfers.map((transfer) => (
            <Link key={transfer.id} href={`/confirm-payment/${transfer.id}`}>
              <div className="flex gap-2 rounded border border-neutral-400 p-4 transition-all hover:border-primary">
                Transfer limitni
                <span className="font-bold">{transfer.amount} </span>taga
                oshirish
              </div>
            </Link>
          ))}
        </section>
      </motion.dialog>
    </Backdrop>
  )
}

const transfers = [
  {
    id: 4,
    type: 'transfer',
    amount: 3,
    price: 25000,
  },
  {
    id: 5,
    type: 'transfer',
    amount: 4,
    price: 35000,
  },
  {
    id: 6,
    type: 'transfer',
    amount: 5,
    price: 65000,
  },
]

export default TeamMaxTransfersModal
