import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useState } from 'react'
import TeamBalanceModal from './Modal'

const TeamBalance = () => {
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const [isModalOpen, toggleModal] = useState(false)

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
      <div className="w-min cursor-pointer capitalize" onClick={handleModal}>
        <header className="group flex cursor-pointer text-neutral-400 transition-all hover:text-neutral-50 hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-sm"
          >
            balans
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 translate-x-0 rotate-45 transition-all group-hover:translate-x-1"
            height={16}
          />
        </header>
        <p className="text-4xl font-bold">{currentTeam.balance ?? '00'}</p>
      </div>
      {isModalOpen && <TeamBalanceModal handleModal={handleModal} />}
    </>
  )
}

export default TeamBalance
