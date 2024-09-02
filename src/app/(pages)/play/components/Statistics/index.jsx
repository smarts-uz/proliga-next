import Gutter from '../../../../../components/Gutter'
import { useState, useReducer, useEffect } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { useGetPlayerStats } from 'app/hooks/statistics/useGetPlayerStats/useGetPlayerStats'
import { useSelector } from 'react-redux'

const Statistics = () => {
  const [players, setPlayers] = useState([])
  const { statistics } = useSelector((state) => state.statistics)
  const { getPlayerStats, isLoading, error } = useGetPlayerStats()

  useEffect(() => {
    const fetch = async () => {
      await getPlayerStats()
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(players)
  return (
    <Gutter>
      <section className="flex gap-4">
        <div className="h-min max-h-[36rem] min-h-[36rem] table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-neutral-200 md:w-2/3">
          <table class="w-full table-auto border-spacing-0">
            <thead>
              <tr>
                <th>Player</th>
                <th>Position</th>
                <th title="Goal">G</th>
                <th title="Goal Assist">GA</th>
                <th title="Missed Penalty">MP</th>
                <th title="Yellow Card">YC</th>
                <th title="Red Card">RC</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((player) => (
                <tr key={player.id} className="text-center">
                  <td className="w-1/4 truncate">
                    {player.player_id.name ?? 'Player Name'}
                  </td>
                  <td className="w-1/4 truncate">{player.position}</td>
                  <td className="w-1/8 truncate">{player.goal}</td>
                  <td className="w-1/8 truncate">{player.goal_asist}</td>
                  <td className="w-1/8 truncate">{player.missed_penalty}</td>
                  <td className="w-1/8 truncate">{player.yellow_card}</td>
                  <td className="w-1/8 truncate">{player.red_card}</td>
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

export default Statistics
