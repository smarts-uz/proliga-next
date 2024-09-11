import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchCompetition = createAsyncThunk(
  'competition/fetchCompetition',
  async () => {
    const { data, error } = await supabase.from('competition').select('*')
    return { data, error }
  }
)

export const fetchCompetitionStats = createAsyncThunk(
  'competition/fetchCompetitionStats',
  async ({ competition_id, season_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('')
      .eq('competition_id', competition_id)
      .eq('season_id', season_id)

    return { data, error }
  }
)
