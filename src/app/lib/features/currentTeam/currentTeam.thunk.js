import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchCurrentTeam = createAsyncThunk(
  'currentTeam/fetchCurrentTeam',
  async ({ id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*, competition_id(title, id)')
      .eq('id', id)
    return { data, error }
  }
)
