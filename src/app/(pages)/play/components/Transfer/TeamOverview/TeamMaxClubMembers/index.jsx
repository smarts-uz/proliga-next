import Image from 'next/image'
import { useState } from 'react'
import TeamMaxClubMembersModal from './Modal'

export default function TeamMaxClubMembers() {
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
        className="group w-min min-w-44 cursor-pointer capitalize"
        onClick={handleModal}
      >
        <header className="flex text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-xs xs:text-sm"
          >
            Bir jamoadan o&apos;yinchilar
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 size-3.5 translate-x-0 rotate-45 transition-all group-hover:translate-x-1 xs:size-4"
            height={16}
          />
        </header>
        <p className="text-3xl font-bold xs:text-4xl">2/2</p>
      </div>
      {isModalOpen && <TeamMaxClubMembersModal handleModal={handleModal} />}
    </>
  )
}
