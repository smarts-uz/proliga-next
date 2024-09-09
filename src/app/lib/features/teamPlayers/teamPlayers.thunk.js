import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTeamPlayers = createAsyncThunk(
  'teamPlayers/fetchTeamPlayers',
  async ({ team_id }) => {
    const { data, error } = await supabase
      .from('team_player')
      .select('*, club_id(name, id, slug)')
      .eq('team_id', team_id)
      .limit(11)

    return { data, error }
  }
)
