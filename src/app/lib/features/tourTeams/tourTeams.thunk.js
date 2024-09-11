import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTourTeams = createAsyncThunk(
  'tours/fetchTourTeams',
  async ({ team_id, tour_id }) => {
    const { data, error } = await supabase
      .from('tour_team')
      .select('*')
      .eq('team_id', team_id)

    return { data, error }
  }
)
