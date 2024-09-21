import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async ({ season_id, competition_id }) => {
    const { data, error } = await supabase
      .from('match')
      .select('*')
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .range(0, 9)

    return { data, error }
  }
)
