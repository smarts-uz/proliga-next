import Image from 'next/image'
import TeamMaxTransfersModal from './Modal'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const TeamMaxTransfers = () => {
  const [isModalOpen, toggleModal] = useState(false)
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { currentTourTeam } = useSelector((store) => store.tourTeams)

  const handleModal = () => {
    if (isModalOpen) {
      toggleModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      toggleModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
  const { t } = useTranslation()
  const currentTransferCount =
    currentTeam?.transfers_from_one_team -
    currentTourTeam?.current_count_of_transfers

  return (
    <>
      <div
        className="group w-1/2 cursor-pointer capitalize md:w-auto"
        onClick={handleModal}
      >
        <header className="flex cursor-pointer text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-xs xs:text-sm"
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
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
          <span
            className={
              +currentTransferCount === 0 ? 'text-red-500' : 'text-neutral-100'
            }
          >
            {typeof !currentTransferCount === 'number'
              ? 0
              : currentTransferCount}
          </span>
          /{currentTeam?.transfers_from_one_team ?? 0}
        </p>
      </div>
      {isModalOpen && <TeamMaxTransfersModal handleModal={handleModal} />}
    </>
  )
}

export default TeamMaxTransfers
