import Image from 'next/image'
import TeamMaxTransfersModal from './Modal'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setTransferModal } from 'app/lib/features/currentTeam/currentTeam.slice'

const TeamMaxTransfers = () => {
  const dispatch = useDispatch()
  const { currentTeam, transferModal } = useSelector(
    (store) => store.currentTeam
  )
  const { currentTourTeam } = useSelector((store) => store.tourTeams)
  const { t } = useTranslation()

  const handleModal = () => {
    if (transferModal) {
      dispatch(setTransferModal(false))
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      dispatch(setTransferModal(true))
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
  const currentCountOfTransfers = Number(
    currentTourTeam?.current_count_of_transfers ?? 0
  )
  const maxTransfersFromOneTeam = Number(
    currentTeam?.transfers_from_one_team ?? 2
  )
  const currentTransferCount = maxTransfersFromOneTeam - currentCountOfTransfers
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
            {t('transferlar')}
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            height={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 size-3.5 translate-x-0 rotate-45 self-center transition-all group-hover:translate-x-1 xs:size-4"
          />
        </header>
        <p className="text-2xl font-bold sm:text-3xl">
          <span
            className={
              currentTransferCount === 0 ? 'text-red-500' : 'text-neutral-100'
            }
          >
            {currentTransferCount}
          </span>
          /{currentTeam?.transfers_from_one_team ?? 0}
        </p>
      </div>
      {transferModal && <TeamMaxTransfersModal handleModal={handleModal} />}
    </>
  )
}

export default TeamMaxTransfers
