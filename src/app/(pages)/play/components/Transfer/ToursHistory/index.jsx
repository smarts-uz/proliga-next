import React from 'react'

const ToursHistory = () => {
  return (
    <div className="flex h-min w-full border-collapse flex-col gap-2 overflow-x-auto rounded-xl bg-black p-6 text-neutral-200 md:text-sm lg:w-1/2 xl:text-base">
      <h2 className="text-lg font-bold">Meni Muvaffaqiyatim</h2>
      <div className="flex gap-8">
        <div>
          <p className="text-sm text-neutral-500">Turnirdagi ochkolar</p>
          <span className="text-6xl font-bold text-neutral-50">240</span>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Turdagi ochkolar</p>
          <span className="text-5xl font-bold text-neutral-50">52</span>
        </div>
        <div>
          <p className="text-sm text-neutral-500">O&apos;rtacha olgan ballar</p>
          <span className="text-5xl font-bold text-neutral-50">37.2</span>
        </div>
      </div>
    </div>
  )
}

export default ToursHistory
