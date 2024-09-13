import Image from 'next/image'
import { useState } from 'react'
import TeamMaxTransfersModal from './Modal'

const TeamMaxTransfers = () => {
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
      <div
        className="group w-min cursor-pointer capitalize"
        onClick={handleModal}
      >
        <header className="flex cursor-pointer text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-sm"
          >
            transferlar
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            height={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 translate-x-0 rotate-45 transition-all group-hover:translate-x-1"
          />
        </header>
        <p className="cursor-pointer text-4xl font-bold">2/2</p>
      </div>
      {isModalOpen && <TeamMaxTransfersModal handleModal={handleModal} />}
    </>
  )
}

export default TeamMaxTransfers
