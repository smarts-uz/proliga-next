import Gutter from '../../../../../components/Gutter'
import { useState, useReducer, useEffect } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { useGetPlayerStats } from 'app/hooks/statistics/useGetPlayerStats/useGetPlayerStats'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TopTeams from '../TopTeams'

const Statistics = () => {
  const [players, setPlayers] = useState([])
  const { statistics } = useSelector((state) => state.statistics)
  const { getPlayerStats, isLoading, error } = useGetPlayerStats()
  const { t } = useTranslation()
  useEffect(() => {
    const fetch = async () => {
      await getPlayerStats()
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Gutter>
      <section className="flex gap-4">
        <div className="h-min max-h-[36rem] min-h-[36rem] w-full table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-xs text-neutral-200 sm:text-sm md:w-2/3 md:text-base">
          <table class="w-full table-auto border-spacing-0">
            <thead>
              <tr>
                <th>{t('O‘yinchi')}</th>
                <th>{t('Pozitsiya')}</th>
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
                    {player?.player_id?.name ?? 'Oyinchi Ismi'}
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
        <TopTeams />
      </section>
    </Gutter>
  )
}

export default Statistics
