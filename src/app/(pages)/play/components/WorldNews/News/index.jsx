'use client'

import { useState, useEffect } from 'react'
import Article from './Article'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { fetchNews } from 'app/lib/features/news/news.thunk'
import { useDispatch } from 'react-redux'

const News = () => {
  const dispatch = useDispatch()
  const { news } = useSelector((store) => store.news)
  const [currentPage, setCurrentPage] = useState(1)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className="flex h-auto min-h-[36rem] w-full flex-col items-center justify-between rounded-xl bg-neutral-950 p-6 shadow shadow-neutral-600 sm:min-h-[36rem] xl:w-1/3">
      <h3 className="items-start self-start text-xl font-semibold">
        {t('Yangiliklar')}
      </h3>
      <div className="mt-2 w-full flex-1">
        {news?.map((item, index) => (
          <Article key={index} item={item} />
        ))}
        {news?.length === 0 && (
          <p className="mt-2 text-center text-neutral-400">
            Yangiliklar mavjud emas!
          </p>
        )}
      </div>
      <div className="flex justify-center space-x-1">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className={`rounded border px-4 py-2 text-gray-200 ${
            currentPage === 1
              ? 'cursor-default opacity-75'
              : 'bg-opacity-50 hover:border-primary hover:text-primary'
          }`}
          disabled={true}
        >
          {t('Oldingi')}
        </button>
        <button
          className={`rounded border px-4 py-2 text-neutral-300 ${
            true
              ? 'cursor-default opacity-75'
              : 'hover:border-primary hover:text-primary'
          }`}
          disabled={true}
        >
          {t('Keyingi')}
        </button>
      </div>
    </div>
  )
}

const data = []

export default News
