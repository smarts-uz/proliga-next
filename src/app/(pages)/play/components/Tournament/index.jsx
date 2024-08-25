import Gutter from '../../../../../components/Gutter'
import { useState, useEffect } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import Image from 'next/image'

const Tournament = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('team_point')
        .select('id, point, team_id(name), user_id(email), tour_id(name)')
        .limit(54)
      if (error) return toast.error(error.message)
      if (data?.length > 0) setPlayers(data)
    }
    fetch()
  }, [])

  return (
    <Gutter>
      <section className="flex gap-4">
        <div className="h-min max-h-[36rem] min-h-[36rem] table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-neutral-200 md:w-2/3">
          <table class="w-full table-auto border-spacing-0">
            <thead>
              <tr>
                <th>User</th>
                <th>Team</th>
                <th>Point</th>
                <th>Tour</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} className="px-auto text-center">
                  <td className="w-1/4">{player.user_id?.email}</td>
                  <td className="w-1/4">{player.team_id.name}</td>
                  <td className="w-1/4">{player.point}</td>
                  <td className="w-1/4">{player.tour_id.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex h-min w-1/3 flex-col gap-8">
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">ENG KUCHLI TOP 3 - JAMOALAR</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
            </div>
          </div>
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">
              ENG KUCHLI TOP 3 - Futbolchilar
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  )
}

export default Tournament
