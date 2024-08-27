/* eslint-disable @next/next/no-img-element */
import LeagueModal from '../Modal/index'
import { useState } from 'react'

const Championship = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    if (isModalOpen) {
      setModalOpen(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setModalOpen(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
  return (
    <>
      <article
        className="relative flex cursor-pointer items-center gap-4 rounded-sm border border-neutral-500 bg-neutral-700 p-4"
        onClick={() => toggleModal(true)}
      >
        <img
          src={item.flag}
          alt={item.title}
          className="z-10 size-12 select-none rounded-full bg-white p-1"
          draggable={false}
        />
        <span className="absolute bottom-0 left-0 top-0 h-full w-10 bg-primary" />
        <div>
          <h3 className="text-base font-bold capitalize xs:text-lg md:text-xl">
            {item.title}
          </h3>
          <p className="text-xs text-neutral-400 xs:text-sm md:text-base">
            Description of League
          </p>
        </div>
      </article>
      {isModalOpen && <LeagueModal toggleModal={toggleModal} />}
    </>
  )
}

export default Championship
