'use client'
import { useTranslation } from 'react-i18next'

const StatisticsPagination = ({ decrementPage, incrementPage, page }) => {
  const { t } = useTranslation()

  return (
    <div className="mt-auto flex items-center justify-center gap-2 py-4">
      <button
        onClick={decrementPage}
        className="rounded border px-3 py-1 capitalize text-white hover:underline"
      >
        {t('Oldigisi')}
      </button>
      <span className="flex w-10 justify-center rounded border p-1 text-white">
        {page + 1}
      </span>
      <button
        onClick={incrementPage}
        className="rounded border px-3 py-1 capitalize text-white hover:underline"
      >
        {t('Keyingisi')}
      </button>
    </div>
  )
}

export default StatisticsPagination
