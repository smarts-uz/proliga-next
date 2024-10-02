import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'
import { autoAssembleTeam } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { revertTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.slice'

export const useAutoGenerateTeamPlayers = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { userAuth } = useSelector((state) => state.auth)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { players } = useSelector((state) => state.players)
  const { t } = useTranslation()

  const generateTeamPlayers = async ({ team_id }) => {
    setIsLoading(false)
    setError(null)

    if (!team_id) {
      setError(t('Jamoa ID kiritilmagan!'))
      toast.error(t('Jamoa ID kiritilmagan!'))
    }

    try {
      setIsLoading(true)

      let { data, error } = await supabase.rpc(
        'get_auto_added_player_bu_team_id',
        {
          i_team_id: team_id,
        }
      )
      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        setData(data)
        dispatch(revertTeamPlayers())
        dispatch(
          autoAssembleTeam({
            allPlayers: players,
            playerIds: data,
            team: currentTeam,
          })
        )
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { generateTeamPlayers, isLoading, error, data }
}
