import Image from 'next/image'
import React from 'react'

const News = () => {
  const data = [
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
    {
      date: '22-iyul,2022',
      views: '23232',
      news: `Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib" Benzema "Oltin to'p" haqida: "Sovringa Vinisius munosib". Lorem Ipsum why...`,
    },
  ]
  return (
    <div className="bg-white">
      <div className="h-auto w-96 items-end justify-end bg-black">
        {data.map((item) => (
          <>
            <div className="p-4">
              <div className="flex text-xs text-gray-400">
                <p className="w-72 max-w-xs">{item.date}</p>
                <p className="me-2">
                  <Image
                    src="/icons/eye.svg"
                    width={20}
                    height={20}
                    alt="eye"
                  />
                </p>
                <p className="pt-0.5">{item.views}</p>
              </div>
              <h5 className="w-full text-sm">{item.news}</h5>
              <p className="text-xs text-yellow-300">{`yangiliklarni ko'rsatish`}</p>
              <hr />
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default News
