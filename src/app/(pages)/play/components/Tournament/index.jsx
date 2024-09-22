import Gutter from '../../../../../components/Gutter'
import { useState, useEffect } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import TopTeams from '../TopTeams'

const Tournament = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('tour_team')
        .select('id, point, team_id(name), user_id(email), tour_id(name)')
        .limit(96)
      if (error) return toast.error(error.message)
      if (data?.length > 0) setPlayers(data)
    }
    fetch()
  }, [])

  return (
    <Gutter>
      <section className="flex gap-4">
        <div className="h-full max-h-[36rem] min-h-[36rem] w-full table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-neutral-200 md:w-2/3">
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
                  <td className="w-1/4">{player.team_id?.name}</td>
                  <td className="w-1/4">{player.point}</td>
                  <td className="w-1/4">{player.tour_id.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TopTeams />
      </section>
    </Gutter>
  )
}

export default Tournament
