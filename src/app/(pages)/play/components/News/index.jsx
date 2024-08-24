'use client'
import { useEffect, useState } from 'react'
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
    <div className="flex h-auto min-h-[40rem] flex-col items-center justify-between rounded-md bg-black py-4 xs:w-96">
      <div>
        {currentItems.map((item, index) => (
          <Article key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center space-x-1">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className={`rounded border px-4 py-2 text-gray-200 ${
            currentPage === 1
              ? 'cursor-not-allowed opacity-75'
              : 'bg-opacity-50 hover:border-primary hover:text-primary'
          }`}
          disabled={currentPage === 1}
        >
          Oldingi
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
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
          onClick={() => goToPage(currentPage + 1)}
          className={`rounded border px-4 py-2 text-neutral-300 ${
            currentPage === totalPages
              ? 'cursor-not-allowed opacity-75'
              : 'hover:border-primary hover:text-primary'
          }`}
          disabled={currentPage === totalPages}
        >
          Keyingi
        </button>
      </div>
    </div>
  )
}

const data = [
  {
    id: 1,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema " Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
  {
    id: 2,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
  {
    id: 3,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
  {
    id: 4,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
  {
    id: 5,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
  {
    id: 6,
    date: '22-iyul,2022',
    views: '23232',
    news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    title: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...
`,
  },
]

export default News
