import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTeamPlayers = createAsyncThunk(
  'teamPlayers/fetchTeamPlayers',
  async ({ team_id, tour_id, user_id }) => {
    const { data, error } = await supabase
      .from('team_player')
      .select('*, club_id(name, id, slug)')
      .eq('team_id', team_id)
      .eq('tour_id', tour_id)
      .limit(11)
      .is('deleted_at', null)
      .order('player_id')

    return { data, error }
  }
)
