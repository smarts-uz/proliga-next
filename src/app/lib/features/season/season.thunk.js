import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchSeason = createAsyncThunk('season/fetchSeason', async () => {
  const { data, error } = await supabase
    .from('season')
    .select('id, name, number, active')
    .eq('active', 'TRUE')
  return { data, error }
})
