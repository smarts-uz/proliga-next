import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchClubs = createAsyncThunk(
  'clubs/fetchClubs',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('club')
      .select('id, name, slug')
      .eq('competition_id', competition_id)
    return { data, error }
  }
)
