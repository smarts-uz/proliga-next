/* eslint-disable @next/next/no-img-element */
import LeagueModal from '../Modal/index'
import { useState } from 'react'

const Championship = ({ item }) => {
  const [isModalOpen, toggleModal] = useState(false)

  console.log(isModalOpen)
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
          <h3 className="text-base xs:text-lg md:text-xl font-bold capitalize">{item.title}</h3>
          <p className="text-xs xs:text-sm md:text-base text-neutral-400">Description of League</p>
        </div>
      </article>
      {isModalOpen && <LeagueModal toggleModal={toggleModal} />}
    </>
  )
}

export default Championship
