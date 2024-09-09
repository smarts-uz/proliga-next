import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async ({ user_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .eq('user_id', user_id)
    return { data, error }
  }
)
