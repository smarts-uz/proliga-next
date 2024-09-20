import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async ({ season_id }) => {
    const { data, error } = await supabase
      .from('match')
      .select('*')
      .eq('season_id', season_id)

    return { data, error }
  }
)
