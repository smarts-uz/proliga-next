import React from 'react'

const TopTeams = () => {
  return (
    <div className="flex h-min w-1/3 flex-col gap-8">
      <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
        <h3 className="text-xl font-bold">ENG KUCHLI TOP 3 - JAMOALAR</h3>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
        </div>
      </div>
      <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
        <h3 className="text-xl font-bold">ENG KUCHLI TOP 3 - Futbolchilar</h3>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
        </div>
      </div>
    </div>
  )
}

export default TopTeams
