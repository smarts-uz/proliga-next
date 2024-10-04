import Image from 'next/image'
import { useState } from 'react'
import TeamMaxClubMembersModal from './Modal'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function TeamMaxClubMembers() {
  const { packages } = useSelector((state) => state.packages)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const [isModalOpen, toggleModal] = useState(false)
  const { t } = useTranslation()

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

  return (
    <>
      <div
        className="group w-1/2 cursor-pointer capitalize md:w-auto"
        onClick={handleModal}
      >
        <header className="flex text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-xs xs:text-sm"
          >
            {t('Bir jamoadan')}
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 size-3.5 translate-x-0 rotate-45 self-center transition-all group-hover:translate-x-1 xs:size-4"
            height={16}
          />
        </header>
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
          {currentTeam?.count_of_transfers ?? '0'}
        </p>
      </div>
      {isModalOpen && <TeamMaxClubMembersModal handleModal={handleModal} />}
    </>
  )
}
