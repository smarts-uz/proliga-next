import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('tour')
      .select('*')
      .eq('competition_id', competition_id)
      .order('id', { ascending: true })

    return { data, error }
  }
)
