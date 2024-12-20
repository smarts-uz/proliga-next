import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchCompetition = createAsyncThunk(
  'competition/fetchCompetition',
  async () => {
    const { data, error } = await supabase
      .from('competition')
      .select('*')
      .is('deleted_at', null)
      .order('order')

    return { data, error }
  }
)
