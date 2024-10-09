import Backdrop from 'components/Backdrop'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PACKAGES } from 'app/utils/packages.util'
import { useSelector } from 'react-redux'

const TeamMaxClubMembersModal = ({ handleModal }) => {
  const { t } = useTranslation()
  const { packages } = useSelector((store) => store.packages)
  return (
    <Backdrop bgOpacity={'bg-opacity-50'} onClick={handleModal}>
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
            {t('Bir jamoadan oyinchilarni sonini oshirishni hoxlaysizmi?')}
          </h3>
          <p className="text-sm text-neutral-300 md:text-base">
            {t('Musobaqada g‘alaba qozonish')}
          </p>
        </header>
        <section className="flex flex-col gap-2 text-sm xs:text-base">
          {packages.map(
            (item) =>
              item.type === PACKAGES.single_club_count && (
                <Link key={item.id} href={`/confirm-payment/${item.id}`}>
                  <div className="flex gap-2 rounded border border-neutral-400 p-4 transition-all hover:border-primary">
                    {t('Bir jamoadan')}
                    <span className="font-bold">{item.amount}</span>
                    {t('ta futbolchi sotib olish')}
                  </div>
                </Link>
              )
          )}
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
