'use client'
import { useTranslation } from 'react-i18next'

const JournalPagination = ({ decrementPage, incrementPage, page }) => {
  const { t } = useTranslation()

  return (
    <div className="mt-auto flex items-center justify-center gap-2 py-2">
      <button
        onClick={decrementPage}
        disabled={page === 0}
        className="rounded border px-3 py-1 capitalize text-white hover:underline disabled:opacity-75 disabled:hover:cursor-default disabled:hover:no-underline"
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

export default JournalPagination
