'use client'
import { useTranslation } from 'react-i18next'

const CabinetChangePasswordTab = () => {
  const { t } = useTranslation()

  return (
    <section className="flex h-full w-full flex-1 flex-col gap-2 rounded-xl bg-neutral-900/80 p-4 lg:h-auto xl:p-6">
      <h3 className="lg:texl-lg text-base xl:text-xl">
        {t('Parol Yangilash')}
      </h3>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="oldPassword"
        >
          {t('Eski parol')}
        </label>
        <input
          id="oldPassword"
          name="oldPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="newPassword"
        >
          {t('Yangi parol')}
        </label>
        <input
          id="newPassword"
          name="newPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="confirmPassword"
        >
          {t('Yangi parolni qayta kiriting')}
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
        />
      </div>
      <button
        className="mt-2 w-full rounded border border-black bg-primary bg-opacity-75 py-2 text-sm font-semibold text-neutral-900 transition-all hover:bg-opacity-100 sm:max-w-48"
        type="submit"
      >
        {t('Saqlash')}
      </button>
    </section>
  )
}

export default CabinetChangePasswordTab
