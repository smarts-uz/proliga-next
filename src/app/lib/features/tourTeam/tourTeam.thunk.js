import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTourTeam = createAsyncThunk(
  'tours/fetchTourTeam',
  async ({ team_id, tour_id }) => {
    const { data, error } = await supabase
      .from('tour_team')
      .select('*')
      .eq('team_id', team_id)
      .eq('tour_id', tour_id)

    return { data, error }
  }
)
