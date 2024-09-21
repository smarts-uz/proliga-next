'use client'

import { useState } from 'react'
import Article from './Article'

const itemsPerPage = 4

const News = () => {
  const [currentPage, setCurrentPage] = useState(1)

  // const getNews = async () => {
  //   try {
  //     const { data, error } = await supabase.from('news').select()
  //   } catch (err) {
  //     throw new err()
  //   }
  // }

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage)

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  // useEffect(() => {
  //   getNews()
  // })
  return (
    <div className="flex h-auto sm:min-h-[36rem] max-h-[40rem] w-full flex-col items-center justify-between rounded-xl bg-neutral-950 p-6 shadow shadow-neutral-600 xl:w-1/3">
      <h3 className="items-start self-start text-xl font-semibold">
        Yangiliklar
      </h3>
      <div className="flex-1">
        {currentItems?.length > 0 &&
          currentItems.map((item, index) => (
            <Article key={index} item={item} />
          ))}
        {currentItems?.length === 0 && (
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
          Oldingi
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            // onClick={() => goToPage(i + 1)}
            className={`rounded border bg-neutral-900 px-4 py-2 ${
              currentPage === i + 1
                ? 'border-primary text-primary'
                : 'border-white text-neutral-300 hover:text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          // onClick={() => goToPage(currentPage + 1)}
          className={`rounded border px-4 py-2 text-neutral-300 ${
            true
              ? 'cursor-default opacity-75'
              : 'hover:border-primary hover:text-primary'
          }`}
          disabled={true}
        >
          Keyingi
        </button>
      </div>
    </div>
  )
}

const data = []

export default News
