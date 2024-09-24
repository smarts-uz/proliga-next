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
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(14)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchNews({ page, perPage }))
  }, [dispatch, page, perPage])

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const decrementPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  return (
    <div className="mx-auto flex h-auto min-h-[36rem] w-full max-w-[40rem] flex-col items-center justify-between rounded-xl bg-neutral-950 p-6 shadow shadow-neutral-600 sm:min-h-[36rem] lg:mx-0 xl:w-1/3">
      <h3 className="items-start self-start text-xl font-semibold">
        {t('Yangiliklar')}
      </h3>
      <div className="mt-2 w-full flex-1">
        {news?.map((item, index) => (
          <Article key={index} item={item} />
        ))}
        {news?.length === 0 && (
          <p className="mt-2 text-center text-neutral-400">
            {t('Yangiliklar mavjud emas!')}
          </p>
        )}
      </div>
      <div className="flex justify-center space-x-1">
        <button
          onClick={decrementPage}
          className="rounded border px-4 py-2 text-neutral-200 hover:opacity-75"
        >
          {t('Oldingi')}
        </button>
        <span className="flex w-10 items-center justify-center rounded border px-4 text-center text-white">
          {page + 1}
        </span>
        <button
          className="rounded border px-4 py-2 text-neutral-200 hover:opacity-75"
          onClick={incrementPage}
        >
          {t('Keyingi')}
        </button>
      </div>
    </div>
  )
}

const data = []

export default News
