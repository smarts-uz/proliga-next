'use client'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Gutter from '../../../components/Gutter'
import League from './components/League'

const Leagues = () => {
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
            <League key={index} item={item} />
          ))}
        </div>
      </section>
    </Gutter>
  )
}

export default Leagues
