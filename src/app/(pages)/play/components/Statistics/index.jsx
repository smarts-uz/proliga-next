import Gutter from '../../../../../components/Gutter'
import { useState, useReducer, useEffect } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import Image from 'next/image'

const Statistics = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')
        .limit(54)
      if (error) return toast.error(error.message)
      if (data?.length > 0) setPlayers(data)
    }
    fetch()
  }, [])

  return (
    <Gutter>
      <section className='flex gap-4'>
        <div className="h-min max-h-[36rem] min-h-[36rem] table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-neutral-200 md:w-2/3">
          <table class="w-full table-auto border-spacing-0">
            <thead>
              <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Price</th>
                <th>Club</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} className="border-spacing-0">
                  <td className="w-24 truncate">{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.price}</td>
                  <td>{player.club.name}</td>
                  <button>
                    <Image
                      src="/icons/plus.svg"
                      alt="add player"
                      width={24}
                      height={24}
                      className="filter-primary"
                    />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-4" />
        </div>
        <div className="flex h-min w-1/3 flex-col gap-8">
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">ENG KUCHLI TOP 3 - JAMOALAR</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-28 rounded-xl bg-white"></div>{' '}
              <div className="size-28 rounded-xl bg-white"></div>
              <div className="size-28 rounded-xl bg-white"></div>
            </div>
          </div>
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">
              ENG KUCHLI TOP 3 - Futbolchilar
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-28 rounded-xl bg-white"></div>{' '}
              <div className="size-28 rounded-xl bg-white"></div>
              <div className="size-28 rounded-xl bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  )
}

export default Statistics
