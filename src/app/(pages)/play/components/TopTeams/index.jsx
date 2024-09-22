import React from 'react'
import { useTranslation } from 'react-i18next'
const TopTeams = () => {
  const { t } = useTranslation()
  return (
    <div className="flex h-min w-full flex-col gap-8 lg:w-1/3">
      <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
        <h3 className="text-xl font-bold">{t("Eng kuchli top 3 jamoalar")}</h3>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
          <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
        </div>
      </div>
      <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
        <h3 className="text-xl font-bold">{t("Eng kuchli top 3 - futbolchilar")}</h3>
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
