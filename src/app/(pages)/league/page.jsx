/* eslint-disable @next/next/no-img-element */
'use client'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import Gutter from '../../../components/Gutter'
import { supabase } from '../../lib/supabaseClient'

const League = () => {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from('competition').select('*')
      if (error) return toast.error(error.message)
      if (data?.length > 0) setLeagues(data)
    }
    fetch()
  }, [])

  return (
    <Gutter>
      <section className="my-8 w-full rounded-2xl bg-neutral-800 p-6">
        <h2 className="mb-4 text-2xl font-bold">Leagues</h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {leagues.map((item, index) => (
            <article
              key={index}
              className="relative flex min-h-28 items-center gap-4 rounded-sm border border-neutral-500 bg-neutral-700 p-4"
            >
              <img
                src={item.flag}
                alt={item.title}
                className="z-20 size-12 rounded-full bg-white p-1"
              />
              <span className="absolute bottom-0 left-0 top-0 h-full w-10 bg-primary" />
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-neutral-400">
                  Description of League {index + 1}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Gutter>
  )
}

export default League
