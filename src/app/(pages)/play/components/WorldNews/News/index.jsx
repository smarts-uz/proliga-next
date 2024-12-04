'use client'

import { fetchNews } from 'app/lib/features/news/news.thunk'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import Article from './Article'
import { NewsSkeleton } from './NewsSkeleton'

const News = () => {
  const dispatch = useDispatch()
  const { news, isLoading } = useSelector((store) => store.news)
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(5)
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

  if (isLoading) {
    return <NewsSkeleton count={perPage} />
  }

  return (
    <div className="relative mx-auto flex h-min min-h-[38rem] w-full min-w-max max-w-[32rem] flex-col items-center justify-between rounded-xl bg-neutral-950 p-4 shadow shadow-neutral-600 lg:mx-0 lg:w-auto lg:min-w-72 lg:flex-1 xl:p-5">
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
      <div className="mt-2 flex justify-center space-x-1">
        <button
          onClick={decrementPage}
          disabled={page === 0}
          className="rounded border border-neutral-200 px-3 py-1 capitalize text-neutral-200 hover:border-neutral-50 hover:underline disabled:opacity-60 disabled:hover:cursor-default disabled:hover:no-underline"
        >
          {t('Oldigisi')}
        </button>
        <span className="flex w-10 items-center justify-center rounded border px-4 text-center text-neutral-200">
          {page + 1}
        </span>
        <button
          className="rounded border border-neutral-200 px-3 py-1 capitalize text-neutral-200 hover:border-neutral-50 hover:underline disabled:opacity-60 disabled:hover:cursor-default disabled:hover:no-underline"
          disabled={news?.length < perPage + 1}
          onClick={incrementPage}
        >
          {t('Keyingi')}
        </button>
      </div>
    </div>
  )
}

export default News
