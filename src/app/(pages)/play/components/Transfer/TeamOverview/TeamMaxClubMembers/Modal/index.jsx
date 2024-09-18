import Backdrop from 'components/Backdrop'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TeamMaxClubMembersModal = ({ handleModal }) => {
  return (
    <Backdrop bgOpacity={'bg-opacity-50'} onClick={handleModal}>
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
            Bir jamoadan oyinchilarni sonini oshirishni hoxlaysizmi?
          </h3>
          <p className="text-sm text-neutral-300 md:text-base">
            Musobaqada g‘alaba qozonish uchun bir jamoadan ikkita o‘yinchi
            etarli bo‘lmasligi mumkin. Foydalanuvchiga qo‘shimcha ravishda har
            bir jamoadan yana 3 tagacha o‘yinchi (jami 5 o‘yinchi) sotib
            olishlari mumkin bo‘ladi. Shu sababli, foydalanuvchilar bir jamoadan
            qo‘shimcha futbolchilar limitini sotib olib, chempionlik sari qadam
            tashlaydi
          </p>
        </header>
        <section className="flex flex-col gap-2 text-sm xs:text-base">
          {maxClubMembers.map((item) => (
            <Link key={item.id} href={`/confirm-payment/${item.id}`}>
              <div className="flex gap-2 rounded border border-neutral-400 p-4 transition-all hover:border-primary">
                Bir jamoadan <span className="font-bold">{item.amount}ta</span>
                futbolchi sotib olish
              </div>
            </Link>
          ))}
        </section>
      </motion.dialog>
    </Backdrop>
  )
}

const maxClubMembers = [
  {
    id: 7,
    type: 'maxClubMembers',
    amount: 3,
    price: 25000,
  },
  {
    id: 8,
    type: 'maxClubMembers',
    amount: 4,
    price: 35000,
  },
  {
    id: 9,
    type: 'maxClubMembers',
    amount: 5,
    price: 65000,
  },
]

export default TeamMaxClubMembersModal
