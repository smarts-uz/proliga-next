import Image from 'next/image'
import TeamBalanceModal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setBalanceModal } from 'app/lib/features/currentTeam/currentTeam.slice'

const TeamBalance = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { teamBalance } = useSelector((store) => store.tourTeams)
  const { balanceModal } = useSelector((store) => store.currentTeam)

  const handleModal = () => {
    if (balanceModal) {
      dispatch(setBalanceModal(false))
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      dispatch(setBalanceModal(true))
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  return (
    <>
      <div
        className="group w-1/2 cursor-pointer capitalize md:w-auto"
        onClick={handleModal}
      >
        <header className="flex cursor-pointer text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-xs sm:text-xs lg:text-xs 2xl:text-sm"
          >
            {t('Balans')}
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 size-3.5 translate-x-0 rotate-45 self-center transition-all group-hover:translate-x-1 xs:size-4"
            height={16}
          />
        </header>
        <p className="text-2xl font-bold sm:text-3xl">{teamBalance ?? '00'}</p>
      </div>
      {balanceModal && <TeamBalanceModal handleModal={handleModal} />}
    </>
  )
}

export default TeamBalance
