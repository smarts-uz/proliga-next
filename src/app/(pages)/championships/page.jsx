'use client'

import Gutter from '../../../components/Gutter'
import Championship from './components/Championship'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const Championships = () => {
  const router = useRouter()
  const [championships, setChampionships] = useState([])
  const { userAuth, userTable } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from('competition').select('*')
      if (error) return toast.error(error.message)
      if (data?.length > 0) setChampionships(data)
    }
    fetch()
  }, [])

  useEffect(() => {
    if (!userAuth || !userTable) router.push('/login')
  }, [userAuth, userTable, router])

  return (
    <Gutter>
      <section className="my-8 w-full rounded-2xl bg-neutral-800 p-6">
        <h2 className="mb-4 text-2xl font-bold">Leagues</h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {championships.map((item, index) => (
            <Championship key={index} item={item} />
          ))}
        </div>
      </section>
    </Gutter>
  )
}

export default Championships
