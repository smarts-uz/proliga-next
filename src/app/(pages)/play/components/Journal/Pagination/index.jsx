'use client'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const JournalPagination = ({ decrementPage, incrementPage, page, perPage }) => {
  const { t } = useTranslation()
  const { activities } = useSelector((state) => state.userActivity)

  return (
    <div className="mt-auto flex h-auto items-center justify-center gap-2 pt-2 text-sm md:text-base">
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
        disabled={activities.length < perPage + 1}
        className="rounded border px-3 py-1 capitalize text-white hover:underline disabled:opacity-75 disabled:hover:cursor-default disabled:hover:no-underline"
      >
        {t('Keyingisi')}
      </button>
    </div>
  )
}

export default JournalPagination
